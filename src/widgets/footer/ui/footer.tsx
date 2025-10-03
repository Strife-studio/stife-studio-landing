import { Copyright } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col  justify-center space-y-1 p-7 border bg-[#fbb7c3] items-center">
      <div className="flex items-center space-x-1">
        <Image
          alt="logo-strife-studio"
          src="/icons/strife-logo.svg"
          width={24}
          height={24}
          className="sm:w-10 sm:h-10"
        />
        <p className="text-white font-tt-travels-bold text-lg pt-1">Strife</p>
      </div>
      <div className="text-white flex items-center justify-center font-tt-travels-bold text-sm space-x-1 pt-1">
        <span>
          <Copyright size={16} />
        </span>
        <p className="text-center">2025 Strife Studio. Все права защищены.</p>
      </div>
    </footer>
  );
};
