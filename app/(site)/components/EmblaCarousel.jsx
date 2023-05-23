import useEmblaCarousel from "embla-carousel-react";

export const EmblaCarousel = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
    </div>
  );
};
