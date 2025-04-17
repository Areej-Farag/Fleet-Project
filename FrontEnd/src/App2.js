import React from "react";
import ImageGridTemplate from "./Components/Templates/ImageGridTemplate";
import img1 from "./assets/Images/img1.PNG";
import img2 from "./assets/Images/img2.PNG";
import img3 from "./assets/Images/img3.PNG";
import primary from "./assets/Images/primary img.png";

const App2 = () => {
  const mainImage = [primary];
  const smallImages = [img1, img2, img3];

  return (
    <div className="App">
      <ImageGridTemplate mainImage={mainImage} smallImages={smallImages} />
    </div>
  );
};

export default App2;
