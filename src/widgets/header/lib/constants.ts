import { Variants } from "framer-motion";

export const navItems = [
  { label: "О нас", key: "content" },
  { label: "Проекты", key: "project" },
  { label: "Отзывы", key: "reviews" },
];

export const itemVariants = {
  closed: { y: 10, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

export const menuVariants: Variants = {
  closed: {
    y: "-40%",
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 },
  },
};
