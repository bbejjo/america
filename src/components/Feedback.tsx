import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';

const Feedback = () => {
  const [showAll, setShowAll] = useState(false);
  const feedbacks = [
    {
      company: 'Stratton Way Inc',
      date: 'Nov 22, 2025',
      tags: ['Good Communication', 'Good Customer Service', 'On-Time Transport'],
      review:
        'Excellent Job! Very attentive dispatcher, responding calls and texts right away, detail orientaited and great communication. Professional driver. He could handle not a easy pick up with limited timlenie. Highly Rrecommended!.',
    },
    {
      company: 'Bridge Way Logistics LLC',
      date: 'Aug 29, 2025',
      tags: ['Good Communication', 'Good Customer Service', 'On-Time Transport'],
      review:
        'great service and timely updated, exceeding expectations and highly recommended!".',
    },
    {
      company: 'GetCarrier LLC',
      date: 'May 1, 2025',
      tags: ['On-Time Transport', 'Excellent Value', 'Good Customer Service'],
      review:
        'The Customer said “the driver was really nice”. They picked up and delivered as scheduled, kept good communication with all sides and submitted required paperwork within minutes. We asked them to collect our broker fee and they paid it shortly after delivery.',
    },
    {
      company: 'Car Expo US Inc',
      date: 'Apr 15, 2025',
      tags: ['Great Communication', 'On-Time Transport'],
      review:
        "This is a repeated service this company provided and it met all my expectations again! I will call them directly next time I have a job in this particular route. The best service!",
    },
    {
      company: 'Fairways Logistics',
      date: 'Apr 10, 2025',
      tags: ['Professional Service', 'Fast Delivery', 'Good Communication'],
      review:
        'Everything was smooth as butter, The vehicle was delivered on time safely. Would highly recommend!',
    },
    {
      company: 'Ultimate Auto Shipping, Inc',
      date: 'Mar 22, 2025',
      tags: ['Safe Delivery', 'Competitive Pricing', 'Great Communication', 'On-Time Transport'],
      review:
        'excellent prompt service and great communication. The pick and delivery went exactly as scheduled! Thank you!',
    },
    {
      company: 'Sherpa Auto Transport LLC',
      date: 'Mar 18, 2025',
      tags: ['Professional Service', 'On-Time Transport'],
      review:
        'Great service from start to finish. Communication was clear and fast, and everything was handled professionally. Pickup and delivery were both on time. Highly recommend this company.',
    },
    {
      company: 'US CAR-GO FREIGHT LOGISTICS LLC',
      date: 'Feb 20, 2025',
      tags: ['Fast Delivery', 'Great Communication'],
      review:
        "Very reliable auto transport company. Dispatcher was responsive and helpful, and the driver did a great job. No issues at all during the process.",
    },
    {
      company: 'ShipYourCarNow LLC',
      date: 'Feb 14, 2025',
      tags: ['On-Time Transport', 'Safe Delivery'],
      review:
        'Smooth and easy experience. They kept us updated throughout the transport and delivered the vehicle exactly as promised. Will definitely use them again.',
    },
    {
      company: 'JS Transport Services, Inc.',
      date: 'Feb 8, 2025',
      tags: ['Excellent Value', 'Professional Service'],
      review:
        'Everything went perfectly from the initial contact to the final delivery. The dispatcher was quick to respond, coordination was clear, and the vehicle was delivered safely and on time. A very reliable and trustworthy company.',
    },
    {
      company: 'United Freeway Transportation LLC',
      date: 'Jan 25, 2025',
      tags: ['Safe Delivery', 'Great Communication'],
      review:
        'This company exceeded all expectations. They were well organized, easy to work with, and kept us informed throughout the entire transport process. The service was smooth, professional, and dependable. I would confidently recommend them to anyone in need of auto transport services.',
    },
    {
      company: 'Executive Auto Transport LLC',
      date: 'Jan 12, 2025',
      tags: ['On-Time Transport', 'Fast Delivery'],
      review:
        'As a growing dealership, we need a transport partner we can count on. Prime Auto has proven time and again that they are reliable, efficient, and professional. Their rates are fair, and their service is outstanding.',
    },
  ];

  const visibleFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 4);
  const toggleLabel = showAll ? 'See less' : 'See more';

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of businesses nationwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleFeedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <ThumbsUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    {feedback.company}
                  </h3>
                  <p className="text-sm text-gray-500">{feedback.date}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {feedback.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-[#4672B4]/10 text-[#4672B4] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{feedback.review}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center px-5 py-3 bg-[#FF9A5A] text-white font-semibold rounded-full shadow-lg hover:bg-[#e57d3f] active:bg-[#e57d3f] transition-colors"
          >
            {toggleLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
