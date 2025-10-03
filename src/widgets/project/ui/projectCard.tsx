import React from "react";
import Image from "next/image";
import clsx from "clsx";

export const ProjectCard = ({
  card,
}: {
  card: {
    count: string;
    description: string;
    icons: string[];
  };
}) => {
  return (
    <div
      className="flex flex-col w-full border rounded-4xl p-7 h-[400px] md:h-full"
      style={{ backgroundImage: `url(/images/bg-card.png)` }}
    >
      <div className="relative flex h-full">
        {card.icons.map((icon, i) => (
          <Image
            key={i}
            src={icon}
            alt={`logo-${i}`}
            width={64}
            height={64}
            className={clsx({
              "absolute -bottom-8 left-0 rotate-6 h-18 w-18 sm:w-24 sm:h-24 md:h-16 md:w-16 xl:w-24 xl:h-24":
                i === 0,
              "absolute left-[35%] bottom-2 -rotate-12 h-18 w-18 sm:w-24 sm:h-24 md:h-16 md:w-16 xl:w-24 xl:h-24":
                i === 1,
              "absolute right-2 bottom-0 rotate-12 h-18 w-18 sm:w-24 sm:h-24 md:h-16 md:w-16 xl:w-24 xl:h-24":
                i === 2,
            })}
          />
        ))}
      </div>
      <div className="flex items-end h-full">
        <div className="flex flex-col font-tt-travels-bold">
          <p className="text-[58px] xl:text-[72px] font-bold text-white leading-16">
            {card.count}
          </p>
          <p className="text-xl xl:text-2xl font-semibold text-white">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};
