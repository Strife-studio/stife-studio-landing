import { ExecutionWidget } from "@/widgets/execution/ui/executionWidget";
import { ChildSection } from "@/widgets/overlap/ui/childSection";
import { ProjectWidget } from "@/widgets/project/ui/projectWidget";
import { ServicesWidget } from "@/widgets/services/ui/servicesWidget";
import { ValuesWidget } from "@/widgets/values/ui/valuesWidget";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const ContentSection = () => {
  return (
    <motion.section
      id="content"
      className="flex items-center justify-center w-full flex-col space-y-10 md:space-y-20 p-4 sm:px-10 sm:pt-10 sm:p-0 xl:px-18 xl:pt-18 xl:p-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div
        className="flex items-center flex-col"
        variants={childVariants}
      >
        <motion.h2 variants={childVariants}>Кто мы?</motion.h2>
        <motion.p
          className="font-tt-travels-bold text-center text-[22px] md:text-[32px]"
          variants={childVariants}
        >
          Мы — команда Strife
        </motion.p>
      </motion.div>

      <ChildSection title="Статистика">
        <ProjectWidget />
      </ChildSection>

      <ChildSection title="Ценности">
        <ValuesWidget />
      </ChildSection>

      <motion.div
        className="flex items-center flex-col"
        variants={childVariants}
      >
        <motion.h2 variants={childVariants}>Что мы делаем?</motion.h2>
        <motion.p
          className="font-tt-travels-bold text-[22px] md:text-[32px] text-center"
          variants={childVariants}
        >
          Полный цикл разработки: <br /> от концепции до поддержки после запуска
        </motion.p>
      </motion.div>

      <ChildSection title="Услуги">
        <ServicesWidget />
      </ChildSection>

      <motion.div
        id="project"
        className="flex items-center flex-col"
        variants={childVariants}
      >
        <motion.h2 variants={childVariants}>Проекты</motion.h2>
        <motion.p
          className="font-tt-travels-bold text-[22px] md:text-[32px] text-center"
          variants={childVariants}
        >
          Примеры того, как мы помогли <br /> клиентам достичь успеха
        </motion.p>
      </motion.div>

      <ChildSection>
        <ExecutionWidget />
      </ChildSection>
    </motion.section>
  );
};
