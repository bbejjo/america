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
    description: 'Step 3: Loading with care',
  },
  {
    id: 4,
    image: '/images/pic4.jpg',
    description: '',
  },
  {
    id: 5,
    image: '/images/pic5.jpg',
    description: 'Step 5: In-transit updates',
  },
  {
    id: 6,
    image: '/images/pic6.jpg',
    description: 'Step 6: On-time delivery',
  },
];

const OurProcess = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);

  useEffect(() => {
    // Replace this with your own API/images when ready.
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
    <section id="process" className="py-20 bg-[#fff5e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our process</h2>
          <p className="text-lg text-gray-700">
            A horizontal look at how we plan, secure, and deliver every load with care.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#fff5e8] shadow-lg border border-gray-200 hover:bg-[#ffe8d1] active:scale-95 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#fff5e8] shadow-lg border border-gray-200 hover:bg-[#ffe8d1] active:scale-95 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex-shrink-0 w-4" />
            {images.map((image) => (
              <div
                key={image.id}
                className="relative flex-shrink-0 w-72 sm:w-80 lg:w-96 h-56 sm:h-64 lg:h-72 snap-center overflow-hidden rounded-xl bg-[#fff5e8] border border-gray-200 shadow-sm group"
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
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
