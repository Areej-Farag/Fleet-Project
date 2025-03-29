import React from "react";
import Typograph from "./Components/Atoms/Typograph";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-5">
      <Typograph variant="h1" className="fw-bold" color="#000000">
        Hero
      </Typograph>
      <Typograph variant="h1" className="fw-semibold" color="#333333">
        Headline 1
      </Typograph>
      <Typograph variant="h2" className="fw-semibold" color="#444444">
        Headline 2
      </Typograph>
      <Typograph variant="h3" className="fw-semibold" color="#555555">
        Headline 3
      </Typograph>
      <Typograph variant="h4" className="fw-semibold" color="#666666">
        Headline 4
      </Typograph>
      <Typograph variant="p" className="fs-5" color="#777777">
        Body text large for big paragraphs.
      </Typograph>
      <Typograph variant="p" className="fs-5 fw-bold" color="#888888">
        Body text large for big paragraphs.
      </Typograph>
      <Typograph variant="p" color="#999999">
        Body text normal, used for most readable content.
      </Typograph>
      <Typograph variant="p" className="fw-bold" color="#000000">
        Body text bold, could be used for links and navigation elements.
      </Typograph>
      <Typograph variant="small" color="#222222">
        Caption text, used for very small paragraphs.
      </Typograph>
      <Typograph variant="small" className="fw-bold" color="#333333">
        Caption text bold, could be used for secondary links or navigation
        elements.
      </Typograph>
      <Typograph variant="small" className="fw-bold text-muted" color="#444444">
        Caption text bold, could be used for secondary links or navigation
        elements.
      </Typograph>
      <Typograph
        variant="small"
        className="fw-bold text-secondary"
        color="#555555"
      >
        Caption text bold, could be used for secondary links or navigation
        elements.
      </Typograph>
      <Typograph
        variant="h6"
        className="fw-bold text-uppercase"
        color="#666666"
      >
        HAIRLINE LARGE
      </Typograph>
      <Typograph variant="h6" className="text-uppercase" color="#777777">
        HAIRLINE SMALL
      </Typograph>
      <Typograph variant="p" className="fw-bold" color="#000000">
        Button Default
      </Typograph>
      <Typograph variant="P" className="fw-bold" color="#444444">
        Button Small
      </Typograph>
    </div>
  );
};

export default App;
