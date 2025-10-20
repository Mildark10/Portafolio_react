import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard"; // Ensure the file exists at src/components/ProjectCard.tsx or adjust the path

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-[#0E0E1A] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* 🔷 Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-violet-700/20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-violet-400 font-semibold uppercase tracking-wider">
          My Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          ¡View my work!
        </h2>
      </motion.div>

      {/* 🧩 Grid de proyectos */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;
