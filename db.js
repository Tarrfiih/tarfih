const tarfihDB = {
    enterprises: [
        {
            providerId: "Webike",
            name: "Webike",
            city: "Annaba",
            credentials: "RC: 23/00-1234567A21",
            address: "Boulevard Rizqi Rachid, Annaba",
            link: "https://webike-annaba.dz",
            email: "contact@webike-annaba.dz",
            phone: "+213 550 12 34 56",
            reviewsCount: 120,
            rating: 4.8,
            localisation: { lat: 36.9000, lng: 7.7667 },
            image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=400&q=80",
            category: "Sport",
            description: "Premium bicycle rental and guided cycling tours."
        },
        {
            providerId: "Equinva",
            name: "Equinva",
            city: "Annaba",
            credentials: "FEA Affiliated Club",
            address: "Route de Seraïdi, Annaba",
            link: "https://instagr.am/equinva_annaba",
            email: "info@equinva.dz",
            phone: "+213 661 98 76 54",
            reviewsCount: 85,
            rating: 4.9,
            localisation: { lat: 36.9142, lng: 7.7420 },
            image: "https://images.unsplash.com/photo-1598502598522-a988d4c82b09?auto=format&fit=crop&w=400&q=80",
            category: "Sport",
            description: "Equestrian club providing scenic horse riding treks."
        },
        {
            providerId: "Forest Adventure",
            name: "Forest Adventure",
            city: "Annaba",
            credentials: "Safety Certified EN-15567",
            address: "Parc Edough, Seraïdi, Annaba",
            link: "https://forestadventure-dz.com",
            email: "booking@forestadventure-dz.com",
            phone: "+213 770 11 22 33",
            reviewsCount: 210,
            rating: 4.7,
            localisation: { lat: 36.9200, lng: 7.7200 },
            image: "https://images.unsplash.com/photo-1588145155609-b7b539fb99c1?auto=format&fit=crop&w=400&q=80",
            category: "Hiking",
            description: "High ropes courses and zip lines for all ages."
        },
        {
            providerId: "Annaba Sea Tours",
            name: "Annaba Sea Tours",
            city: "Annaba",
            credentials: "Maritime Transport License",
            address: "Port de Plaisance, Annaba",
            link: "https://annabaseatours.dz",
            email: "tours@annabaseatours.dz",
            phone: "+213 555 11 22 33",
            reviewsCount: 340,
            rating: 4.9,
            localisation: { lat: 36.903, lng: 7.771 },
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80",
            category: "Beaches",
            description: "Explore the coast with guided boat trips."
        },
        {
            providerId: "Seraidi Advenutres",
            name: "Seraidi Adventures",
            city: "Annaba",
            credentials: "Guide Agreement No 23-AG",
            address: "Centre Ville Seraidi, Annaba",
            link: "https://seraidi-adventures.dz",
            email: "hike@seraidi-adventures.dz",
            phone: "+213 666 44 55 66",
            reviewsCount: 180,
            rating: 4.9,
            localisation: { lat: 36.915, lng: 7.683 },
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
            category: "Hiking",
            description: "Mountain hiking and nature discovery."
        },
        {
            providerId: "Wild DZ",
            name: "Wild DZ",
            city: "Annaba",
            credentials: "National Parks Authorization",
            address: "Ain Achir, Annaba",
            link: "https://wild-dz.com",
            email: "support@wild-dz.com",
            phone: "+213 661 22 33 44",
            reviewsCount: 200,
            rating: 4.8,
            localisation: { lat: 36.950, lng: 7.770 },
            image: "https://images.unsplash.com/photo-1506541170757-bb6571faebac?auto=format&fit=crop&w=400&q=80",
            category: "Sahara",
            description: "Extreme outdoors, bivouacs, and Saharan trips."
        },
        {
            providerId: "Annaba Equestrian",
            name: "Annaba Equestrian",
            city: "Annaba",
            credentials: "FEA Licensed",
            address: "Annaba Countryside",
            link: "https://annabaequestrian.dz",
            email: "contact@annabaequestrian.dz",
            phone: "+213 552 44 55 88",
            reviewsCount: 154,
            rating: 4.9,
            localisation: { lat: 36.880, lng: 7.710 },
            image: "https://images.unsplash.com/photo-1553649556-ea1eecfadd71?auto=format&fit=crop&w=400&q=80",
            category: "Sport",
            description: "A traditional horseback riding club."
        }
    ]
};

