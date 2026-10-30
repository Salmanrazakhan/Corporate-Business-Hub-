import React from 'react';

interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export const WhyUsSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      number: '01',
      title: 'Move-in Ready',
      description: 'Fully furnished private offices with ergonomic furniture and high-speed fibre.',
    },
    {
      number: '02',
      title: 'Skyline Views',
      description: 'Floor-to-ceiling windows overlooking Burj Khalifa and Dubai Fountain.',
    },
    {
      number: '03',
      title: 'Business Setup',
      description: 'Trade licence, visa and Ejari support handled by our in-house team.',
    },
    {
      number: '04',
      title: 'All-Inclusive Utilities',
      description: 'DEWA electricity, central AC, high-speed fibre internet and maintenance fully covered.',
    },
    {
      number: '05',
      title: 'Meeting Rooms',
      description: 'A client meeting room and a board room, both furnished and ready to use.',
    },
    {
      number: '06',
      title: '24/7 Access',
      description: 'Secure keycard access, valet parking and a one-minute walk to Burj Khalifa Metro.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 sm:mb-20 max-w-3xl">
          <p className="text-[#C09449] text-xs sm:text-sm tracking-[0.24em] font-medium uppercase">
            WHY US
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#1A1612]">
            Everything your business needs, already in place.
          </h2>
        </div>

        {/* 6-grid layout with minimalist divider lines matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-[#E7DECE] border-t border-b border-[#E2D7C7]">
          {features.map((feature, idx) => {
            // Calculate grid border classes for clean 3x2 grid with internal dividers
            const isRightBorder = idx % 3 !== 2;
            const isBottomBorder = idx < 3;

            return (
              <div
                key={feature.number}
                className={`p-8 sm:p-10 transition-all duration-300 hover:bg-[#F3ECE1]/40 group ${
                  isRightBorder ? 'lg:border-r border-[#E2D7C7]' : ''
                } ${isBottomBorder ? 'lg:border-b border-[#E2D7C7]' : ''} ${
                  idx % 2 === 0 ? 'md:border-r lg:border-r-0' : ''
                }`}
              >
                <span className="font-serif text-sm tracking-widest text-[#B08D4D] block mb-4 group-hover:text-[#885F2E] transition-colors">
                  {feature.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-2xl text-[#1A1612] font-normal mb-3 group-hover:translate-x-0.5 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-[#685F54] text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
