import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { itemVariants, menuVariants, navItems } from "../lib/constants";
import { NavLink } from "./navLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderMobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.nav
        className="absolute z-10 top-20 overflow-hidden rounded-b-3xl left-0 w-full bg-[#fbb7c3]/80 text-white flex flex-col items-center sm:hidden"
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
        role="navigation"
      >
        <Image
          alt="cloud"
          src={"/images/cloud.png"}
          width={800}
          height={800}
          className="absolute scale-150 -bottom-28 rotate-[18deg] -left-20"
        />
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            label={item.label}
            onClick={onClose}
            variants={itemVariants}
          />
        ))}
        <motion.a
          href="#contact"
          className="text-white font-tt-travels-bold text-xl pb-6"
          variants={itemVariants}
        >
          Связаться
        </motion.a>
      </motion.nav>
    )}
  </AnimatePresence>
);
