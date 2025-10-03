import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HeaderMobileMenuButton = ({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) => (
  <button
    className="sm:hidden text-white focus:outline-none z-30 cursor-pointer"
    onClick={onToggle}
    aria-label="Toggle menu"
  >
    <motion.div
      animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isOpen ? (
        <X size={28} strokeWidth={2} />
      ) : (
        <Menu size={28} strokeWidth={2} />
      )}
    </motion.div>
  </button>
);
