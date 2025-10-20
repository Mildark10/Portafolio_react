import { motion } from "framer-motion";
import type { Skill } from "../data/skills";

interface Props {
  skill: Skill;
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-neutral-900/60 border border-violet-500/20 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-violet-500/30 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-12 h-12 object-contain"
      />
      <span className="absolute bottom-[-1.5rem] text-sm text-violet-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default SkillCard;
