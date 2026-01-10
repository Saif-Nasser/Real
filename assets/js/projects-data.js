const rawProjectsData = [];

// Enrich data with details
// Enrich data with details
const projectsData = rawProjectsData.map((project, index) => {
    let price = "20.6 M AED";
    let paymentPlan = "40/60";
    let handover = "Q4 2025";

    // Specific overrides for first 8 projects
    if (index === 0) {
        price = "20.6 M AED";
        paymentPlan = "40/60";
        handover = "Q4 2025";
    } else if (index === 1) {
        price = "4.9 M AED";
        paymentPlan = "60/40";
        handover = "Q2 2025";
    } else if (index === 2) {
        price = "21.5 M AED";
        paymentPlan = "60/40";
        handover = "Q4 2026";
    } else if (index === 3) {
        price = "1.2 M AED";
        paymentPlan = "40/60";
        handover = "Q4 2024";
    } else if (index === 4) {
        price = "450 K AED";
        paymentPlan = "40/60";
        handover = "Q2 2024";
    } else if (index === 5) {
        price = "162 K AED";
        paymentPlan = "50/50";
        handover = "Q4 2026";
    } else if (index === 6) {
        price = "550 K AED";
        paymentPlan = "60/40";
        handover = "Q3 2025";
    } else if (index === 7) {
        price = "599 K AED";
        paymentPlan = "60/40";
        handover = "Q4 2025";
    } else if (index === 8) {
        price = "1.1 M AED";
        paymentPlan = "74/26";
        handover = "Q2 2028";
    } else if (index === 9) {
        price = "450 K AED";
        paymentPlan = "50/50";
        handover = "Q3 2025";
    } else if (index === 10) {
        price = "850 K AED";
        paymentPlan = "65/35";
        handover = "Pay 1%"; // Special case
    } else if (index === 11) {
        price = "950 K AED";
        paymentPlan = "65/35";
        handover = "Q2 2026";
    } else if (index === 12) {
        price = "650 K AED";
        paymentPlan = "65/35";
        handover = "Pay 1%"; // Special case
    } else if (index === 13) {
        price = "1.1 M AED";
        paymentPlan = "65/35";
        handover = "Q1 2027";
    } else if (index === 14) {
        price = "700 K AED";
        paymentPlan = "65/35";
        handover = "Pay 1%"; // Special case
    } else if (index === 15) {
        price = "21 M AED";
        paymentPlan = "80/20";
        handover = "Q3 2027";
    } else if (index === 16) {
        price = "18 M AED";
        paymentPlan = "80/20";
        handover = "2027";
    } else if (index === 17) {
        price = "2.6 M AED";
        paymentPlan = "80/20";
        handover = "Q4 2026";
    } else if (index === 18) {
        price = "29 M AED";
        paymentPlan = "80/20";
        handover = "2027";
    } else if (index === 19) {
        price = "750 K AED";
        paymentPlan = "60/40";
        handover = "Q4 2024";
    } else if (index === 20) {
        price = "1.87 M AED";
        paymentPlan = "80/20";
        handover = "Q3 2027";
    } else if (index === 21) {
        price = "19 M AED";
        paymentPlan = "70/30";
        handover = "Q4 2025";
    } else if (index === 22) {
        price = "825 K AED";
        paymentPlan = "70/30";
        handover = "Q4 2024";
    } else if (index === 23) {
        price = "8.2 M AED";
        paymentPlan = "70/30";
        handover = "Q2 2026";
    } else if (index === 24) {
        price = "1.6 M AED";
        paymentPlan = "70/30";
        handover = "Q4 2024";
    } else if (index === 25) {
        price = "22 M AED";
        paymentPlan = "50/50";
        handover = "Q4 2026";
    } else if (index === 26) {
        price = "3.16 M AED";
        paymentPlan = "Exclusive Terms";
        handover = "Ready";
    } else if (index === 27) {
        price = "1.45 M AED";
        paymentPlan = "60/40";
        handover = "Q4 2026";
    } else if (index === 28) {
        price = "20 M AED";
        paymentPlan = "60/40";
        handover = "2027";
    } else if (index === 29) {
        price = "30 M AED";
        paymentPlan = "60/40";
        handover = "Q4 2026";
    } else if (index === 30) {
        price = "2.5 M AED";
        paymentPlan = "5/95";
        handover = "5%";
    } else if (index === 31) {
        price = "1.53 M AED";
        paymentPlan = "Easy";
        handover = "Ready";
    } else if (index === 32) {
        price = "1.4 M AED";
        paymentPlan = "50/50";
        handover = "Q3 2024";
    } else if (index === 33) {
        price = "2.5 M AED";
        paymentPlan = "60/40";
        handover = "Q3 2026";
    } else if (index === 34) {
        price = "970 K AED";
        paymentPlan = "40/60";
        handover = "Q3 2026";
    } else if (index === 35) {
        price = "1.76 M AED";
        paymentPlan = "60/40";
        handover = "Q1 2026";
    } else if (index === 36) {
        price = "2.7 M AED";
        paymentPlan = "10/90";
        handover = "Ready";
    } else if (index === 37) {
        price = "1.1 M AED";
        paymentPlan = "40/60";
        handover = "Q4 2026";
    } else if (index === 38) {
        price = "1.8 M AED";
        paymentPlan = "10/90";
        handover = "Ready";
    } else if (index === 39) {
        price = "1.4 M AED";
        paymentPlan = "40/60";
        handover = "Q4 2026";
    } else if (index === 40) {
        price = "7.68 M AED";
        paymentPlan = "80/20";
        handover = "Q2 2026";
    } else if (index === 41) {
        price = "1.69 M AED";
        paymentPlan = "80/20";
        handover = "Q4 2026";
    } else if (index === 42) {
        price = "1.1 M AED";
        paymentPlan = "60/40";
        handover = "Q4 2026";
    } else if (index === 43) {
        price = "1.49 M AED";
        paymentPlan = "80/20";
        handover = "Q4 2027";
    } else if (index === 44) {
        price = "3.2 M AED";
        paymentPlan = "80/20";
        handover = "Q4 2026";
    } else if (index === 45) {
        price = "2.02 M AED";
        paymentPlan = "60/40";
        handover = "Q2 2027";
    } else if (index === 46) {
        price = "3.9 M AED";
        paymentPlan = "50/50";
        handover = "Q2 2025";
    } else if (index === 47) {
        price = "2.3 M AED";
        paymentPlan = "70/30";
        handover = "Q4 2026";
    } else if (index === 48) {
        price = "2.73 M AED";
        paymentPlan = "70/30";
        handover = "Q3 2027";
    } else if (index === 49) {
        price = "1.67 M AED";
        paymentPlan = "80/20";
        handover = "Q1 2028";
    } else if (index === 50) {
        price = "5.09 M AED";
        paymentPlan = "65/35";
        handover = "Q4 2027";
    } else if (index === 51) {
        price = "18.1M AED";
        paymentPlan = "60/40";
        handover = "Q4 2026";
    } else if (index === 52) {
        price = "1.65 M AED";
        paymentPlan = "70/30";
        handover = "Q1 2028";
    } else if (index === 53) {
        price = "2.9M AED";
        paymentPlan = "70/30";
        handover = "Q1 2027";
    } else if (index === 54) {
        price = "2.5 M AED";
        paymentPlan = "20/80";
        handover = "Q2 2028";
    } else if (index === 55) {
        price = "1.6 M AED";
        paymentPlan = "90/10";
        handover = "Q4 2027";
    } else if (index === 56) {
        price = "1.6 M AED";
        paymentPlan = "90/10";
        handover = "Q4 2027";
    } else if (index === 59) {
        price = "3.5 M AED";
        paymentPlan = "90/10";
        handover = "Q2 2027";
    } else if (index === 60) {
        price = "11.2 M AED";
        paymentPlan = "90/10";
        handover = "Q4 2027";
    }

    else if (index === 60) {
        price = "11.2 M AED";
        paymentPlan = "90/10";
        handover = "Q4 2027";
    }

    let handoverLabel = "Handover";
    if (handover === "Pay 1%") {
        handoverLabel = "Per Month";
    } else if (handover === "Ready") {
        if (index === 31) {
            handoverLabel = "to Move";
        } else if (index === 36 || index === 38) {
            handoverLabel = "To Move-In";
        } else {
            handoverLabel = "to move in";
        }
    } else if (handover === "5%") {
        handoverLabel = "Every 5 months";
    }

    // Property-specific details
    const propertyDetails = getPropertyDetails(index, project);

    return {
        ...project,
        id: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        originalIndex: index + 1,
        price: price,
        paymentPlan: paymentPlan,
        handover: handover,
        handoverLabel: handoverLabel,
        commission: "0% Commission",
        bedrooms: propertyDetails.bedrooms,
        description: propertyDetails.description,
        amenities: propertyDetails.amenities,
        features: propertyDetails.features,
        completionStatus: propertyDetails.completionStatus,
        nearbyLandmarks: propertyDetails.nearbyLandmarks
    };
});

