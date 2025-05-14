import React, { useState, useContext } from "react";
import InputField from "../Atoms/InputField";
import Button from "../Atoms/Button";
import Typograph from "../Atoms/Typograph";
// import colors from "../Atoms/Colors";
import { FaRegEye } from "react-icons/fa";
import "../Styles/organisms.css";
import { RxCross2 } from "react-icons/rx";
import { useAuthModal } from "../../Context/AuthModalContext";
import { ColorContext } from "../../Context/ColorContext";
import useUserStore from "../../Reducers/UserReducerStore";

export default function SignInForm() {
  const { switchAuthType, closeModal, isModalOpen } = useAuthModal();
  const [isActive, setIsActive] = useState(isModalOpen);
  const { login} = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSwitchToSignIn = () => {
    closeModal();
    switchAuthType("signup");
  };
  const colors = useContext(ColorContext);
  return (
    <div className={`Sign-In-Container ${isActive ? "active" : ""}`}>
      <div className="Sign-In-overlay">
        <div className="sign-in-form">
          <button className="close-button" onClick={closeModal}>
            <RxCross2 />
          </button>
          <Typograph variant="lead" color={colors.Neutrals[2]} bold={true}>
            Sign in
          </Typograph>
          <InputField
            ChangeHandler={(e) => setEmail(e.target.value)}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
          />
          <InputField
            ChangeHandler={(e) => setPassword(e.target.value)}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            hasButton={true}
            buttonContent={
              <Button
                shape="small-circle"
                color="trans"
                size="small"
                icon={<FaRegEye />}
                iconcolor={colors.Neutrals[4]}
              ></Button>
            }
          />
          <div className="btn-container py-3">
            <Button color="blue" size="large" shape="default" onClick={() =>{ login(email, password);
              if(localStorage.getItem('token')){closeModal();}
            }}>
              Login
            </Button>
          </div>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            Forgot Password?
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[2]}>
            don't have an account?{" "}
            <button
              onClick={handleSwitchToSignIn}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </Typograph>
        </div>
      </div>
    </div>
  );
}
