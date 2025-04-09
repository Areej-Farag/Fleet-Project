export const bookings = [
    {
      bookingId: "B001", // معرف الحجز الفريد
      userId: "U001", // معرف المستخدم من users.js
      tripId: "T006", // معرف الرحلة من trips.js
      numberOfPeople: 3, // عدد الأفراد
      selectedDate: "April 15, 2025 - 3:00 PM", // الميعاد المختار
      totalPrice: 2400, // السعر الإجمالي بعد الخصم
      status: "Confirmed", // حالة الحجز
      bookingDate: "April 09, 2025", // تاريخ عمل الحجز
      paymentMethod: {
        type: "Visa",
        cardNumber: "4539-1234-5678-9012" // طريقة الدفع المستخدمة
      }
    }
  ];