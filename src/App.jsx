import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer";
import Header from "./components/header";
import WhatsAppButton from "./components/WhatsAppButton";
import AppLaunch from "./homepage/applaunch";
import HeroSection from "./homepage/hero";
import Merchants from "./homepage/merchants";
import Services from "./homepage/services";
import WhyChooseUs from "./homepage/whyus";
import Page1 from "./page1/page1header";
import Page2Header from "./page2/page2Header";
import Page3Header from "./page3/page3header";
import PreRegistration from "./PreRegistration/PreRegistration";
import CareerPage from "./careers/CareerPage";
import ApplyPage from "./careers/ApplyPage";

const AppContent = () => {
  const location = useLocation();
  const isPreRegistration = location.pathname === '/pre-registration';

  return (
    <div className={isPreRegistration ? "" : "bg-[#1C211B] text-white"}>
      <Header />
      <WhatsAppButton />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection/>
              <Services />
              <Merchants />
              <WhyChooseUs />
              <AppLaunch />
            </>
          }
        />

        {/* Individual Pages */}
        <Route path="/scrap-selling" element={<Page1 />} />
        <Route path="/business" element={<Page2Header />} />
        <Route path="/eco-life" element={<Page3Header />} />
        <Route path="/pre-registration" element={<PreRegistration />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Career Routes */}
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/careers/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;