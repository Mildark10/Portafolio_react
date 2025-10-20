import React from "react";
import type { Certification } from "../data/certifications";
import { motion } from "framer-motion";

interface Props {
  item: Certification;
}

const CertificationCard: React.FC<Props> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-violet-500/20 shadow-md hover:shadow-violet-500/30 transition-all duration-500 overflow-hidden"
    >
      {/* Imagen */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-44 object-contain md:h-48 opacity-95 group-hover:opacity-100 transition-all duration-500 mix-blend-lighten"
      />

      {/* Fondo degradado suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

      {/* Contenido */}
      <div className="absolute bottom-0 w-full text-center py-3 bg-gradient-to-t from-neutral-950/70 via-neutral-900/30 to-transparent">
        <p className="text-white font-medium text-sm md:text-base tracking-wide drop-shadow-md group-hover:text-violet-300 transition-colors duration-300">
          {item.title}
        </p>
      </div>

      {/* Glow exterior sutil */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg bg-gradient-to-r from-violet-600/20 via-fuchsia-500/10 to-transparent"></div>
    </motion.div>
  );
};

export default CertificationCard;
