import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/header";
import Categories from "./Components/Categories";
import Experience from "./Components/Experience";
import Destination from "./Components/Destination";
import Top_destinations from "./Components/Top_destinations";
import AboutUs from "./Components/AboutUs";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden" style={{ backgroundColor: "#FAF8ED" }}>
        <div className="d-flex min_vh100 flex-column">
          <Navbar />
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Header />
          </div>
        </div>

        <Categories />
        <Experience />
        <Destination />
        <Top_destinations />
        <AboutUs />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
