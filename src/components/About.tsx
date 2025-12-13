import { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Clock } from 'lucide-react';

type Stat = {
  icon: typeof Award;
  value: number;
  suffix?: string;
  label: string;
};

const useCountUp = (target: number, duration = 1200, start = 1, active = true) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) {
      setValue(start);
      return;
    }

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const nextValue = Math.round(start + (target - start) * progress);
      setValue(nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start, active]);

  return value;
};

const formatNumber = (value: number, suffix = '') =>
  `${new Intl.NumberFormat('en-US').format(value)}${suffix}`;

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const About = () => {
  const stats: Stat[] = [
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Years in Business',
    },
    {
      icon: TrendingUp,
      value: 50000,
      suffix: '+',
      label: 'Vehicles Shipped',
    },
    {
      icon: Clock,
      value: 98,
      suffix: '%',
      label: 'On-Time Delivery',
    },
  ];

  const { ref: statsRef, isInView } = useInView(0.3);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-2">
            <img
              src="/images/map.png"
              alt="Map"
              className="rounded-lg w-full"
            />
          </div>

          <div className="order-1 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Prime Auto Transport
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With over a decade of excellence in the auto transport industry, we've
              built our reputation on reliability, professionalism, and customer
              satisfaction. Our nationwide network of certified carriers ensures your
              vehicle reaches its destination safely and on time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're relocating across the country, buying a vehicle online,
              or need specialty transport, our team of experts is here to provide
              seamless service from pickup to delivery. We treat every vehicle as if
              it were our own.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 1200, 1, isInView);
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {formatNumber(count, stat.suffix)}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
