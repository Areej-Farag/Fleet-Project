import React from "react";
import BookingDetails from "./Components/Molecules/BookingDetails";
import { TbBed } from "react-icons/tb";
import { BsCalendar4Range } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { IoCardOutline } from "react-icons/io5";

const App = () => {
  const bookingData = [
    {
      icon: <TbBed />, // تمرير الأيقونة هنا
      title: "Booking code",
      value: "UI8_150989",
    },
    {
      icon: <BsCalendar4Range />,
      title: "Date",
      value: "30 Apr, 2021",
    },
    {
      icon: <TbReportMoney />,
      title: "Total",
      value: "$833",
    },
    {
      icon: <IoCardOutline />,
      title: "Payment method",
      value: "Credit card",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {bookingData.map((item, index) => (
        <BookingDetails
          key={index}
          icon={item.icon} // تمرير الأيقونة كـ JSX هنا
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default App;
