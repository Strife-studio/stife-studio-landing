import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { servicesContent } from "../lib/constants";

export const ServicesWidget = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {servicesContent.map(({ title }, index) => (
          <CarouselItem
            key={index}
            className="mr-4 last:mr-0"
            style={{
              flexBasis: `calc(1/3 * 94%)`,
            }}
          >
            <div
              className="h-[400px] bg-cover bg-center flex justify-center items-center rounded-3xl p-8"
              style={{ backgroundImage: `url(/images/bg-card.png)` }}
            >
              <div className="flex justify-start items-end h-full w-full">
                <p className="text-[32px] text-start font-tt-travels-bold text-white">
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
