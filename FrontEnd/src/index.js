import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Button from "./Components/Atoms/Button";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Typography from "./Components/Atoms/Typograph";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
      <App />
      <DemoApp />
    </>
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function DemoApp() {
  return (
    <div>
      <h1>Welcome to My App!</h1>

        {/* ✅ بوتن صغير */}
      <Button color="white" size="small" icon={<MdOutlinePhotoSizeSelectActual />} iconcolor="black" iconSize={16} onClick={() => alert("")}>
      <Typography color="var(--color-neutral-2)" variant="button">
            Show all photos
          </Typography>
      </Button>

      {/* ✅ بوتن عادي */}
      <Button color="trans-no-border" size="small" onClick={() => alert("")}>
          <Typography color="var(--color-neutral-4)" variant="button">
            Language
          </Typography>
      </Button>
     
      {/* ✅ بوتن كبير */}
      <Button color="blue" size="large" onClick={() => alert("")}>
          <Typography color="var(--color-neutral-8)" variant="button">
            Sign In
          </Typography>
      </Button>

      {/* ✅ بوتن صغير */}
      <Button color="black" size="small" icon={<FaApple />} iconcolor="white" iconSize={13} >
          <Typography color="var(--color-neutral-7)" variant="button">
             Apple
          </Typography>
      </Button>

      <Button color="blue" size="default" >
          <Typography color="var(--color-neutral-7)" variant="button">
             Continue
          </Typography>
      </Button>

 
      <Button color="blue" size="default" shape="large-circle" icon={<IoSearch />} iconcolor="white" iconSize={24} />
          
      

      <Button color="blue" size="large">
          <Typography color="var(--color-neutral-7)" variant="button">
             Continue
          </Typography>
      </Button>

      
      
      <Button color="trans" size="small" icon={<FiLoader />} iconcolor="black" iconSize={16}>
          <Typography color="var(--color-neutral-2)" variant="button">
             Show more
          </Typography>
      </Button>

     
      <Button color="blue" size="default" icon={<IoSearch />} iconSize={16}iconcolor="white" iconPosition="right" >
          <Typography color="var(--color-neutral-7)" variant="button">
            Reserve
          </Typography>
      </Button>

     
      <Button color="trans" size="small"  icon={<IoIosArrowBack />} iconcolor="black" iconSize={16} >
          <Typography color="var(--color-neutral-2)" variant="button">
          Go home
          </Typography>
      </Button>
      <Button color="blue" size="default"   shape="small-circle" icon={<FaArrowRight />} iconSize={14} >
      
      </Button>
    </div>
  );
}

export default DemoApp;

