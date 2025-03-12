import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./homepage/Hero";
import Merchants from "./homepage/Merchants";
import Services from "./homepage/services";
import WhyChooseUs from "./homepage/whyus";
import Page1 from "./page1/page1header";
import Page2Header from "./page2/page2Header";
import Page3Header from "./page3/page3header";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <div className="bg-[#1C211B] text-white">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Merchants />
                <WhyChooseUs />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/scrap-selling" element={<Page1 />} />
          <Route path="/business" element={<Page2Header />} />
          <Route path="/eco-life" element={<Page3Header />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
