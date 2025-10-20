import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{
                duration: 0.8,
                ease: [0.45, 0, 0.55, 1], // curva suave tipo easeInOutQuart
              }}
            >
              <Home />
            </motion.div>
          }
          />

          <Route path="/sobre-mi" element={
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{
                duration: 0.8,
                ease: [0.45, 0, 0.55, 1], // curva suave tipo easeInOutQuart
              }}
            >
              <About />
            </motion.div>
          } />
          <Route path="/proyectos" element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Projects />
            </motion.div>
          } />

          <Route path="/certificaciones" element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Certifications />
            </motion.div>
          } />

        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
