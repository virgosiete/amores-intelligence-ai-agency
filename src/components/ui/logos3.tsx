"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by businesses across the Philippines",
  logos = [
    {
      id: "logo-1",
      description: "Aesthetic Clinic",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-2", 
      description: "Airbnb Property",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-3",
      description: "Dormitory",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-4",
      description: "E-commerce Store",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-5",
      description: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-6",
      description: "Medical Clinic",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-7",
      description: "Fitness Center",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-8",
      description: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop",
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };