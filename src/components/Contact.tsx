import { useState, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_paei662';
const EMAIL_TEMPLATE_ID = 'template_078wbk5';
const DEFAULT_PUBLIC_KEY = '7FPW0yMTEmK4OT-DZ';
const EMAIL_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

const Contact = () => {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);

    if (!EMAIL_PUBLIC_KEY) {
      setError('Email service is not configured. Please try again later.');
      return;
    }

    const formData = new FormData(form);
    const fullName = (formData.get('fullName') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    setStatus('sending');

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          name: fullName,
          email,
          message,
        },
        { publicKey: EMAIL_PUBLIC_KEY }
      );
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Failed to send email via EmailJS:', err);
      setError('Sorry, something went wrong. Please try again.');
      setStatus('error');
    }
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
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8 space-y-6"
            >
              {status === 'success' && (
                <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
                  Thanks for reaching out! Your message has been sent.
                </div>
              )}
              {error && (
                <div className="rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
                  {error}
                </div>
              )}
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
                  disabled={status === 'sending'}
                  className="flex-1 bg-[#FF9A5A] hover:bg-[#e57d3f] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Email'}
                </button>
                <a
                  href="https://wa.me/12679753435"
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
