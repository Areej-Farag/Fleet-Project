import React from 'react';
import PriceBox from './Components/Atoms/PriceBox'; // تعديل المسار هنا

function App() {
  return (
    <div className="App">
        <div className="price-box-container"> {/* إضافة حاوية */}
        <PriceBox />
      </div>
    </div>
  );
}

export default App;