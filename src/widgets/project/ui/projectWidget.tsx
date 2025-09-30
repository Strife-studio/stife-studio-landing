import { ProjectCard } from "./projectCard";

export const ProjectWidget = () => {
  const cards = [
    { count: "60+", description: "Завершенных проектов" },
    { count: "50+", description: "Довольных клиентов" },
    { count: "10+", description: "Лет опыта" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <ProjectCard
          key={index}
          count={card.count}
          description={card.description}
        />
      ))}
    </div>
  );
};
