import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { itemVariants, menuVariants, navItems } from "../lib/constants";
import { NavLink } from "./navLink";
import { scrollByContainer } from "@/shared/lib/helper";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderMobileMenu = ({ isOpen }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.nav
        className="absolute z-10 top-20 overflow-hidden rounded-b-3xl left-0 w-full backdrop-blur-md bg-[#fbb7c3]/90 text-white flex flex-col items-center sm:hidden"
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
        role="navigation"
      >
        <Image
          alt="cloud"
          src={"/images/cloud.png"}
          width={600}
          height={600}
          className="absolute scale-150 -bottom-28 rotate-[18deg] -left-20 z-[-1] clip-path-inset(0 0 0 0)"
        />
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            label={item.label}
            onClick={() => scrollByContainer(item.key)}
            variants={itemVariants}
          />
        ))}
        <Link
          href={"https://t.me/strife_studio"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-tt-travels-bold text-xl pb-6"
        >
          Связаться
        </Link>
      </motion.nav>
    )}
  </AnimatePresence>
);
