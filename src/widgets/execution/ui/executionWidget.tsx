import Image from "next/image";
import { executionContent } from "../lib/constants";

export const ExecutionWidget = () => {
  return (
    <div className="grid grid-cols-2  gap-4">
      {executionContent.map((execution) => (
        <div
          key={execution.id}
          style={{ background: execution.color }}
          className="w-full border h-[640px] rounded-3xl p-10"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <span>
              <Image
                alt={`card-${execution.title}`}
                src={execution.iconPath}
                width={40}
                height={40}
              />
            </span>
            {execution.title()}
          </div>
        </div>
      ))}
    </div>
  );
};
