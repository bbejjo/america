import type { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-white">
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
          <div className="w-full h-full">
            <img
              src="/images/cards.png"
              alt="Contact information cards"
              className="w-full h-full min-h-[320px] md:min-h-[540px] object-cover"
              loading="lazy"
            />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
                  placeholder="Tell us about your transport needs..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  type="submit"
                  className="flex-1 bg-[#FF9A5A] hover:bg-[#e57d3f] text-white py-3 rounded-md font-semibold transition-colors duration-300"
                >
                  Send Email
                </button>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#19994C] text-white font-semibold shadow hover:bg-[green] transition-colors duration-300"
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
                <div className="bg-[#4672B4]/10 rounded-full p-3 mr-4 group-hover:bg-[#4672B4]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#4672B4]" />
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
