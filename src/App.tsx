import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"; // Changed to BrowserRouter
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
// import CustomCursor from "./components/CustomCursor";
// import SplashScreen from "./components/SplashScreen";
import FAQ from "./pages/FAQ";
import Calculator from "./pages/Calculator";

const AppContent = () => {
  // const [showSplash, setShowSplash] = useState(true);
  // const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  return (
    <div className="">
      {/* <CustomCursor />
      <AnimatePresence mode="wait">
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
        <motion.div
          key={location.pathname} // Important for page transitions
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        > */}
          <Navbar />
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/estimate" element={<FAQ />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<Main />} />
          </Routes>
        {/* </motion.div> */}
      {/* )} */}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
