(() => {
    const STOP_WORDS = new Set([
        "a", "an", "and", "or", "the", "in", "on", "for", "with", "to", "at", "of",
        "de", "du", "des", "la", "le", "les", "et", "pour", "avec", "dans", "sur",
        "activities", "activity", "experiences", "experience", "things", "do", "find",
        "cherche", "chercher", "trouver", "activites", "activite"
    ]);

    const SYNONYMS_TO_CATEGORY = {
        beach: "Beaches", beaches: "Beaches", sea: "Beaches", ocean: "Beaches", coast: "Beaches", swimming: "Beaches",
        hike: "Hiking", hiking: "Hiking", trek: "Hiking", mountain: "Hiking", nature: "Hiking", forest: "Hiking", trails: "Hiking",
        sport: "Sport", sports: "Sport", biking: "Sport", cycling: "Sport", horse: "Sport", horse_riding: "Sport", quad: "Sport", archery: "Sport",
        sahara: "Sahara", desert: "Sahara", dunes: "Sahara", tuareg: "Sahara", oasis: "Sahara", sandboarding: "Sahara",
        historical: "Historical", history: "Historical", museum: "Historical", ruins: "Historical", basilica: "Historical", heritage: "Historical",
        amusement: "Amusement Park", park: "Amusement Park", rides: "Amusement Park",
        cinema: "Cinema", movie: "Cinema", movies: "Cinema", film: "Cinema",
        theatre: "Theatre", theater: "Theatre", drama: "Theatre", concerts: "Theatre",
        "water park": "Water Park", waterpark: "Water Park", slides: "Water Park",
        "cultural center": "Cultural Center", culture: "Cultural Center", exhibitions: "Cultural Center",
        "laser tag": "Laser Tag", laser: "Laser Tag",
        zoo: "Zoo", animals: "Zoo",
        "entertainment complex": "Entertainment Complex", bowling: "Entertainment Complex", karaoke: "Entertainment Complex", vr: "Entertainment Complex",
        "traditional entertainment": "Traditional Entertainment", fantasia: "Traditional Entertainment"
    };

    const PRICE_KEYWORDS = {
        free: { max: 0 },
        cheap: { max: 2000 },
        budget: { max: 3000 },
        affordable: { max: 3500 },
        premium: { min: 7000 },
        luxury: { min: 9000 }
    };

    const RATING_KEYWORDS = new Set(["best", "top", "highest", "rated", "popular", "recommended", "excellent"]);
    const FAMILY_KEYWORDS = new Set(["family", "kids", "children", "famille", "enfants"]);
    const CITIES = ["annaba", "algiers", "oran", "jijel", "skikda", "constantine", "tebessa", "tébessa"];

    function normalizeText(text) {
        return (text || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function tokenize(text) {
        return normalizeText(text).split(" ").filter(Boolean);
    }

    function extractPriceFilter(normalizedQuery) {
        const underMatch = normalizedQuery.match(/(?:under|below|less than|max|up to|moins de)\s+(\d+)/);
        const overMatch = normalizedQuery.match(/(?:over|above|more than|min|at least|plus de)\s+(\d+)/);
        const result = {};
        if (underMatch) result.max = parseInt(underMatch[1], 10);
        if (overMatch) result.min = parseInt(overMatch[1], 10);
        return Object.keys(result).length > 0 ? result : null;
    }

    function parsePriceNumber(value) {
        if (!value) return 0;
        if (String(value).toLowerCase() === "free") return 0;
        const num = String(value).replace(/[^\d]/g, "");
        return num ? parseInt(num, 10) : 0;
    }

    function parseQuery(query, fallbackLocation) {
        const normalized = normalizeText(query);
        const tokens = tokenize(query);

        const parsed = {
            rawQuery: query || "",
            normalizedQuery: normalized,
            categories: [],
            city: fallbackLocation || null,
            priceFilter: extractPriceFilter(normalized),
            sortByRating: false,
            isFamily: false,
            keywords: []
        };

        for (const [keyword, range] of Object.entries(PRICE_KEYWORDS)) {
            if (tokens.includes(keyword)) parsed.priceFilter = range;
        }

        for (const token of tokens) {
            if (RATING_KEYWORDS.has(token)) parsed.sortByRating = true;
            if (FAMILY_KEYWORDS.has(token)) parsed.isFamily = true;
            if (CITIES.includes(token)) parsed.city = token === "tebessa" ? "Tébessa" : token.charAt(0).toUpperCase() + token.slice(1);

            const category = SYNONYMS_TO_CATEGORY[token];
            if (category && !parsed.categories.includes(category)) parsed.categories.push(category);
        }

        parsed.keywords = tokens.filter((t) => !STOP_WORDS.has(t) && !SYNONYMS_TO_CATEGORY[t] && !PRICE_KEYWORDS[t] && !RATING_KEYWORDS.has(t));
        return parsed;
    }

    function scoreItem(item, parsed) {
        let score = 0;
        const haystack = normalizeText([
            item.title, item.name, item.description, item.provider, item.category, item.location, item.cityText,
            item.tags ? item.tags.join(" ") : "",
            item.location && item.location.wilaya ? item.location.wilaya : "",
            item.location && item.location.commune ? item.location.commune : ""
        ].join(" "));

        if (parsed.categories.length > 0) {
            const cat = normalizeText(item.category);
            if (parsed.categories.some((c) => normalizeText(c) === cat)) score += 40;
        }

        if (parsed.city) {
            const cityMatch = haystack.includes(normalizeText(parsed.city));
            if (cityMatch) score += 25;
            else score -= 10;
        }

        if (parsed.keywords.length > 0) {
            for (const keyword of parsed.keywords) {
                if (haystack.includes(keyword)) score += 12;
            }
        }

        if (parsed.isFamily && /family|kids|children|zoo|park/.test(haystack)) score += 10;
        if (parsed.sortByRating) score += (Number(item.rating) || 0) * 5;

        return score;
    }

    function applySearch(data, parsed) {
        let result = [...data];

        if (parsed.categories.length > 0) {
            const categorySet = new Set(parsed.categories.map((c) => normalizeText(c)));
            result = result.filter((item) => categorySet.has(normalizeText(item.category)));
        }

        if (parsed.priceFilter) {
            result = result.filter((item) => {
                const priceNum = parsePriceNumber(item.price);
                if (typeof parsed.priceFilter.max === "number" && priceNum > parsed.priceFilter.max) return false;
                if (typeof parsed.priceFilter.min === "number" && priceNum < parsed.priceFilter.min) return false;
                return true;
            });
        }

        if (parsed.city) {
            const cityNorm = normalizeText(parsed.city);
            result = result.filter((item) => {
                const itemCity = normalizeText(item.cityText || item.location || (item.location && item.location.wilaya) || "");
                const itemCommune = normalizeText(item.location && item.location.commune ? item.location.commune : "");
                return itemCity.includes(cityNorm) || itemCommune.includes(cityNorm);
            });
        }

        result = result
            .map((item) => ({ item, score: scoreItem(item, parsed) }))
            .filter((x) => x.score > 0 || parsed.rawQuery.trim() === "")
            .sort((a, b) => {
                if (parsed.sortByRating) {
                    return (Number(b.item.rating) || 0) - (Number(a.item.rating) || 0) || b.score - a.score;
                }
                return b.score - a.score || String(a.item.title || a.item.name).localeCompare(String(b.item.title || b.item.name));
            })
            .map((x) => x.item);

        return result;
    }

    function buildSummaryHTML(parsed, count) {
        const bits = [];
        if (parsed.categories.length) bits.push(`categories: <span class="ai-keyword">${parsed.categories.join(", ")}</span>`);
        if (parsed.city) bits.push(`city: <span class="ai-keyword">${parsed.city}</span>`);
        if (parsed.priceFilter && typeof parsed.priceFilter.max === "number") bits.push(`max: <span class="ai-keyword">${parsed.priceFilter.max} DZD</span>`);
        if (parsed.priceFilter && typeof parsed.priceFilter.min === "number") bits.push(`min: <span class="ai-keyword">${parsed.priceFilter.min} DZD</span>`);
        if (parsed.sortByRating) bits.push("sorted by <span class=\"ai-keyword\">rating</span>");
        const filterInfo = bits.length ? ` — ${bits.join(", ")}` : "";
        return `Found <strong>${count}</strong> result${count !== 1 ? "s" : ""}${filterInfo}`;
    }

    async function geminiEnhanceQuery(rawQuery, apiKey) {
        if (!rawQuery || !apiKey) return null;
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
        const prompt = [
            "Convert this user search into normalized JSON fields for a tourism search engine.",
            "Return strict JSON only with keys: categories (array), city (string|null), minPrice (number|null), maxPrice (number|null), keywords (array), sortByRating (boolean), isFamily (boolean).",
            `Query: ${rawQuery}`
        ].join("\n");

        const response = await fetch(`${url}?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        if (!response.ok) throw new Error("Gemini API request failed");
        const payload = await response.json();
        const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
        return JSON.parse(text);
    }

    window.RuleBasedNlpEngine = {
        parseQuery,
        applySearch,
        buildSummaryHTML,
        geminiEnhanceQuery
    };
})();
