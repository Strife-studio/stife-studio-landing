import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { valuesContent } from "../lib/constants";

export const ValuesWidget = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {valuesContent.map(({ title }, index) => (
          <CarouselItem
            key={index}
            className="mr-4 last:mr-0"
            style={{
              flexBasis: `calc(1/3 * 94%)`,
            }}
          >
            <div
              className="h-[280px] bg-cover bg-center flex justify-center items-center rounded-3xl p-8"
              style={{ backgroundImage: `url(/images/bg-carousel.png)` }}
            >
              <div className="flex justify-center items-start h-full">
                <p className="text-[32px] text-center font-tt-travels-bold text-white">
                  {title}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
