import React from "react";
import Avatar from "../Atoms/Avatar";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import "../Styles/molecules.css";
import Line from "../Atoms/Lines";


export default function HostSection({AvatarSrc, HostName, AvatarSize , PropertyName , childern}) {
  return (
    <>
        <div className="host-section-container">
        <div className="Property-item">
            <Typograph variant={"h5"} color={colors.Neutrals[2]}>
                {PropertyName}
            </Typograph>
        </div>
      <div className="host-section">
        <Typograph variant={"small"} color={colors.Neutrals[4]}>
          {" "}
          Hosted By
        </Typograph>
        <Avatar src={AvatarSrc} alt="Avatar" size={AvatarSize}></Avatar>
        <Typograph variant={"h6"} color={colors.Neutrals[2]}>
          {" "}
          {HostName}
        </Typograph>
      </div>
      <div className="booking-details d-flex">
        {childern}
      </div>
    </div>
    <Line height="1px" />
    </>
  );

}
