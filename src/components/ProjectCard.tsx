import { motion } from "framer-motion";
import type { Project } from "../data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-[#151521]/60 border border-violet-600/30 rounded-xl p-6 shadow-lg backdrop-blur-lg flex flex-col justify-between hover:shadow-violet-600/40 transition"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={project.imgSrc}
        alt={project.title}
        className="rounded-lg mb-4 border border-violet-500/20"
      />

      <h3 className="text-xl font-semibold text-violet-400 mb-2">
        {project.title}
      </h3>

      <p
        className="text-sm text-neutral-300 mb-4"
        dangerouslySetInnerHTML={{ __html: project.subtitle }}
      />

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 bg-violet-600/20 px-3 py-1 rounded-full text-xs text-violet-300 border border-violet-600/30"
          >
            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
            {tech.name}
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="flex justify-between items-center mt-auto">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 flex items-center gap-2"
        >
          <i className="ri-github-fill text-lg"></i> GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
        >
          <i className="ri-external-link-line text-lg"></i> Live
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