const algerianEntertainmentDB = [
  {
    id: "ent_001",
    name: "Dounia Park",
    description: "Largest amusement park in Algiers with roller coasters, family rides, arcade games, and seasonal events. Perfect for family outings and thrill seekers.",
    category: "Amusement Park",
    tags: ["rides", "family", "adventure", "arcade", "thrill"],
    credentials: {
      registrationNumber: "RG-12345-ALG",
      taxId: "4012345678",
      businessLicense: "ALG-ENT-2021-001"
    },
    phone: "+213 561 23 45 67",
    email: "contact@douniapark.dz",
    location: {
      address: "Route de l'Université, Bab Ezzouar",
      wilaya: "Algiers",
      commune: "Bab Ezzouar",
      lat: 36.7167,
      lng: 3.1833
    },
    socialMedia: {
      facebook: "https://facebook.com/DouniaParkDZ",
      instagram: "https://instagram.com/douniapark",
      tiktok: "https://tiktok.com/@douniapark"
    },
    website: "https://www.douniapark.dz",
    openingHours: "10:00-20:00 (Sat-Wed), 10:00-23:00 (Thu-Fri)",
    rating: 4.5,
    createdAt: "2023-01-15T09:00:00Z",
    updatedAt: "2025-02-10T14:30:00Z"
  },
  {
    id: "ent_002",
    name: "Cinéma Le Colisée",
    description: "Historic cinema in central Algiers screening international and Algerian films. Features Dolby Atmos and a retro café.",
    category: "Cinema",
    tags: ["movies", "film", "art house", "blockbusters", "culture"],
    credentials: {
      registrationNumber: "RG-67890-ALG",
      taxId: "4023456789",
      businessLicense: "ALG-CIN-2019-045"
    },
    phone: "+213 23 47 12 34",
    email: "info@colisee-cinema.dz",
    location: {
      address: "Rue Larbi Ben M'hidi, Alger Centre",
      wilaya: "Algiers",
      commune: "Alger Centre",
      lat: 36.7766,
      lng: 3.0582
    },
    socialMedia: {
      facebook: "https://facebook.com/coliseecinema",
      instagram: "https://instagram.com/colisee_cinema"
    },
    website: "https://www.colisee-cinema.dz",
    openingHours: "14:00-23:00 daily",
    rating: 4.7,
    createdAt: "2022-06-10T11:00:00Z",
    updatedAt: "2025-01-20T09:15:00Z"
  },
  {
    id: "ent_003",
    name: "Escape Game Oran",
    description: "Immersive escape rooms with themes like 'Corsairs of Oran' and 'Mystery of Santa Cruz'. For groups of 2-6 players.",
    category: "Escape Room",
    tags: ["puzzles", "team building", "adventure", "mystery"],
    credentials: {
      registrationNumber: "RG-11223-ORN",
      taxId: "4045678901",
      businessLicense: "ORN-ENT-2022-012"
    },
    phone: "+213 41 33 22 11",
    email: "contact@escapeoran.dz",
    location: {
      address: "Boulevard de l'ALN, Hai El Badr",
      wilaya: "Oran",
      commune: "El Badr",
      lat: 35.6969,
      lng: -0.6331
    },
    socialMedia: {
      instagram: "https://instagram.com/escape_oran",
      facebook: "https://facebook.com/escapeorandz"
    },
    website: "https://www.escapeoran.dz",
    openingHours: "13:00-22:00 (Tue-Sun)",
    rating: 4.8,
    createdAt: "2023-05-22T08:00:00Z",
    updatedAt: "2025-02-01T12:00:00Z"
  },
  {
    id: "ent_004",
    name: "Théâtre National Algérien Mahieddine Bachtarzi",
    description: "Prestigious national theatre hosting plays, classical music concerts, and contemporary dance. Iconic venue in Algiers.",
    category: "Theatre",
    tags: ["drama", "concerts", "ballet", "cultural", "live performance"],
    credentials: {
      registrationNumber: "RG-55443-ALG",
      taxId: "4056789012",
      businessLicense: "ALG-THE-1987-001"
    },
    phone: "+213 21 63 11 11",
    email: "contact@tna.dz",
    location: {
      address: "11 Rue Larbi Ben M'hidi, Alger Centre",
      wilaya: "Algiers",
      commune: "Alger Centre",
      lat: 36.7763,
      lng: 3.0567
    },
    socialMedia: {
      facebook: "https://facebook.com/tna.dz",
      youtube: "https://youtube.com/tnaalgerie"
    },
    website: "https://www.tna.dz",
    openingHours: "Box office: 10:00-18:00, shows from 19:00",
    rating: 4.6,
    createdAt: "2021-11-01T10:00:00Z",
    updatedAt: "2024-12-10T16:20:00Z"
  },
  {
    id: "ent_005",
    name: "Aqualand Sidi Fredj",
    description: "Large water park with wave pools, slides, and lazy river. Open during summer season. Family-friendly.",
    category: "Water Park",
    tags: ["swimming", "slides", "summer", "family", "refreshment"],
    credentials: {
      registrationNumber: "RG-99887-ALG",
      taxId: "4078901234",
      businessLicense: "ALG-AQUA-2020-099"
    },
    phone: "+213 23 39 00 11",
    email: "info@aqualand-dz.com",
    location: {
      address: "Plage Sidi Fredj, Staoueli",
      wilaya: "Algiers",
      commune: "Staoueli",
      lat: 36.7564,
      lng: 2.8977
    },
    socialMedia: {
      instagram: "https://instagram.com/aqualand.dz",
      facebook: "https://facebook.com/aqualandalger"
    },
    website: "https://www.aqualand-dz.com",
    openingHours: "10:00-18:00 (Jun-Sep only)",
    rating: 4.3,
    createdAt: "2022-03-14T13:00:00Z",
    updatedAt: "2025-01-05T09:30:00Z"
  },
  {
    id: "ent_006",
    name: "Palais de la Culture Moufdi Zakaria",
    description: "Multipurpose cultural centre with exhibition halls, a 1500-seat auditorium, art workshops, and film screenings.",
    category: "Cultural Center",
    tags: ["exhibitions", "music", "art", "conferences", "library"],
    credentials: {
      registrationNumber: "RG-33221-ALG",
      taxId: "4098765432",
      businessLicense: "ALG-CULT-1998-022"
    },
    phone: "+213 21 90 15 15",
    email: "contact@pcmz.dz",
    location: {
      address: "Boulevard des Martyrs, Alger",
      wilaya: "Algiers",
      commune: "Alger Centre",
      lat: 36.7698,
      lng: 3.0562
    },
    socialMedia: {
      facebook: "https://facebook.com/pcmoufdizakaria",
      instagram: "https://instagram.com/palais_culture_algiers"
    },
    website: "https://www.pcmz.dz",
    openingHours: "09:00-20:00 (Mon-Sat)",
    rating: 4.5,
    createdAt: "2021-09-18T09:00:00Z",
    updatedAt: "2024-11-22T14:00:00Z"
  },
  {
    id: "ent_007",
    name: "Laser Game Evolution Alger",
    description: "High-tech laser tag arena with neon lights, multi-level arenas, and birthday party packages.",
    category: "Laser Tag",
    tags: ["action", "group game", "birthday", "indoor", "sport"],
    credentials: {
      registrationNumber: "RG-77665-ALG",
      taxId: "4012349876",
      businessLicense: "ALG-LSR-2023-045"
    },
    phone: "+213 561 98 76 54",
    email: "alger@lasergame.dz",
    location: {
      address: "Centre Commercial Bab Ezzouar, Niveau 3",
      wilaya: "Algiers",
      commune: "Bab Ezzouar",
      lat: 36.7142,
      lng: 3.1846
    },
    socialMedia: {
      instagram: "https://instagram.com/lasergame_dz",
      facebook: "https://facebook.com/lasergamealger"
    },
    website: "https://www.lasergame.dz",
    openingHours: "14:00-22:00 daily",
    rating: 4.4,
    createdAt: "2023-07-01T10:30:00Z",
    updatedAt: "2025-02-18T17:45:00Z"
  },
  {
    id: "ent_008",
    name: "Zoo de Ben Aknoun",
    description: "Major zoological park with over 120 species, a botanical garden, and children's play areas.",
    category: "Zoo",
    tags: ["animals", "nature", "family", "education", "outdoor"],
    credentials: {
      registrationNumber: "RG-44556-ALG",
      taxId: "4033445566",
      businessLicense: "ALG-ZOO-1960-001"
    },
    phone: "+213 21 39 12 34",
    email: "contact@zoo-benaknoun.dz",
    location: {
      address: "Chemin Ibn Badis, Ben Aknoun",
      wilaya: "Algiers",
      commune: "Ben Aknoun",
      lat: 36.7450,
      lng: 3.0150
    },
    socialMedia: {
      facebook: "https://facebook.com/zoobenaknoun",
      instagram: "https://instagram.com/zoobenaknoun_official"
    },
    website: "https://www.zoobenaknoun.dz",
    openingHours: "09:00-17:00 (closed Mondays)",
    rating: 4.2,
    createdAt: "2022-08-05T08:00:00Z",
    updatedAt: "2024-10-01T11:00:00Z"
  },
  {
    id: "ent_009",
    name: "Constantine Entertainment Complex – Cirta City",
    description: "Modern entertainment hub with bowling alley, karaoke rooms, billiards, and a virtual reality arcade.",
    category: "Entertainment Complex",
    tags: ["bowling", "VR", "karaoke", "nightlife", "games"],
    credentials: {
      registrationNumber: "RG-66778-CON",
      taxId: "4067788990",
      businessLicense: "CON-ENT-2022-008"
    },
    phone: "+213 31 46 77 88",
    email: "info@cirtacity.dz",
    location: {
      address: "Route de Batna, Ali Mendjeli",
      wilaya: "Constantine",
      commune: "Ali Mendjeli",
      lat: 36.3650,
      lng: 6.6147
    },
    socialMedia: {
      instagram: "https://instagram.com/cirtacity",
      facebook: "https://facebook.com/cirtacityconstantine"
    },
    website: "https://www.cirtacity.dz",
    openingHours: "15:00-00:00 (Sun-Thu), 12:00-02:00 (Fri-Sat)",
    rating: 4.6,
    createdAt: "2023-11-20T14:00:00Z",
    updatedAt: "2025-01-30T10:20:00Z"
  },
  {
    id: "ent_010",
    name: "Fantasia Tébessa – Live Shows",
    description: "Traditional Fantasia horse riding and gunpowder shows, combined with folk music and Algerian cuisine.",
    category: "Traditional Entertainment",
    tags: ["fantasia", "culture", "horses", "folk", "outdoor show"],
    credentials: {
      registrationNumber: "RG-88990-TEB",
      taxId: "4077112233",
      businessLicense: "TEB-ENT-2019-011"
    },
    phone: "+213 37 66 22 11",
    email: "reservation@fantasia-tebessa.dz",
    location: {
      address: "Route de Bir El Ater, Zone Touristique",
      wilaya: "Tébessa",
      commune: "Tébessa",
      lat: 35.4050,
      lng: 8.1192
    },
    socialMedia: {
      facebook: "https://facebook.com/fantasiatebessa",
      youtube: "https://youtube.com/fantasiadz"
    },
    website: "https://www.fantasia-dz.com",
    openingHours: "Shows: every Thu & Sat at 19:00 (seasonal)",
    rating: 4.9,
    createdAt: "2022-04-12T09:00:00Z",
    updatedAt: "2024-12-05T13:45:00Z"
  }
];

tarfihDB.partners = algerianEntertainmentDB;
