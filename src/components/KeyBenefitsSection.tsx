import React from 'react';
import { MapPin, Wifi, Building2, ShieldCheck, Clock, Users } from 'lucide-react';

interface KeyBenefitsSectionProps {
  onOpenBooking?: () => void;
}

export const KeyBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({ onOpenBooking }) => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Prime Location',
      highlight: 'Downtown Dubai',
      description: '1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai. Direct 1-min covered metro connection.',
    },
    {
      icon: Wifi,
      title: 'High-speed Internet',
      highlight: 'Ultra-Fast Fibre',
      description: 'Dedicated enterprise-grade optic fibre internet with dual redundancy and zero downtime.',
    },
    {
      icon: Building2,
      title: 'Professional Address',
      highlight: 'Prestigious Corporate Hub',
      description: 'Compliant registered commercial address ideal for DED trade licence, Ejari, and international prestige.',
    },
    {
      icon: Clock,
      title: '24/7 Secure Access',
      highlight: 'Round-The-Clock',
      description: 'Individual keycard and biometric security allowing seamless access whenever your business needs it.',
    },
    {
      icon: Users,
      title: 'Meeting & Board Rooms',
      highlight: 'Client Ready',
      description: 'Fully equipped luxury board rooms and client lounges with HD presentation screens and conferencing.',
    },
    {
      icon: ShieldCheck,
      title: 'All-Inclusive Services',
      highlight: 'Zero Hidden Costs',
      description: 'DEWA, central AC, reception concierge, cleaning, and daily facility management fully covered.',
    },
  ];

  return (
    <section className="relative z-20 -mt-2 bg-[#FAF7F2] border-b border-[#E8DEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Section Subheading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-[#C09449] text-xs tracking-[0.24em] font-medium uppercase">
            WHY CLIENTS CHOOSE US
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1612] font-normal">
            Designed for focused productivity &amp; prestige
          </h2>
          <p className="text-xs sm:text-sm text-[#7D7368] font-light">
            Every office comes turnkey ready with comprehensive enterprise infrastructure in place.
          </p>
        </div>

        {/* 6-Item Grid with small, elegant icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-7 border border-[#E7DECE] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Icon & Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E4D9C9] group-hover:border-[#C09449] group-hover:bg-[#1A1612] text-[#C09449] group-hover:text-[#DEBF86] flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-medium text-[#9E7333] bg-[#C09449]/10 px-2.5 py-0.5 rounded-xs tracking-wider uppercase">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl text-[#1A1612] font-medium leading-snug group-hover:text-[#9E7333] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A6055] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA strip inside benefits */}
        {onOpenBooking && (
          <div className="mt-10 pt-6 border-t border-[#E8DEC0]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6F62]">
            <span className="font-light text-center sm:text-left">
              Looking for a tailored office configuration or immediate move-in?
            </span>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7333] hover:text-[#1A1612] font-semibold border-b border-[#C09449] pb-0.5 transition-colors cursor-pointer"
            >
              <span>Schedule a Private Viewing Today</span>
              <span>&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
