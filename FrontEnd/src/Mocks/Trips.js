export const trips =
  [
    // Cairo Trips (T001 - T010)
    {
      id: "T001",
      name: "Trip to Giza Pyramids and Sphinx",
      governate: "Cairo",
      company: "Nile Travel",
      description:
        "Explore the iconic Giza Pyramids and the Great Sphinx with a guided tour.",
      image: "https://wallpaperaccess.com/full/676889.jpg",
      detailesImages: [
        "https://images.pexels.com/photos/2359/sand-desert-statue-pyramid.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3873681/pexels-photo-3873681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2445852/pexels-photo-2445852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
      program: [
        "8:00 AM: Departure from Cairo",
        "9:00 AM: Visit Giza Pyramids",
        "11:00 AM: Explore the Sphinx",
        "1:00 PM: Lunch",
        "3:00 PM: Return",
      ],
      features: ["Air-conditioned transport", "Tour guide", "Free lunch"],
      duration: "7 hours",
      availableDates: [
        { date: "April 15, 2025 - 8:00 AM", availableSeats: 20 },
        { date: "April 20, 2025 - 8:00 AM", availableSeats: 15 },
      ],
      price: 500,
      discount: 450,
      rating: 4.8,
      reviews: [
        {
          userId: "U001",
          comment: "Amazing experience, highly recommended!",
          rating: 5,
          date: "April 10, 2025",
        },
        {
          userId: "U002",
          comment: "Great tour, very informative!",
          rating: 4.6,
          date: "April 11, 2025",
        },
      ],
      category: "Historical",
    }
  ];
