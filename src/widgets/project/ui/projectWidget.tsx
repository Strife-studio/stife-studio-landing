import { cn } from "@/shared";
import { ProjectCard } from "./projectCard";

export const ProjectWidget = () => {
  const cards = [
    {
      count: "60+",
      description: "Завершенных проектов",
      icons: [
        "/icons/company/sber-logo.svg",
        "/icons/company/avito-logo.svg",
        "/icons/company/tbank-logo.svg",
      ],
    },
    {
      count: "50+",
      description: "Довольных клиентов",
      icons: [
        "/icons/company/mts-logo.svg",
        "/icons/company/arena-logo.svg",
        "/icons/company/sovcombank-logo.svg",
      ],
    },
    {
      count: "10+",
      description: "Лет опыта",

      icons: [
        "/icons/company/integra-logo.svg",
        "/icons/company/misis-logo.svg",
        "/icons/company/portal-post-logo.svg",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full md:h-[800px] lg:h-[400px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(index === 2 && "md:col-span-2 lg:col-span-1")}
        >
          <ProjectCard card={card} />
        </div>
      ))}
    </div>
  );
};
