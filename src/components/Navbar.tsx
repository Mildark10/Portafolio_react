import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cierra menú si cambia a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/sobre-mi" },
    { label: "Proyects", path: "/proyectos" },
    { label: "Certifications", path: "/certificaciones" }, 
  ];

  return (
    <>
      {/* 🔝 Navbar visible siempre */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-40 font-[Monoton]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-3xl tracking-widest hover:text-zinc-300 transition"
          >
            AP
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="text-3xl md:hidden focus:outline-none z-[60]"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-10 text-lg font-semibold">
            {links.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`transition ${
                    location.pathname === path
                      ? "text-zinc-300 underline underline-offset-8"
                      : "hover:text-zinc-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 🌌 Overlay móvil — fuera del <nav>, pantalla completa */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-10 text-4xl font-[Monoton] z-[999]"
          >
            {links.map(({ label, path }) => (
              <motion.button
                key={path}
                onClick={closeMenu}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className={`px-10 py-3 rounded-xl cursor-pointer ${
                  location.pathname === path ? "bg-white/10" : ""
                }`}
              >
                <Link to={path}>{label}</Link>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
