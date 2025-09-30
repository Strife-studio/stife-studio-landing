import { Header } from "@/widgets/header/ui/header";
import { ArrowRight } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] space-y-20">
      <section
        className="
          relative
          mx-auto
          flex
          h-[720px] 
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{ backgroundImage: `url(/images/bg-container.png)` }}
      >
        <Header />
        <div className="absolute inset-0" />

        <div className="relative z-10 text-center flex items-center flex-col space-y-4">
          <h1 className="text-[60px] text-white font-tt-travels-bold font-extrabold leading-none">
            Создаем цифровое превосходство
          </h1>
          <p className="text-[26px] text-white">
            Мы решаем сложные IT проблемы, чтобы ваш бизнес выделялся.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center w-full">
        <div className="flex items-center flex-col">
          <h2>Кто мы?</h2>
          <p className="font-tt-travels-bold text-2xl">Мы — команда Strife</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
