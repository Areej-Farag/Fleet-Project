export const users = [
    {
      id: "U001",
      name: "Ahmed Mohamed",
      email: "ahmed.mohamed@gmail.com",
      profilePicture: "https://example.com/users/ahmed_profile.jpg", // رابط الصورة من Google أو مكان تخزين
      paymentMethods: [
        {
          type: "Visa",
          cardNumber: "4539-1234-5678-9012",
          expiryDate: "12/2026",
          cardHolderName: "Ahmed Mohamed",
          cvv: "123"
        }
      ],
      phoneNumber: "+201012345678",
      address: {
        street: "123 Nile St",
        city: "Cairo",
        postalCode: "11511",
        country: "Egypt"
      },
      bookingHistory: [
        {
          tripId: "T001",
          bookingDate: "April 10, 2025",
          status: "Confirmed",
          totalPrice: 1000
        }
      ],
      preferences: {
        preferredCategory: "Family",
        notifications: true
      },
      points: 50, // نقاط الولاء (مثلاً 50 نقطة من الحجز السابق)
      wishlist: [ // قايمة الرحلات المفضلة
        { id: "T002", name: "Trip to Hurghada" },
        { id: "T006", name: "Yacht Trip in Luxor" }
      ],
      createdAt: "April 09, 2025"
    },
    {
      id: "U002",
      name: "Sara Ali",
      email: "sara.ali@gmail.com",
      profilePicture: "https://example.com/users/sara_profile.jpg", 
      paymentMethods: [
        {
          type: "MasterCard",
          cardNumber: "5105-9876-5432-1098",
          expiryDate: "06/2027",
          cardHolderName: "Sara Ali",
          cvv: "456"
        }
      ],
      phoneNumber: "+201112233445",
      address: {
        street: "45 Sea Rd",
        city: "Alexandria",
        postalCode: "21500",
        country: "Egypt"
      },
      bookingHistory: [
        {
          tripId: "T007",
          bookingDate: "April 12, 2025",
          status: "Pending",
          totalPrice: 600
        }
      ],
      preferences: {
        preferredCategory: "Youth",
        notifications: false
      },
      points: 20,
      wishlist: [ 
        { id: "T005", name: "Trip to Hurghada" },
        { id: "T008", name: "Trip to Qaitbay Citadel and Library" }
      ],
      createdAt: "April 10, 2025"
    }
  ];