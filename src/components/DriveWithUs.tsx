import { useState } from 'react';
import Modal from './Modal';
import ImageWithLoader from './ImageWithLoader';

const driverImage = '/images/driver.jpg';

const DriveWithUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    yearsExperience: '',
    cdlType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver Application Data:', formData);
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      cityState: '',
      yearsExperience: '',
      cdlType: '',
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
      <section id="drive" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 text-center lg:text-left text-[#4672B4]">
              <img
                src="/images/icon.png"
                alt="Prime Auto Transport icon"
                className="w-26 h-24 mx-auto lg:mx-0 mb-6 object-contain"
                loading="lazy"
              />
              <h2 className="text-4xl font-bold text-[#4672B4] mb-6">
                Drive With Us
              </h2>
              <p className="text-lg text-[#4672B4] max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Join our team of professional drivers and be part of a company
                that values excellence, safety, and reliability. We offer
                competitive pay, consistent routes, and the support you need to
                succeed on the road.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FF9A5A] hover:bg-[#e57d3f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply as a Driver
              </button>
            </div>

            <div className="order-2 lg:order-1 relative">
              <ImageWithLoader
                src={driverImage}
                alt="Prime Auto Transport driver"
                containerClassName="overflow-hidden rounded-2xl shadow-xl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Driver Application"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City/State *
            </label>
            <input
              type="text"
              name="cityState"
              required
              value={formData.cityState}
              onChange={handleChange}
              placeholder="e.g., Los Angeles, CA"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <input
                type="number"
                name="yearsExperience"
                required
                min="0"
                value={formData.yearsExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CDL Type *
              </label>
              <select
                name="cdlType"
                required
                value={formData.cdlType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
              >
                <option value="">Select CDL Type</option>
                <option value="Class A">Class A</option>
                <option value="Class B">Class B</option>
                <option value="Class C">Class C</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your experience and why you want to join our team..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4672B4] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF9A5A] hover:bg-[#e57d3f] text-white py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Submit Application
          </button>
        </form>
      </Modal>
    </>
  );
};

export default DriveWithUs;
