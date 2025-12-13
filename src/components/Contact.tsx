import type { FormEvent } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const pins = [
    { top: '35%', left: '15%' },
    { top: '45%', left: '25%' },
    { top: '30%', left: '35%' },
    { top: '50%', left: '50%' },
    { top: '25%', left: '55%' },
    { top: '40%', left: '65%' },
    { top: '20%', left: '75%' },
    { top: '55%', left: '80%' },
    { top: '70%', left: '45%' },
    { top: '75%', left: '20%' },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get('fullName') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';
    console.log('Contact form submission:', { fullName, email, message });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Serving all 50 states with nationwide coverage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className="relative w-full aspect-[4/3]">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="500" fill="#f3f4f6" />

                <path
                  d="M100,100 L700,100 L700,400 L600,400 L580,420 L560,400 L100,400 Z
                     M150,150 L300,150 L320,170 L300,190 L150,190 Z
                     M350,130 L450,130 L450,200 L350,200 Z
                     M470,160 L550,160 L570,180 L550,200 L470,200 Z
                     M200,250 L350,250 L350,350 L200,350 Z
                     M400,270 L500,270 L500,330 L400,330 Z
                     M550,240 L650,240 L650,320 L550,320 Z"
                  fill="#e5e7eb"
                  stroke="#d1d5db"
                  strokeWidth="2"
                />

                {pins.map((pin, index) => (
                  <g key={index}>
                    <circle
                      cx={`${parseFloat(pin.left) * 8}`}
                      cy={`${parseFloat(pin.top) * 5}`}
                      r="8"
                      fill="#2563eb"
                      opacity="0.8"
                    />
                    <circle
                      cx={`${parseFloat(pin.left) * 8}`}
                      cy={`${parseFloat(pin.top) * 5}`}
                      r="12"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                      opacity="0.4"
                    >
                      <animate
                        attributeName="r"
                        from="12"
                        to="20"
                        dur="2s"
                        begin={`${index * 0.2}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.4"
                        to="0"
                        dur="2s"
                        begin={`${index * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </svg>
            </div>
            <div className="mt-6 flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span className="font-medium">Nationwide Service Coverage</span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get in Touch
              </h3>
              {/* <p className="text-gray-700 leading-relaxed max-w-xl">
                Have questions about our services? Need a custom quote or want
                to discuss your specific transport needs? Our team is here to
                help you every step of the way.
              </p> */}
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your transport needs..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-colors duration-300"
                >
                  Send Email
                </button>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </form>

            <div className="space-y-4">
              {/* <a
                href="mailto:contact@primeautotransport.com"
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="bg-blue-100 rounded-full p-3 mr-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email Us</div>
                  <div className="font-semibold text-gray-900">
                    contact@primeautotransport.com
                  </div>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
