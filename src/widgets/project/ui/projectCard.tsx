import React from "react";
import Image from "next/image";

export const ProjectCard = ({
  count,
  description,
}: {
  count: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col w-full border rounded-4xl bg-gradient-to-br from-[#f4a4bc] to-[#e88aa3] p-7">
      <div className="relative flex h-[400px]">
        <Image
          src="/icons/company/sber-logo.svg"
          alt="sber-logo"
          width={64}
          height={64}
          className="absolute bottom-0 left-0 rotate-6 sm:w-24 sm:h-24"
        />
        <Image
          src="/icons/company/avito-logo.svg"
          alt="avito-logo"
          width={64}
          height={64}
          className="absolute left-[35%] bottom-8 -rotate-12 sm:w-24 sm:h-24"
        />
        <Image
          src="/icons/company/tbank-logo.svg"
          alt="tbank-logo"
          width={64}
          height={64}
          className="absolute right-2 bottom-4 rotate-12 sm:w-24 sm:h-24"
        />
      </div>
      <div className="flex items-end h-[100px] sm:h-[150px]">
        <div className="flex flex-col font-tt-travels-bold">
          <p className="text-[72px] font-bold text-white leading-16">{count}</p>
          <p className="text-lg sm:text-2xl font-semibold text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
