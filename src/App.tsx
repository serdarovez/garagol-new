import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";
import SplashScreen from "./components/SplashScreen";
import FAQ from "./pages/FAQ";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  return (
    <HashRouter>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/estimate" element={<FAQ />} />
            </Routes>
          </motion.div>
        )}
      </div>
    </HashRouter>
  );
};

export default App;
