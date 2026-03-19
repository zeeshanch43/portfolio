import { Children, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface ContentRowProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  autoPlay?: boolean;
}

const ContentRow = ({ title, children, id, autoPlay = false }: ContentRowProps) => {
  const items = Children.toArray(children);
  const canLoop = items.length > 1;
  const loopItems = useMemo(() => {
    if (items.length === 0) {
      return items;
    }

    if (items.length === 1) {
      return items;
    }

    // Repeat short rows so loop mode remains active even on wide viewports.
    return items.length < 8 ? [...items, ...items, ...items] : items;
  }, [items]);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || !carouselApi || !canLoop || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 2800);

    return () => window.clearInterval(timer);
  }, [autoPlay, carouselApi, canLoop, isPaused]);

  const scroll = (dir: "left" | "right") => {
    if (carouselApi) {
      if (dir === "left") {
        carouselApi.scrollPrev();
      } else {
        carouselApi.scrollNext();
      }
    }
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="px-6 md:px-12 py-6"
    >
      <h2 className="text-2xl md:text-3xl font-display tracking-wide mb-4">{title}</h2>
      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 w-10 bg-background/65 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center"
          disabled={!canLoop}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: canLoop, align: "start", dragFree: false, watchDrag: false }}
          className="w-full"
        >
          <CarouselContent className="ml-0 py-2">
            {loopItems.map((child, index) => (
              <CarouselItem key={`slide-${index}`} className="basis-auto pl-0 pr-3">
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 bg-background/65 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center"
          disabled={!canLoop}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.section>
  );
};

export default ContentRow;
