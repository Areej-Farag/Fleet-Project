export const trips = [
    {
      id: "T001",
      name: "Trip to Luxor from Cairo",
      governate: "Luxor",
      company: "Nile Travel",
      description: "Enjoy visiting the Karnak and Luxor temples with a unique Nile experience.",
      image: "luxor_trip1.jpg",
      program: [
        "8:00 AM: Departure from Cairo",
        "2:00 PM: Visit Karnak Temple",
        "5:00 PM: Nile cruise",
        "8:00 PM: Return"
      ],
      features: [
        "Comfortable air-conditioned bus transport",
        "Tour guide",
        "Free lunch"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 15, 2025 - 8:00 AM", availableSeats: 20 },
        { date: "April 20, 2025 - 8:00 AM", availableSeats: 15 }
      ],
      price: 1200,
      discount: 1000,
      rating: 4,
      reviews: ["Excellent service, the guide was outstanding"],
      category: "Family"
    },
    {
      id: "T002",
      name: "Trip to Hurghada",
      governate: "Hurghada",
      company: "Sea Tours",
      description: "Relax on Hurghada’s beaches with an exciting boat trip.",
      image: "hurghada_trip1.jpg",
      program: [
        "Day 1: Arrival and check-in at the hotel",
        "Day 2: Boat trip and snorkeling",
        "Day 3: Return"
      ],
      features: [
        "Stay in a 4-star hotel",
        "Free breakfast and dinner",
        "Tour guide"
      ],
      duration: "3 days / 2 nights",
      availableDates: [
        { date: "April 10-12, 2025", availableSeats: 10 },
        { date: "April 17-19, 2025", availableSeats: 12 }
      ],
      price: 3500,
      discount: null,
      rating: 5,
      reviews: ["Amazing experience, the hotel was great"],
      category: "Youth"
    },
    {
      id: "T003",
      name: "Trip to Aswan",
      governate: "Aswan",
      company: "Egypt Tourism",
      description: "Discover the beauty of Aswan and visit the Philae Temple.",
      image: "aswan_trip1.jpg",
      program: [
        "7:00 AM: Departure",
        "1:00 PM: Visit the High Dam",
        "4:00 PM: Tour of Philae Temple",
        "9:00 PM: Return"
      ],
      features: [
        "Comfortable transport",
        "Free lunch"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 18, 2025 - 7:00 AM", availableSeats: 25 }
      ],
      price: 1000,
      discount: 900,
      rating: 3,
      reviews: ["The transport was a bit crowded"],
      category: "Budget"
    },
    {
      id: "T004",
      name: "Trip to Luxor from Cairo",
      governate: "Luxor",
      company: "Pyramid Tours",
      description: "A budget-friendly trip to explore Luxor’s ancient temples.",
      image: "luxor_trip2.jpg",
      program: [
        "7:30 AM: Departure from Cairo",
        "1:30 PM: Visit Karnak Temple",
        "4:30 PM: Visit Luxor Temple",
        "9:00 PM: Return"
      ],
      features: [
        "Standard bus transport",
        "Free water"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 16, 2025 - 7:30 AM", availableSeats: 30 }
      ],
      price: 850,
      discount: null,
      rating: 3,
      reviews: ["Good for the price, but no guide"],
      category: "Budget"
    },
    {
      id: "T005",
      name: "Trip to Hurghada",
      governate: "Hurghada",
      company: "Red Sea Explorers",
      description: "An adventure-packed trip to Hurghada with water activities.",
      image: "hurghada_trip2.jpg",
      program: [
        "Day 1: Arrival and hotel check-in",
        "Day 2: Snorkeling and boat trip",
        "Day 3: Return"
      ],
      features: [
        "Stay in a 3-star hotel",
        "Free breakfast",
        "Snorkeling equipment"
      ],
      duration: "3 days / 2 nights",
      availableDates: [
        { date: "April 12-14, 2025", availableSeats: 20 }
      ],
      price: 2800,
      discount: 2500,
      rating: 4,
      reviews: ["Great for snorkeling lovers"],
      category: "Youth"
    },
    {
      id: "T006",
      name: "Yacht Trip in Luxor",
      governate: "Luxor",
      company: "Nile Yachts",
      description: "A luxurious yacht trip along the Nile in Luxor.",
      image: "luxor_yacht1.jpg",
      program: [
        "3:00 PM: Boarding the yacht",
        "4:00 PM: Cruise with views of Luxor landmarks",
        "7:00 PM: Return to dock"
      ],
      features: [
        "Luxury yacht",
        "Free snacks and drinks",
        "Tour guide"
      ],
      duration: "4 hours",
      availableDates: [
        { date: "April 15, 2025 - 3:00 PM", availableSeats: 10 }
      ],
      price: 900,
      discount: 800,
      rating: 5,
      reviews: ["Stunning views, very relaxing"],
      category: "Family"
    },
    {
      id: "T007",
      name: "Trip to Alexandria Beaches",
      governate: "Alexandria",
      company: "Coastal Waves",
      description: "A day trip to enjoy Alexandria’s famous beaches.",
      image: "alexandria_beach1.jpg",
      program: [
        "8:00 AM: Departure from Cairo",
        "11:00 AM: Beach time at Montazah",
        "4:00 PM: Return"
      ],
      features: [
        "Comfortable bus transport",
        "Beach umbrella rental"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 16, 2025 - 8:00 AM", availableSeats: 25 }
      ],
      price: 600,
      discount: null,
      rating: 4,
      reviews: ["Perfect for a quick beach day"],
      category: "Youth"
    },
    {
      id: "T008",
      name: "Trip to Qaitbay Citadel and Library",
      governate: "Alexandria",
      company: "Alexandria Explorers",
      description: "Visit Alexandria’s iconic Qaitbay Citadel and Bibliotheca Alexandrina.",
      image: "alexandria_citadel1.jpg",
      program: [
        "7:00 AM: Departure from Cairo",
        "11:00 AM: Visit Qaitbay Citadel",
        "2:00 PM: Tour the Library",
        "6:00 PM: Return"
      ],
      features: [
        "Air-conditioned transport",
        "Tour guide",
        "Free water"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 17, 2025 - 7:00 AM", availableSeats: 20 }
      ],
      price: 950,
      discount: 850,
      rating: 4,
      reviews: ["Informative and fun"],
      category: "Family"
    },
    {
      id: "T009",
      name: "Yacht Trip in Aswan",
      governate: "Aswan",
      company: "Nile Serenity",
      description: "A relaxing yacht cruise on the Nile with views of Aswan’s beauty.",
      image: "aswan_yacht1.jpg",
      program: [
        "2:00 PM: Boarding the yacht",
        "3:00 PM: Cruise past Philae Temple",
        "5:00 PM: Return"
      ],
      features: [
        "Luxury yacht",
        "Free drinks"
      ],
      duration: "3 hours",
      availableDates: [
        { date: "April 18, 2025 - 2:00 PM", availableSeats: 15 }
      ],
      price: 700,
      discount: null,
      rating: 4,
      reviews: ["Peaceful and scenic"],
      category: "Family"
    },
    {
      id: "T010",
      name: "Trip to Marsa Matruh",
      governate: "Marsa Matruh",
      company: "Blue Lagoon Tours",
      description: "A beach getaway to Marsa Matruh’s crystal-clear waters.",
      image: "matruh_beach1.jpg",
      program: [
        "Day 1: Departure from Cairo and hotel check-in",
        "Day 2: Beach day",
        "Day 3: Return"
      ],
      features: [
        "Stay in a 3-star hotel",
        "Free breakfast"
      ],
      duration: "3 days / 2 nights",
      availableDates: [
        { date: "April 20-22, 2025", availableSeats: 20 }
      ],
      price: 2500,
      discount: 2300,
      rating: 4,
      reviews: ["Beautiful beaches, good value"],
      category: "Youth"
    },
    {
      id: "T011",
      name: "Trip to Marsa Matruh",
      governate: "Marsa Matruh",
      company: "Paradise Travel",
      description: "A premium beach escape to Marsa Matruh.",
      image: "matruh_beach2.jpg",
      program: [
        "Day 1: Arrival and hotel check-in",
        "Day 2: Beach relaxation",
        "Day 3: Return"
      ],
      features: [
        "Stay in a 5-star hotel",
        "Free breakfast and dinner"
      ],
      duration: "3 days / 2 nights",
      availableDates: [
        { date: "April 23-25, 2025", availableSeats: 10 }
      ],
      price: 3800,
      discount: null,
      rating: 5,
      reviews: ["Luxury at its best"],
      category: "Family"
    },
    {
      id: "T012",
      name: "Trip to Ain Sokhna",
      governate: "Ain Sokhna",
      company: "Red Sea Retreats",
      description: "A quick beach escape to Ain Sokhna.",
      image: "sokhna_beach1.jpg",
      program: [
        "8:00 AM: Departure from Cairo",
        "10:00 AM: Beach time",
        "4:00 PM: Return"
      ],
      features: [
        "Comfortable transport",
        "Beach access"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 19, 2025 - 8:00 AM", availableSeats: 30 }
      ],
      price: 500,
      discount: 450,
      rating: 3,
      reviews: ["Simple and affordable"],
      category: "Budget"
    },
    {
      id: "T013",
      name: "Trip to Ain Sokhna",
      governate: "Ain Sokhna",
      company: "Sokhna Escapes",
      description: "A relaxing day trip to Ain Sokhna with premium services.",
      image: "sokhna_beach2.jpg",
      program: [
        "7:30 AM: Departure from Cairo",
        "9:30 AM: Beach time",
        "3:30 PM: Return"
      ],
      features: [
        "Air-conditioned transport",
        "Free lunch",
        "Beach umbrella"
      ],
      duration: "1 day",
      availableDates: [
        { date: "April 20, 2025 - 7:30 AM", availableSeats: 20 }
      ],
      price: 800,
      discount: null,
      rating: 4,
      reviews: ["Comfortable and enjoyable"],
      category: "Family"
    },
    {
      id: "T014",
      name: "Cairo Museums Tour",
      governate: "Cairo",
      company: "Heritage Tours",
      description: "Explore Cairo’s rich history with a museum tour.",
      image: "cairo_museum1.jpg",
      program: [
        "9:00 AM: Visit Egyptian Museum",
        "12:00 PM: Lunch break",
        "2:00 PM: Visit Coptic Museum",
        "4:00 PM: End of tour"
      ],
      features: [
        "Air-conditioned transport",
        "Tour guide"
      ],
      duration: "7 hours",
      availableDates: [
        { date: "April 15, 2025 - 9:00 AM", availableSeats: 25 }
      ],
      price: 400,
      discount: 350,
      rating: 4,
      reviews: ["Very educational"],
      category: "Family"
    },
    {
      id: "T015",
      name: "Cairo Citadel and Moez Street",
      governate: "Cairo",
      company: "Old Cairo Adventures",
      description: "A walking tour of Cairo’s historic landmarks.",
      image: "cairo_citadel1.jpg",
      program: [
        "10:00 AM: Visit Salah El-Din Citadel",
        "1:00 PM: Walk through Moez Street",
        "3:00 PM: End of tour"
      ],
      features: [
        "Tour guide",
        "Free water"
      ],
      duration: "5 hours",
      availableDates: [
        { date: "April 16, 2025 - 10:00 AM", availableSeats: 30 }
      ],
      price: 300,
      discount: null,
      rating: 3,
      reviews: ["Good tour, but crowded"],
      category: "Budget"
    },
    {
      id: "T016",
      name: "Yacht Trip in Cairo",
      governate: "Cairo",
      company: "Nile Breeze",
      description: "A short yacht cruise on the Nile in Cairo.",
      image: "cairo_yacht1.jpg",
      program: [
        "6:00 PM: Boarding the yacht",
        "7:00 PM: Cruise with city views",
        "8:00 PM: Return"
      ],
      features: [
        "Yacht ride",
        "Free soft drinks"
      ],
      duration: "2 hours",
      availableDates: [
        { date: "April 17, 2025 - 6:00 PM", availableSeats: 15 }
      ],
      price: 500,
      discount: 450,
      rating: 4,
      reviews: ["Short but beautiful"],
      category: "Family"
    }
  ];