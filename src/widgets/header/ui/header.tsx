"use client";
import Image from "next/image";
import { useState } from "react";
import { HeaderDesktopNav } from "./headerDesktopNav";
import { HeaderMobileMenu } from "./headerMobileMenu";
import { HeaderMobileMenuButton } from "./headerMobileMenuButton";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex items-center justify-between bg-[#fbb7c3]/90 sm:backdrop-blur-2xl sm:bg-transparent backdrop-blur-md z-20">
      <div className="flex items-center space-x-3">
        <Image
          alt="logo-strife-studio"
          src="/icons/strife-logo.svg"
          width={24}
          height={24}
          className="sm:w-10 sm:h-10"
        />
        <p className="text-white font-tt-travels-bold text-lg pt-1">Strife</p>
      </div>
      <HeaderDesktopNav />
      <Link
        href={"https://t.me/strife_studio"}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:block text-white font-tt-travels-bold text-xl"
      >
        Связаться
      </Link>
      <HeaderMobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
      <HeaderMobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};
