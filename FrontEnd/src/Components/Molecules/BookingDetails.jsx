import React from "react";
import Typograph from "../Atoms/Typograph"; // تأكد من وجود Typograph في المسار الصحيح
import colors from "../Atoms/Colors"; // تأكد من وجود Colors في المسار الصحيح

const BookingDetails = ({ icon, title, value }) => {
  const iconColor = colors.Neutrals[4]; // هنا بنحدد اللون الذي نريد استخدامه للأيقونة، نفس لون العنوان

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* الأيقونة على اليسار مع نفس اللون المستخدم في العنوان */}
        <div style={{ fontSize: 24, color: iconColor }}>{icon}</div>
        <div style={{ marginLeft: "20px" }}>
          {/* عرض العنوان */}
          <Typograph variant="small" color={iconColor}>
            {title}
          </Typograph>
        </div>
      </div>
      {/* القيمة على اليمين */}
      <div>
        <Typograph variant="h6" color={colors.Neutrals[2]}>
          {value}
        </Typograph>
      </div>
    </div>
  );
};

export default BookingDetails;
