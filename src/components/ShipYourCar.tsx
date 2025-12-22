import { useState } from 'react';
import { Container } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import ImageWithLoader from './ImageWithLoader';

const carImage = '/images/car.png';
const EMAIL_SERVICE_ID = 'service_paei662';
const EMAIL_TEMPLATE_ID = 'template_zf75qe4';
const DEFAULT_PUBLIC_KEY = '7FPW0yMTEmK4OT-DZ';
const EMAIL_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

const ShipYourCar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    vehicleType: '',
    pickupDate: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('sending');

    const detailLines = [
      { label: 'Pickup City', value: formData.pickupLocation },
      { label: 'Delivery City', value: formData.deliveryLocation },
      { label: 'Vehicle Type', value: formData.vehicleType },
      { label: 'Preferred Pickup Date', value: formData.pickupDate },
      { label: 'Additional Details', value: formData.message },
    ]
      .filter((item) => item.value)
      .map((item) => `${item.label} - ${item.value}`)
      .join('\n');

    const payload = {
      title: 'Customer Application',
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      data: detailLines,
    };

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        payload,
        { publicKey: EMAIL_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        pickupLocation: '',
        deliveryLocation: '',
        vehicleType: '',
        pickupDate: '',
        message: '',
      });
    } catch (err) {
      setError('Could not send request. Please try again.');
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section id="ship" className="py-20 bg-[#4672B4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <Container className="w-16 h-16 text-white mx-auto lg:mx-0 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ship Your Car
              </h2>
              <p className="text-lg text-white/90 max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Get a free, no-obligation quote for your vehicle transport
                needs. Whether you're shipping a sedan, SUV, luxury car, or
                classic vehicle, we provide transparent pricing and professional
                service across all 50 states.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FF9A5A] hover:bg-[#e57d3f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Quote
              </button>
            </div>

            <div className="relative">
              <ImageWithLoader
                src={carImage}
                alt="Transported vehicle on trailer"
                containerClassName="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Your Free Quote"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup City/State *
              </label>
              <input
                type="text"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g., Miami, FL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery City/State *
              </label>
              <input
                type="text"
                name="deliveryLocation"
                required
                value={formData.deliveryLocation}
                onChange={handleChange}
                placeholder="e.g., Seattle, WA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type *
              </label>
              <select
                name="vehicleType"
                required
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              >
                <option value="">Select Vehicle Type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
                <option value="Luxury">Luxury Vehicle</option>
                <option value="Classic">Classic Car</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Pickup Date *
              </label>
              <input
                type="date"
                name="pickupDate"
                required
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide any additional information about your vehicle or special requirements..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#FF9A5A] hover:bg-[#e57d3f] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {status === 'sending' ? 'Submitting...' : 'Submit Quote Request'}
          </button>
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          {status === 'success' && (
            <p className="text-sm text-green-600 text-center">
              Request sent!
            </p>
          )}
        </form>
      </Modal>
    </>
  );
};

export default ShipYourCar;
