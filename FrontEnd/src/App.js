
import Navbar from "./Components/Molecules/Navbar";
import Footer from "./Components/Molecules/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import BookingConfirmationTemplate from "./Components/Templates/BookingConfirmationTemplate";
import PaymentTemplate from "./Components/Templates/PaymentTemplate";

function App() {
  return (
    <div className="app-container">
    
      <Navbar />
      <main className="content container py-4">
        {/* مكونات رئيسية للصفحة */}
        <div className="App container mt-5">
          <BookingConfirmationTemplate />
        </div>
        <PaymentTemplate />
          
      </main>
      <Footer />
    </div>

  );
}

export default App;

