import { Variants, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const ChildSection = ({
  title,
  children,
}: PropsWithChildren & { title?: string }) => {
  return (
    <motion.section className="space-y-4 w-full" variants={childVariants}>
      <motion.h2
        className="text-zinc-400 text-2xl font-tt-travels-bold"
        variants={childVariants}
      >
        {title}
      </motion.h2>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.section>
  );
};