// Function to get property-specific details
function getPropertyDetails(index, project) {
    const details = {
        // Project 0: Arada Masaar Sarai
        0: {
            bedrooms: "4-6 Bedroom Villas",
            description: `Experience luxury living at <strong>Arada Masaar Sarai</strong> in <strong>Al Suyoh Suburb, Sharjah</strong>. This exclusive villa community by <strong>Arada</strong> offers spacious 4-6 bedroom villas with private gardens and modern architecture. Surrounded by lush greenery and world-class amenities, Masaar Sarai provides a perfect blend of tranquility and convenience for families seeking an upscale lifestyle.`,
            amenities: ["Swimming Pool", "Gym & Fitness Center", "Kids Play Area", "BBQ Areas", "Jogging Tracks", "Community Center", "24/7 Security", "Covered Parking"],
            features: ["Private Garden", "Maid's Room", "Study Room", "Built-in Wardrobes", "Central A/C", "Smart Home System"],
            completionStatus: "Off-Plan",
            nearbyLandmarks: ["Sharjah Airport - 15 min", "University City - 10 min", "City Centre Sharjah - 20 min"]
        },
        // Project 1: Arada Jouri Hills
        1: {
            bedrooms: "5-7 Bedroom Villas",
            description: `<strong>Arada Jouri Hills</strong> in <strong>Jumeirah Golf Estates</strong> presents ultra-luxury villas designed for golf enthusiasts and luxury seekers. Developed by <strong>Arada</strong>, these 5-7 bedroom villas feature contemporary architecture, premium finishes, and stunning golf course views. Enjoy an exclusive lifestyle with access to championship golf courses and world-class amenities.`,
            amenities: ["Championship Golf Courses", "Clubhouse", "Swimming Pools", "Tennis Courts", "Fitness Center", "Spa & Wellness", "Fine Dining Restaurants", "Kids Club"],
            features: ["Golf Course View", "Private Pool", "Elevator", "Home Cinema", "Wine Cellar", "Driver's Room", "Smart Home Technology"],
            completionStatus: "Off-Plan",
            nearbyLandmarks: ["Dubai Marina - 20 min", "Palm Jumeirah - 25 min", "Dubai International Airport - 35 min"]
        },
        // Project 2: Arada Armani Beach Residences
        2: {
            bedrooms: "2-4 Bedroom Apartments",
            description: `<strong>Arada Armani Beach Residences</strong> on <strong>Palm Jumeirah</strong> epitomizes luxury beachfront living. This prestigious development by <strong>Arada</strong> offers 2-4 bedroom apartments with Armani/Casa interiors, floor-to-ceiling windows, and breathtaking sea views. Experience the perfect fusion of Italian elegance and Dubai's coastal lifestyle.`,
            amenities: ["Private Beach Access", "Infinity Pool", "Armani Spa", "Fine Dining", "Concierge Service", "Valet Parking", "Cigar Lounge", "Business Center"],
            features: ["Sea View", "Armani/Casa Interiors", "Floor-to-Ceiling Windows", "Premium Kitchen Appliances", "Walk-in Closets", "Smart Home System"],
            completionStatus: "Off-Plan",
            nearbyLandmarks: ["Nakheel Mall - 5 min", "Dubai Marina - 15 min", "Burj Al Arab - 20 min"]
        },
        // Project 3: Azizi Riviera Rêve
        3: {
            bedrooms: "Studio, 1-2 Bedroom Apartments",
            description: `<strong>Azizi Riviera Rêve</strong> in <strong>Nad Al Sheba 1</strong> offers French Riviera-inspired living in Dubai. This <strong>Azizi</strong> development features studio to 2-bedroom apartments with elegant interiors and resort-style amenities. Perfect for young professionals and small families seeking affordable luxury with excellent connectivity.`,
            amenities: ["Lagoon Pool", "Retail Boulevard", "Gym", "Kids Play Area", "Landscaped Gardens", "Jogging Track", "Outdoor Cinema", "24/7 Security"],
            features: ["Balcony", "Built-in Wardrobes", "Modern Kitchen", "High-Speed Internet", "Energy Efficient"],
            completionStatus: "Under Construction",
            nearbyLandmarks: ["Meydan Racecourse - 5 min", "Dubai Mall - 15 min", "Dubai International Airport - 20 min"]
        },
        // Project 4: Azizi Beach Oasis
        4: {
            bedrooms: "Studio, 1-2 Bedroom Apartments",
            description: `<strong>Azizi Beach Oasis</strong> in <strong>Dubai Studio City</strong> brings beach-inspired living to the heart of Dubai. Developed by <strong>Azizi</strong>, this community offers studio to 2-bedroom apartments with modern designs and family-friendly amenities. Ideal for creative professionals and families seeking a vibrant community atmosphere.`,
            amenities: ["Wave Pool", "Beach-themed Landscape", "Gym", "Kids Pool", "Retail Outlets", "Community Park", "Basketball Court", "Covered Parking"],
            features: ["Balcony", "Open Kitchen", "Built-in Wardrobes", "Double Glazed Windows", "High Ceilings"],
            completionStatus: "Under Construction",
            nearbyLandmarks: ["Mall of the Emirates - 10 min", "Dubai Marina - 15 min", "IMG Worlds of Adventure - 20 min"]
        },
        // Project 5: Azizi Venice
        5: {
            bedrooms: "Studio, 1-3 Bedroom Apartments",
            description: `<strong>Azizi Venice</strong> in <strong>Dubai South</strong> recreates the charm of Venice with crystal lagoons and Italian-inspired architecture. This <strong>Azizi</strong> masterpiece offers studio to 3-bedroom apartments with waterfront views and resort-style living. Perfect for those seeking a unique lifestyle near Expo City and Al Maktoum Airport.`,
            amenities: ["Crystal Lagoon", "Floating Cabanas", "Opera House", "Retail Promenade", "Gym", "Kids Play Area", "Gondola Rides", "Waterfront Dining"],
            features: ["Lagoon View", "Balcony", "Modern Kitchen", "Built-in Wardrobes", "Smart Lighting"],
            completionStatus: "Off-Plan",
            nearbyLandmarks: ["Expo City Dubai - 10 min", "Al Maktoum Airport - 15 min", "Dubai Marina - 30 min"]
        }
    };

    // Return specific details or default
    return details[index] || {
        bedrooms: project.type === "Villas" ? "4-6 Bedroom" : "1-3 Bedroom",
        description: `Nestled within the lush landscapes of <strong>${project.location}</strong>, <strong>${project.title}</strong> presents an enclave of premium residences designed for discerning homeowners. This development by <strong>${project.developer}</strong> offers spacious interiors, smart features, and world-class amenities.`,
        amenities: ["Swimming Pool", "Gym", "Kids Play Area", "Parking", "24/7 Security", "Landscaped Gardens"],
        features: ["Balcony", "Built-in Wardrobes", "Modern Kitchen", "Central A/C"],
        completionStatus: "Off-Plan",
        nearbyLandmarks: ["Dubai Mall - 20 min", "Dubai Marina - 25 min", "Dubai International Airport - 30 min"]
    };
}
