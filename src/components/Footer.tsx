import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
          <a
            href="mailto:maelidispatch@gmail.com"
            className="flex items-center gap-2 text-[#FF9A5A] hover:text-[#e57d3f] transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>maelidispatch@gmail.com</span>
          </a>
          <a
            href="tel:+12679753435"
            className="flex items-center gap-2 text-[#FF9A5A] hover:text-[#e57d3f] transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>+1 267-975-3435</span>
          </a>
        </div>
        <p className="text-center text-gray-400 mt-4">
          © 2025 Maeli LLC. All rights reserved.
        </p>
        <p className="text-center text-gray-500 mt-2">
          Created by WebBuilders
        </p>
      </div>
    </footer>
  );
};

export default Footer;
