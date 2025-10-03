import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

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
    <motion.div
      className="flex flex-col w-full border rounded-4xl p-7 h-[400px] md:h-full"
      style={{ backgroundImage: `url(/images/bg-card.png)` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="relative flex h-full">
        {card.icons.map((icon, i) => (
          <motion.div
            key={i}
            variants={iconVariants}
            className={clsx(
              "absolute",
              {
                "-bottom-8 left-0 rotate-6": i === 0,
                "left-[35%] bottom-2 -rotate-12": i === 1,
                "right-2 bottom-0 rotate-12": i === 2,
              },
              "debug"
            )}
          >
            <Image
              src={icon}
              alt={`logo-${i}`}
              width={72}
              height={72}
              className="h-18 w-18 sm:w-24 sm:h-24 md:h-16 md:w-16 xl:w-24 xl:h-24 object-contain"
              onError={() => console.error(`Failed to load icon: ${icon}`)}
            />
          </motion.div>
        ))}
      </div>
      <motion.div className="flex items-end h-full" variants={textVariants}>
        <div className="flex flex-col font-tt-travels-bold">
          <motion.p
            className="text-[58px] xl:text-[72px] font-bold text-white leading-16"
            variants={textVariants}
          >
            {card.count}
          </motion.p>
          <motion.p
            className="text-xl xl:text-2xl font-semibold text-white"
            variants={textVariants}
          >
            {card.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
