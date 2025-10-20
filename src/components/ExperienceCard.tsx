import type { Experience } from "../data/experiences";

interface Props {
  item: Experience;
}

const ExperienceCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="pl-8 relative">
      <div
        className={`absolute -left-4 top-1 w-3 h-3 rounded-full ${item.color}`}
      ></div>

      <div className="flex items-center gap-4 mb-2">
        <img src={item.logo} className="w-12" alt={item.company} />
        <h4 className="text-lg font-semibold">{item.company}</h4>
      </div>

      <p className="text-sm text-neutral-400">{item.date}</p>

      <ul className="mt-2 text-neutral-300 text-sm space-y-1">
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
