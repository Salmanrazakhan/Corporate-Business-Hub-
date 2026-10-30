import React from 'react';

export const WhatYouGetBanner: React.FC = () => {
  return (
    <section className="bg-[#17110C] text-[#FAF7F2] py-8 sm:py-10 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[#C09449] text-xs tracking-[0.24em] font-medium uppercase block">
              WHAT YOU GET
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base text-[#D4C3B2] font-light">
              <span className="flex items-center gap-2">
                <span className="text-[#C09449]">—</span> High-speed internet
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C09449]">—</span> 24/7 access
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C09449]">—</span> A-grade building
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#C09449]">—</span> 1 minute walk to Burj Khalifa Metro
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="#plans"
              className="inline-block border border-white/20 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#17110C] text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-200"
            >
              See plans & pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
