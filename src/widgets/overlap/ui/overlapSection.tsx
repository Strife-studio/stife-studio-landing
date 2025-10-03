import { scrollByContainer } from "@/shared/lib/helper";
import { Header } from "@/widgets/header/ui/header";
import { Variants, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};

export const OverlapSection = () => {
  return (
    <motion.section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/bg-container.png)` }}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <Header />
      <motion.div
        className="relative p-6 md:p-0 z-10 text-center flex items-center flex-col space-y-4"
        variants={childVariants}
      >
        <div className="items-center space-x-3 hidden md:flex">
          <Image
            alt="logo-strife-studio"
            src="/icons/strife-logo.svg"
            width={32}
            height={32}
            className="w-16 h-16"
          />
          <p className="text-white font-tt-travels-bold text-4xl pt-3">
            Strife
          </p>
        </div>
        <motion.h1
          className="text-[36px] md:text-[48px] xl:text-[60px] text-white font-tt-travels-bold font-extrabold leading-none"
          variants={childVariants}
        >
          Создаем цифровое превосходство
        </motion.h1>
        <motion.p
          className="md:text-[20px] xl:text-[26px] text-white"
          variants={childVariants}
        >
          Мы решаем сложные IT проблемы, чтобы ваш бизнес выделялся.
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-0 w-full flex flex-col items-center space-y-2 z-10"
        initial="hidden"
        animate="visible"
        variants={childVariants}
      >
        <motion.button
          variants={arrowVariants}
          onClick={() => scrollByContainer("content")}
          className="cursor-pointer"
        >
          <ArrowDown
            className="text-zinc-400 w-8 h-8 md:w-10 md:h-10"
            strokeWidth={2}
          />
        </motion.button>

        <motion.p className="text-zinc-400 font-tt-travels-bold text-lg md:text-xl">
          Узнать больше
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f9f9f9a8] to-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />
    </motion.section>
  );
};
