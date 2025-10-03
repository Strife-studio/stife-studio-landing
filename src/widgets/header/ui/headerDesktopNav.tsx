import { scrollByContainer } from "@/shared/lib/helper";
import { navItems } from "../lib/constants";
import { NavLink } from "./navLink";

export const HeaderDesktopNav = () => (
  <nav className="hidden sm:flex space-x-6 text-white items-center">
    {navItems.map((item, index) => (
      <NavLink
        key={index}
        label={item.label}
        onClick={() => scrollByContainer(item.key)}
      />
    ))}
  </nav>
);
