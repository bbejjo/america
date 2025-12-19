import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithLoader from './ImageWithLoader';

type GalleryImage = {
  id: number;
  image: string;
  description?: string;
};

const fallbackImages: GalleryImage[] = [
  {
    id: 1,
    image: '/images/pic1.jpg',
    description: '',
  },
  {
    id: 2,
    image: '/images/pic2.jpg',
    description: '',
  },
  {
    id: 3,
    image: '/images/pic3.jpg',
    description: '',
  },
  {
    id: 4,
    image: '/images/pic4.jpg',
    description: '',
  },
  {
    id: 5,
    image: '/images/pic5.jpg',
    description: '',
  },
  {
    id: 6,
    image: '/images/pic6.jpg',
    description: '',
  },
];

const OurProcess = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);

  useEffect(() => {
    setImages(fallbackImages);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = Math.max(container.clientWidth * 0.8, 320);
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our process</h2>
          <p className="text-lg text-gray-700">
            A horizontal look at how we plan, secure, and deliver every load with care.
          </p>
        </div>

        {/* wrapper stays — buttons moved OUTSIDE */}
        <div className="relative flex items-center">

          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="hidden md:flex items-center justify-center absolute -left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#FF9A5A] shadow-lg border border-[#e57d3f] hover:bg-[#e57d3f] active:scale-95 hover:scale-105 transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* SCROLL WRAPPER */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-14 md:px-12 lg:px-18 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex-shrink-0 w-4" />
            {images.map((image) => (
              <div
                key={image.id}
                className="relative flex-shrink-0 w-72 sm:w-80 lg:w-96 h-56 sm:h-64 lg:h-72 snap-center overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm group"
              >
                <ImageWithLoader
                  src={image.image}
                  alt={image.description ?? 'Process photo'}
                  containerClassName="w-full h-full flex items-center justify-center bg-gray-50"
                  className="max-h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105"
                />
                {image.description ? (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white px-4 py-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex-shrink-0 w-4" />
          </div>

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="hidden md:flex items-center justify-center absolute -right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#FF9A5A] shadow-lg border border-[#e57d3f] hover:bg-[#e57d3f] active:scale-95 hover:scale-105 transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
