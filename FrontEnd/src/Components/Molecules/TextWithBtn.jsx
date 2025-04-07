import React from 'react'
import "../Styles/molecules.css";
import PropTypes from "prop-types";

export default function TextWithBtn( {textContent , btnContent, direction = "row"}) {
  return (
    <div className="text-with-btn-container" style={{flexDirection: { direction }}}>
      <div className="textConent">
            {textContent}
        </div>
        <div className="buttonContent d-flex">
            {btnContent}
        </div>
        
    </div>
  )
}

TextWithBtn.propTypes = {
  textContent: PropTypes.node.isRequired,
  btnContent: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["row" , "column" , "row-reverse" , "column-reverse"]).isRequired
};
