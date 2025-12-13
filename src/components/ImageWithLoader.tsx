import { useState, type ImgHTMLAttributes, type SyntheticEvent } from 'react';
import { Car } from 'lucide-react';

type ImageWithLoaderProps = ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
};

const LoaderOverlay = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-100 text-gray-700 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="flex items-center gap-3">
      <Car className="h-7 w-7 text-blue-600 animate-pulse" />
      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 animate-road" />
      </div>
    </div>
    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500">
      Loading image
    </span>
  </div>
);

const ImageWithLoader = ({
  containerClassName = '',
  className = '',
  onLoad,
  ...rest
}: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(event);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      <LoaderOverlay isVisible={!isLoaded} />
      <img
        {...rest}
        onLoad={handleLoad}
        className={`block transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};

export { LoaderOverlay };
export default ImageWithLoader;
