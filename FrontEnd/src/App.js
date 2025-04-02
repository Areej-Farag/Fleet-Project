import React from "react";
import PriceBox from "./Components/Atoms/PriceBox"; // تعديل المسار هنا

function App() {
  return (
    <div className="App">
      <div className="price-box-container">
        {" "}
        {/* إضافة حاوية */}
        <PriceBox />
      </div>
    </div>
  );
}

import React from "react";
import Icon from "./Components/Atoms/Icons";
import Colors from "./Components/Atoms/Colors";
import Typography from "./Components/Atoms/Typograph";
import { CiAlarmOn } from "react-icons/ci";

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: Colors.Neutrals[7],
          width: "200px",
          height: "100px",
        }}
      >
        <Icon color={Colors.Neutrals[5]} IconContetnt={<CiAlarmOn />}>
          <Typography variant="p" color={Colors.Neutrals[3]}>
            hello
          </Typography>
          <Typography variant="small" color={Colors.Neutrals[2]}>
            icon text
          </Typography>
        </Icon>
      </div>
    </>
  );
};
export default App;
