import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';

const Feedback = () => {
  const [showAll, setShowAll] = useState(false);
  const feedbacks = [
    {
      company: 'Johnson Automotive Group',
      date: 'March 15, 2025',
      tags: ['On-Time Transport', 'Professional Service'],
      review:
        'Prime Auto Transport exceeded our expectations when shipping our entire fleet of luxury vehicles from California to New York. Every car arrived in pristine condition, and the communication throughout the process was outstanding.',
    },
    {
      company: 'Riverside Motors LLC',
      date: 'February 28, 2025',
      tags: ['Great Communication', 'Safe Delivery'],
      review:
        'We have been using Prime Auto for over two years now, and they never disappoint. Their drivers are courteous, professional, and treat every vehicle with care. Highly recommend for any dealership looking for reliable transport.',
    },
    {
      company: 'Elite Car Sales',
      date: 'January 20, 2025',
      tags: ['On-Time Transport', 'Excellent Value'],
      review:
        'After trying several transport companies, we finally found our go-to partner. Prime Auto consistently delivers on time and provides competitive pricing without sacrificing quality. Their team is responsive and always ready to help.',
    },
    {
      company: 'AutoHub Distribution',
      date: 'December 10, 2024',
      tags: ['Professional Service', 'Fast Delivery'],
      review:
        'Shipped 15 vehicles last month across different states, and Prime Auto handled everything seamlessly. The tracking system kept us informed every step of the way, and all vehicles arrived ahead of schedule.',
    },
    {
      company: 'Premium Imports Inc',
      date: 'November 5, 2024',
      tags: ['Great Communication', 'On-Time Transport'],
      review:
        "When shipping high-end imports, there's no room for error. Prime Auto understands this and treats each vehicle as if it were their own. We've never had a single issue with damage or delays.",
    },
    {
      company: 'Metro Auto Exchange',
      date: 'October 22, 2024',
      tags: ['Safe Delivery', 'Competitive Pricing'],
      review:
        'The booking process was straightforward, and the quote was transparent with no hidden fees. Our vehicles were picked up and delivered exactly as promised. Will definitely use Prime Auto again for future shipments.',
    },
    {
      company: 'Coastal Vehicle Solutions',
      date: 'September 18, 2024',
      tags: ['Professional Service', 'On-Time Transport'],
      review:
        'We needed to transport several classic cars for a vintage show, and Prime Auto handled them with exceptional care. The enclosed transport option gave us peace of mind, and everything arrived in perfect condition.',
    },
    {
      company: 'Midwest Auto Traders',
      date: 'August 30, 2024',
      tags: ['Fast Delivery', 'Great Communication'],
      review:
        "I've worked with many transport companies over the years, and Prime Auto stands out for their reliability and customer service. They're always available to answer questions and provide updates throughout the shipping process.",
    },
    {
      company: 'Precision Motors Group',
      date: 'July 14, 2024',
      tags: ['On-Time Transport', 'Safe Delivery'],
      review:
        'Prime Auto has been our trusted partner for interstate vehicle transport for three years now. Their consistent quality of service and competitive rates make them an invaluable part of our business operations.',
    },
    {
      company: 'Velocity Auto Logistics',
      date: 'June 8, 2024',
      tags: ['Excellent Value', 'Professional Service'],
      review:
        'From the initial quote to final delivery, the entire experience was smooth and professional. The driver was punctual, respectful, and took great care in loading and unloading our vehicles. Absolutely satisfied with the service.',
    },
    {
      company: 'Heritage Car Collection',
      date: 'May 25, 2024',
      tags: ['Safe Delivery', 'Great Communication'],
      review:
        'Transporting vintage automobiles requires special attention, and Prime Auto delivered exactly that. They provided regular updates and ensured our prized collection arrived without a scratch. Truly exceptional service.',
    },
    {
      company: 'Sunrise Automotive Network',
      date: 'April 12, 2024',
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
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
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
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            {toggleLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
