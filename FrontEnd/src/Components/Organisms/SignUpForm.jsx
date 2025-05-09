import React, { useState, useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Atoms/Button";
import InputField from "../Atoms/InputField";
import Typograph from "../Atoms/Typograph";
import { TiVendorApple } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useAuthModal } from "../../Context/AuthModalContext";
import { ColorContext } from '../../Context/ColorContext';
import useAuthStore from "../../Reducers/AuthReducerStore";
import "../Styles/organisms.css";



export default function SignUpForm() {
  const { switchAuthType, closeModal, isModalOpen } = useAuthModal();
  const [isActive, setIsActive] = useState(isModalOpen);
  const colors = useContext(ColorContext);
  const { loginWithGoogle } = useAuthStore();


  const handleSwitchToSignIn = () => {
    closeModal();
    switchAuthType("signup");
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    try {
      await loginWithGoogle(token);
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={`Sign-In-Container ${isActive ? "active" : ""}`}>
      <div className="sign-up-overlay">
        <div className="sign-up-form">
          <button className="close-button" onClick={closeModal}>
            <RxCross2 />
          </button>
          <Typograph variant="lead" color={colors.Neutrals[2]} bold={true}>
            Sign up on Fleet
          </Typograph>
          <Typograph variant="p" color={colors.Neutrals[4]}>
            Use Your OpenID to Sign up
          </Typograph>

          <div className="sign-buttons">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.log("Google Login Failed");
              }}
            />
            <Button
              shape="default"
              icon={<TiVendorApple />}
              color="black"
              size="small"
            >
              Apple
            </Button>
          </div>

          <Typograph variant="small" color={colors.Neutrals[4]}>
            or sign up with email
          </Typograph>

          <form action="">
            <InputField
              type={"text"}
              placeholder={"Enter your Email"}
              hasButton={true}
              buttonContent={
                <Button
                  shape="small-circle"
                  icon={<FaArrowRight />}
                  color="blue"
                  size="small"
                />
              }
            />
          </form>

          <Typograph variant="p" color={colors.Neutrals[2]}>
            Already have an account?
            <button
              onClick={handleSwitchToSignIn}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </Typograph>
        </div>
      </div>
    </div>
  );
}
