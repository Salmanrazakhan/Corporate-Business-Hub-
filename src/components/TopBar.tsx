import React from 'react';
import { MapPin, Train, Clock, Phone } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#140F0B] text-[#D8C7B5] text-xs py-2 px-4 border-b border-white/5 tracking-wide hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-light">
        <div className="flex items-center space-x-7">
          <div className="flex items-center gap-1.5 text-[#D8C7B5]">
            <MapPin className="w-3.5 h-3.5 text-[#C09449]" />
            <span>1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Train className="w-3.5 h-3.5 text-[#C09449]" />
            <span>1 min walk to Burj Khalifa Metro</span>
          </div>
          <a
            href="https://g.page/r/CZjnJdc4o_NpEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#DEBF86] transition-colors text-[#DEBF86]"
          >
            <span>★ 4.9 on Google</span>
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="tel:+971527601343"
            className="flex items-center gap-1.5 hover:text-[#C09449] transition-colors text-white font-normal"
          >
            <Phone className="w-3.5 h-3.5 text-[#C09449]" />
            <span>+971 52 760 1343</span>
          </a>
        </div>
      </div>
    </div>
  );
};
