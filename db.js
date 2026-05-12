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
      images: ["imgs/equinova1.jfif", "imgs/equinova2.jfif", "imgs/equinova3.jfif"],
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
      image: "imgs/forestad.jfif",
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
    },
    {
      providerId: "CSA Hippone",
      name: "CSA Hippone Omnisports",
      city: "Annaba",
      credentials: "Club Sportif Agréé",
      address: "Belvédère, Annaba",
      link: "#",
      email: "contact@csahippone.dz",
      phone: "+213 38 00 00 01",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9100, lng: 7.7650 },
      images: ["imgs/hippone.jfif", "imgs/plng1.jfif"],
      category: "Sport",
      description: "Sports nautiques, natation et plongée au cœur du Belvédère d'Annaba."
    },
    {
      providerId: "Forest Adventure Annaba",
      name: "Forest Adventure Annaba",
      city: "Annaba",
      credentials: "Parc Aventure Certifié",
      address: "Parc Citadin Ain Achir, Annaba",
      link: "#",
      email: "contact@forestadventure-annaba.dz",
      phone: "+213 38 00 00 02",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9350, lng: 7.7500 },
      image: "imgs/forestad.jfif",
      category: "Hiking",
      description: "Parc aventure et accrobranche au Parc Citadin Ain Achir."
    },
    {
      providerId: "Horizon Discovery Annaba",
      name: "Horizon Discovery Annaba",
      city: "Annaba",
      credentials: "Agence d'Excursions Agréée",
      address: "Annaba – Seraïdi",
      link: "#",
      email: "contact@horizondiscovery.dz",
      phone: "+213 38 00 00 03",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9180, lng: 7.7200 },
      images: ["imgs/horizon1.jfif", "imgs/horizon2.jfif", "imgs/horizon3.jfif"],
      category: "Hiking",
      description: "Excursions et découverte des merveilles naturelles d'Annaba et Seraïdi."
    },
    {
      providerId: "EquiNova",
      name: "Club D'équitation EquiNova",
      city: "Annaba",
      credentials: "Club d'Équitation Agréé FEA",
      address: "Aïn Achir, Annaba",
      link: "#",
      email: "contact@equinova.dz",
      phone: "+213 38 00 00 04",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9300, lng: 7.7480 },
      image: "https://images.unsplash.com/photo-1553649556-ea1eecfadd71?auto=format&fit=crop&w=400&q=80",
      category: "Sport",
      description: "Club d'équitation proposant des balades et formations à Aïn Achir."
    },
    {
      providerId: "We Bike",
      name: "We Bike",
      city: "Annaba",
      credentials: "Service de Location Agréé",
      address: "Seraïdi, Annaba",
      link: "#",
      email: "contact@webike-dz.dz",
      phone: "+213 38 00 00 05",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9160, lng: 7.6850 },
      image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=400&q=80",
      category: "Sport",
      description: "Location de vélos et sorties cyclisme dans les hauteurs de Seraïdi."
    },
    {
      providerId: "She Bikes",
      name: "She Bikes",
      city: "Annaba",
      credentials: "Association Sportive Féminine",
      address: "Annaba",
      link: "#",
      email: "contact@shebikes.dz",
      phone: "+213 38 00 00 06",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9000, lng: 7.7667 },
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=400&q=80",
      category: "Sport",
      description: "Activités vélo dédiées aux femmes à Annaba — sport, liberté et découverte."
    },
    {
      providerId: "CAPFUN SERAIDI",
      name: "CAPFUN SERAIDI",
      city: "Annaba",
      credentials: "Centre d'Aventure Agréé",
      address: "Seraïdi, Annaba",
      link: "#",
      email: "contact@capfun-seraidi.dz",
      phone: "+213 38 00 00 07",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9200, lng: 7.6800 },
      images: ["imgs/parapente.jfif", "imgs/quad.jfif"],
      category: "Hiking",
      description: "Quad, parapente et aventures multiples dans les montagnes de Seraïdi."
    },
    {
      providerId: "Location Bateaux Annaba",
      name: "Location Bateaux Annaba",
      city: "Annaba",
      credentials: "Licence de Transport Maritime",
      address: "Plages d'Annaba",
      link: "#",
      email: "contact@locationbateaux-annaba.dz",
      phone: "+213 38 00 00 08",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9030, lng: 7.7710 },
      image: "imgs/locartion bateau.jfif",
      category: "Beaches",
      description: "Balades en mer et location de bateaux sur les plus belles plages d'Annaba."
    },
    {
      providerId: "Nirvana Adventure",
      name: "Nirvana Adventure",
      city: "Annaba",
      credentials: "Club d'Aventure Agréé",
      address: "Annaba – Seraïdi – Edough",
      link: "#",
      email: "contact@nirvana-adventure.dz",
      phone: "+213 38 00 00 09",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9150, lng: 7.7000 },
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      category: "Hiking",
      description: "Randonnée, camping, balade en mer et kayak entre Annaba, Seraïdi et l'Edough."
    },
    {
      providerId: "Kids Land Annaba",
      name: "Kids Land Annaba",
      city: "Annaba",
      credentials: "Parc de Loisirs Agréé",
      address: "Annaba",
      link: "#",
      email: "contact@kidsland-annaba.dz",
      phone: "+213 38 00 00 10",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9050, lng: 7.7600 },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      category: "Sport",
      description: "Quad et aire de jeux pour enfants — fun et aventure en famille à Annaba."
    },
    {
      providerId: "Hippone Hiking Camp",
      name: "Hippone Hiking & Camp",
      city: "Annaba",
      credentials: "Association de Randonnée Agréée",
      address: "Massif de l'Edough, Annaba",
      link: "#",
      email: "contact@hippone-hiking.dz",
      phone: "+213 38 00 00 11",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9400, lng: 7.7100 },
      image: "imgs/hippone.jfif",
      category: "Hiking",
      description: "Randonnée et camping au cœur du massif de l'Edough."
    },
    {
      providerId: "Excursions Photographiques",
      name: "Excursions Photographiques",
      city: "Annaba",
      credentials: "Agence de Tourisme Photographique",
      address: "Seraïdi / Cap de Garde, Annaba",
      link: "#",
      email: "contact@excursions-photo.dz",
      phone: "+213 38 00 00 12",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9250, lng: 7.6900 },
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=400&q=80",
      category: "Hiking",
      description: "Sorties de tourisme photographique à Seraïdi et Cap de Garde."
    },
    {
      providerId: "Sorties Natation Annaba",
      name: "Sorties d'Apprentissage de la Natation",
      city: "Annaba",
      credentials: "Moniteurs Diplômés d'État",
      address: "Piscines et plages d'Annaba",
      link: "#",
      email: "contact@natation-annaba.dz",
      phone: "+213 38 00 00 13",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9010, lng: 7.7640 },
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=400&q=80",
      category: "Sport",
      description: "Formation et apprentissage de la natation en piscine et en plage à Annaba."
    },
    {
      providerId: "Gravity Club",
      name: "Gravity Club",
      city: "Annaba",
      credentials: "Club d'Aventure et Tourisme Agréé",
      address: "Seraïdi – Massif de l'Edough – Annaba",
      link: "#",
      email: "contact@gravity-club.dz",
      phone: "+213 38 00 00 14",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9180, lng: 7.6950 },
      image: "imgs/gravity.jfif",
      category: "Hiking",
      description: "Randonnée, camping, tourisme d'aventure et activités outdoor entre Seraïdi et l'Edough."
    },
    {
      providerId: "Annaba ADVENTURE",
      name: "Annaba ADVENTURE",
      city: "Annaba",
      credentials: "Agence d'Aventure Outdoor",
      address: "Annaba",
      link: "#",
      email: "contact@annaba-adventure.dz",
      phone: "+213 38 00 00 15",
      reviewsCount: 0,
      rating: 5.0,
      localisation: { lat: 36.9000, lng: 7.7667 },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      category: "Hiking",
      description: "Adventure et sorties outdoor pour tous les amateurs de sensations fortes à Annaba."
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
