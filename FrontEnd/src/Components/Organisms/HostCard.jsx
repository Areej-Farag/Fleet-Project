import React from "react";
import Avatar from "../Atoms/Avatar";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import colors from "../Atoms/Colors";
import "../Styles/organisms.css";
import Line from "../Atoms/Lines";
import Icon from "../Atoms/Icons";
import { companies } from "../../Mocks/Companies";
import { AiOutlineHome } from "react-icons/ai";
import { CiStar, CiTwitter, CiFacebook, CiFlag1 } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Rate from "../Atoms/Rate";
import { RiGlobalLine } from "react-icons/ri";

export default function HostCard({
  AvatarSrc,
  HostName = companies[0].name,
  hostDescription = companies[0].description,
  AvatarSize,
  JoinDate = companies[0].joinedAt,
  socialLinks = companies[0].socialLinks,
  childern,
}) {
  const handleBtnClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="hostcard-container">
        <div className="hostcard-header d-flex">
          <div className="host-avatar">
            <Avatar
              src={require("../../assets/Images/avatar.png")}
              alt="Avatar"
              size="medium"
            />
          </div>
          <div className="host-info">
            <Typograph variant={"h5"} color={colors.Neutrals[2]}>
              {HostName}
            </Typograph>
            <div className="d-flex rate-container">
              <Rate rating={"4.8"} />
              <div className="d-flex review-count">
                <Typograph variant={"small"} color={colors.Neutrals[4]}>
                  (12 reviews)
                </Typograph>
              </div>
            </div>
          </div>
        </div>

        <div className="hostcard-body">
          <div className="host-review d-flex">
            <Icon
              IconContetnt={<AiOutlineHome />}
              size={24}
              color={colors.Neutrals[4]}
            >
              <Typograph variant={"small"} color={colors.Neutrals[4]}>
                Superhost
              </Typograph>
            </Icon>
            <Icon
              IconContetnt={<CiStar />}
              size={24}
              color={colors.Neutrals[1]}
            >
              <Typograph variant={"small"} color={colors.Neutrals[4]}>
                256 reviews
              </Typograph>
            </Icon>
          </div>

          <div className="hostcard-description">
            <Typograph variant={"small"} color={colors.Neutrals[4]}>
              {hostDescription}
            </Typograph>
          </div>

          <div className="hostcard-contactinfo">
            <div className="website-section">
              <Icon IconContetnt={<RiGlobalLine />} color={colors.Neutrals[4]}>
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLinks.website}
                </a>
              </Icon>
            </div>

            <div className="contactbtns d-flex align-items-center gap-2">
              <Button color="black" size="small" shape="default">
                contact
              </Button>
              <Button
                color="trans"
                size="small"
                shape="small-circle"
                icon={<FiUpload />}
                iconSize={18}
                iconcolor={colors.Neutrals[4]}
              />
              <Button
                color="trans"
                size="small"
                shape="small-circle"
                icon={<BsThreeDots />}
                iconSize={16}
                iconcolor={colors.Neutrals[4]}
              />
            </div>

            <div className="socialmedia-links d-flex align-items-center gap-2">
              <Button
                color="trans"
                size="small"
                shape="small-circle"
                icon={<CiTwitter />}
                iconcolor={colors.Neutrals[4]}
                onClick={() => handleBtnClick(socialLinks.twitter)}
              />
              <Button
                color="trans"
                size="small"
                shape="small-circle"
                icon={<CiFacebook />}
                iconcolor={colors.Neutrals[4]}
                onClick={() => handleBtnClick(socialLinks.facebook)}
              />
              <Button
                color="trans"
                size="small"
                shape="small-circle"
                icon={<IoLogoInstagram />}
                iconcolor={colors.Neutrals[4]}
                onClick={() => handleBtnClick(socialLinks.instagram)}
              />
            </div>
          </div>
        </div>

        <Line />

        <div className="hostcard-footer">
          <Typograph variant={"h6"} color={colors.Neutrals[2]}>
            {JoinDate || "joined on 11/12/2022"}
          </Typograph>
          <Icon size={24} color={colors.Neutrals[4]} IconContetnt={<CiFlag1 />}>
            <Typograph variant={"small"} color={colors.Neutrals[4]}>
              report this host
            </Typograph>
          </Icon>
        </div>
      </div>
    </>
  );
}
