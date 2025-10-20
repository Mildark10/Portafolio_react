import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import homeImg from "../assets/home.png";
import cvFile from "../assets/cv/Avalos.P.Milton_CV - Minsait.pdf";
const Home = () => {
  // 📸 Referencia a la imagen para animarla con GSAP
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // ⚡ GSAP: animación flotante infinita
    gsap.to(imageRef.current, {
      y: -20, // mueve hacia arriba
      rotation: 3, // pequeño giro
      duration: 3, // velocidad
      yoyo: true, // vuelve al estado inicial
      repeat: -1, // infinito
      ease: "easeInOut", // movimiento suave
    });

    // 👀 También puedes añadir una animación de brillo o escala:
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#0E0E1A] text-white px-6 md:px-20">
      {/* 🔷 --- CAPA DE FONDO DECORATIVA --- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-violet-700/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

        {/* textura sutil */}
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        {/* 🔶 Figuras geométricas animadas */}
        <motion.div
          className="absolute top-10 left-1/4 w-8 h-8 bg-violet-500/40 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-10 h-10 bg-blue-500/30 rotate-45"
          animate={{ y: [0, 15, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-6 h-6 border border-violet-400/40"
          animate={{ y: [0, -25, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🔹 --- TEXTO PRINCIPAL --- */}
      <motion.div
        className="relative z-10 flex-1 max-w-xl text-center md:text-left mt-16 md:mt-0"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-violet-400 font-semibold mb-2">Hi, I’m</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Milton Avalos
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 tracking-wide">
          I create beautiful digital experiences for the web
        </h2>
        <p className="text-neutral-400 mb-8 text-sm sm:text-base">
          I’m a SAP ABAP Technical Consultant exploring the world of Full Stack Development.
I love building solutions that connect enterprise systems with modern web technologies like React and TypeScript.
        </p>

       <a href={cvFile} download="Milton_Avalos_CV.pdf" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-full font-medium transition"
      >
        Download Portafolio
      </motion.button>
    </a>

        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <motion.a
            href="https://github.com/Mildark10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-white hover:text-violet-400"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/milton-manuel-avalos-pucyura-9672261b2/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-white hover:text-blue-400"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* 🔹 --- IMAGEN CON ANIMACIÓN GSAP --- */}
      <motion.div
        className="relative flex-1 flex justify-center mt-12 md:mt-0"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          ref={imageRef}
          src={homeImg}
          alt="Milton Avalos"
          className="w-48 sm:w-56 md:w-72 rounded-lg shadow-2xl rotate-2 relative z-10"
        />
      </motion.div>
    </section>
  );
};

export default Home;
