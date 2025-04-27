// في UserConfirmation.jsx
import React, { useState } from "react";
import "../Styles/organisms.css";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import { Radio } from "antd";
import colors from "../Atoms/Colors";
import { useAuthModal } from "../../Context/AuthModalContext";
import { RxCross2 } from "react-icons/rx"; // أيقونة للإغلاق

export default function UserConfirmation() {
  const { switchAuthType, closeModal, isModalOpen } = useAuthModal();
  const [isActive, setIsActive] = useState(isModalOpen);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  return (
    <>
      <div className={`Sign-In-Container ${isActive ? "active" : ""}`}>
        <div className="user-confirmation-overlay">
          <div className="user-confirmation">
            <button className="close-button" onClick={closeModal}>
              <RxCross2 />
            </button>

            <Typograph variant="h5" color={colors.Neutrals[2]} bold={true}>
              Let’s confirm it’s really you
            </Typograph>
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Help us secure your account. Please complete the verifications
              below
            </Typograph>
            <div className="radioCheck">
              <Radio.Group
                style={style}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: 1,
                    label: (
                      <Typograph variant="small" color={colors.Neutrals[4]}>
                        Get the code by text message (SMS) at +1 234 567 890
                      </Typograph>
                    ),
                  },
                  {
                    value: 2,
                    label: (
                      <Typograph variant="small" color={colors.Neutrals[4]}>
                        Get the code by email at tranm••••••••••••@gm•••.com
                      </Typograph>
                    ),
                  },
                ]}
              />
            </div>
            <Button
              color="blue"
              size="default"
              shape="default"
              onClick={() => switchAuthType("securityCode")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
