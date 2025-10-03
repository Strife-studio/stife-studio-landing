import Image from "next/image";
import { executionContent } from "../lib/constants";
import { cn } from "@/shared";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
  hover: { scale: 1.01, transition: { duration: 0.3 } },
};

export const ExecutionWidget = () => {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {executionContent.map((execution) => {
        return (
          <motion.div
            key={execution.id}
            style={{ backgroundImage: `url(${execution.bgCardPath})` }}
            className="w-full h-[450px] md:h-[640px] rounded-3xl p-10 space-y-4 bg-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <span>
                <Image
                  alt={`card-titles`}
                  src={execution.iconPath}
                  width={40}
                  height={40}
                />
              </span>
              {execution.title()}
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                alt={`card-bg-${execution.title()}`}
                src={execution.widgetPath}
                width={400}
                height={400}
                className={cn(
                  "w-[250px] h-[230px] md:w-[400px] md:h-[400px]",
                  execution.id === 4 && "h-[230px] md:h-[350px]"
                )}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
