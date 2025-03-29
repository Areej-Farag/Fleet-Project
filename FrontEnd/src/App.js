import React from "react";
import Typograph from "./Components/Atoms/Typograph";


const App = () => {
  return (
    <div className="container mt-5">
      <Typograph variant="h1" color="black" bold>
        عنوان رئيسي H1 باللون الأسود
      </Typograph>
      <Typograph variant="h2" color="dark">
        عنوان فرعي H2 بالرمادي الغامق
      </Typograph>
      <Typograph variant="h3" color="medium" bold>
        عنوان صغير H3 بالرمادي المتوسط
      </Typograph>
      <Typograph variant="p" color="light">
        فقرة نصية عادية بالرمادي الفاتح
      </Typograph>
      <Typograph variant="blockquote" color="dark" bold>
        اقتباس بلون رمادي غامق
      </Typograph>
    </div>
  );
};

export default App;
