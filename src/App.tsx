import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";
import SplashScreen from "./components/SplashScreen";
import FAQ from "./pages/FAQ";
import Calculator from "./pages/Calculator";

// Create a wrapped component that uses router hooks
const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  return (
    <div className="relative cursor-none">
      <CustomCursor />
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            onComplete={() => {
              setShowSplash(false);
              setShowContent(true);
            }}
          />
        )}
      </AnimatePresence>

      {showContent && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/estimate" element={<FAQ />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </>
      )}
    </div>
  );
};

// Main App component that provides the router context
const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
