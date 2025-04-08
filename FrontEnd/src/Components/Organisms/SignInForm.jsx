import React from "react";
import InputField from "../Atoms/InputField";
import Button from "../Atoms/Button";
import Typograph from "../Atoms/Typograph";
import colors from "../Atoms/Colors";
import { FaRegEye } from "react-icons/fa";
import '../Styles/organisms.css'
import { RxCross2 } from "react-icons/rx";

export default function SignInForm() {
  return (
    <div className="Sign-In-overlay">
      <div className="sign-in-form">
      <button className="close-button"><RxCross2 />
      </button>
        <Typograph variant="lead" color={colors.Neutrals[2]} bold={true}>
          Sign in
        </Typograph>
        <InputField
          type={"password"}
          placeholder={"Password"}
          hasButton={true}
          buttonContent={
            <Button shape="small-circle" color="trans" size="small" icon={<FaRegEye />} iconcolor={colors.Neutrals[4]}>
            </Button>
          }
        />
        <div className="btn-container">
        <Button color="blue" size="large" shape="default" >Login</Button>

        </div>
        <Typograph variant="p" color={colors.Neutrals[2]}>
          Forgot Password?
      </Typograph>
      </div>
    </div>
  );
}
