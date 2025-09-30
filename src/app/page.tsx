import { ExecutionWidget } from "@/widgets/execution/ui/executionWidget";
import { Header } from "@/widgets/header/ui/header";
import { ProjectWidget } from "@/widgets/project/ui/projectWidget";
import { ServicesWidget } from "@/widgets/services/ui/servicesWidget";
import { ValuesWidget } from "@/widgets/values/ui/valuesWidget";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] space-y-20">
      <section
        className="relative flex h-[720px] items-center justify-center bg-cover bg-center"
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

      <section className="flex items-center justify-center w-full flex-col space-y-20 p-20">
        <div className="flex items-center flex-col">
          <h2>Кто мы?</h2>
          <p className="font-tt-travels-bold text-[32px]">
            Мы — команда Strife
          </p>
        </div>
        <section className="space-y-4 w-full">
          <h2 className="text-zinc-400 text-2xl font-tt-travels-bold">
            Статистика
          </h2>
          <ProjectWidget />
        </section>
        <section className="space-y-4 w-full">
          <h2 className="text-zinc-400 text-2xl font-tt-travels-bold">
            Ценности
          </h2>
          <ValuesWidget />
        </section>
        <div className="flex items-center flex-col">
          <h2>Что мы делаем?</h2>
          <p className="font-tt-travels-bold text-[32px] text-center">
            Полный цикл разработки: <br /> от концепции до поддержки после
            запуска
          </p>
        </div>
        <section className="space-y-4 w-full">
          <h2 className="text-zinc-400 text-2xl font-tt-travels-bold">
            Услуги
          </h2>
          <ServicesWidget />
        </section>
        <div className="flex items-center flex-col">
          <h2>Проекты</h2>
          <p className="font-tt-travels-bold text-[32px] text-center">
            Примеры того, как мы помогли <br /> клиентам достичь успеха
          </p>
        </div>
        <section className="space-y-4 w-full">
          <ExecutionWidget />
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
