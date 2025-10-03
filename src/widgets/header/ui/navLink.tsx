import { cn } from "@/shared";
import { Variants, motion } from "framer-motion";

interface NavLinkProps {
  label: string;
  onClick?: () => void;
  className?: string;
  variants?: Variants;
}

export const NavLink = ({
  label,
  onClick,
  className = "",
  variants,
}: NavLinkProps) => (
  <motion.p
    className={cn(`hover:text-white/80 transition-colors text-lg`, className)}
    onClick={onClick}
    variants={variants}
  >
    {label}
  </motion.p>
);
