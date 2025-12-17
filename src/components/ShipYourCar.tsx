import { useState } from 'react';
import { Package } from 'lucide-react';
import Modal from './Modal';
import ImageWithLoader from './ImageWithLoader';

const carImage = '/images/car.png';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request Data:', formData);
    setIsModalOpen(false);
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
      <section id="ship" className="py-20 bg-[#2d66b2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <Package className="w-16 h-16 text-white mx-auto lg:mx-0 mb-6" />
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
                className="bg-white hover:bg-gray-100 text-[#2d66b2] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d66b2] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2d66b2] hover:bg-[#2d66b2] text-white py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Submit Quote Request
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ShipYourCar;
