import Image from "next/image";

export const Header = () => {
  return (
    <div className="absolute top-0 p-6 w-full flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image
          alt="logo-strife-studio"
          src={"/icons/strife-logo.svg"}
          width={24}
          height={24}
        />
        <p className="text-white font-tt-travels-bold text-lg pt-1">Strife</p>
      </div>
      <div className="flex space-x-4 text-white">
        <p>О нас</p>
        <p>Проекты</p>
        <p>Отзывы</p>
      </div>
      <div className="text-white font-tt-travels-bold text-xl">Связаться</div>
    </div>
  );
};
