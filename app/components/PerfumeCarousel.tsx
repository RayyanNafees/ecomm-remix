import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=2832&q=80",
    alt: "Luxury perfume 1"
  },
  {
    url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury perfume 2"
  },
  {
    url: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury perfume 3"
  }
];

export const PerfumeCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="relative"
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.url}>
              <div className="relative aspect-16/9 w-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <CarouselPrevious 
            variant="secondary"
            className="h-12 w-12 rounded-full border-2 border-gray-200 bg-white/80 hover:bg-white/90 transition-all"
          />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <CarouselNext 
            variant="secondary"
            className="h-12 w-12 rounded-full border-2 border-gray-200 bg-white/80 hover:bg-white/90 transition-all"
          />
        </div>
      </Carousel>
    </div>
  );
};