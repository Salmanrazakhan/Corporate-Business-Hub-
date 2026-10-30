import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DECE] py-10 text-center text-xs text-[#7B7064]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#5A5045]">
          <a href="#why-us" className="hover:text-[#C09449] transition-colors">Why us</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#offices" className="hover:text-[#C09449] transition-colors">Offices</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#spaces" className="hover:text-[#C09449] transition-colors">Spaces</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#plans" className="hover:text-[#C09449] transition-colors">Plans</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#reviews" className="hover:text-[#C09449] transition-colors">Reviews</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#faq" className="hover:text-[#C09449] transition-colors">FAQ</a>
          <span className="text-[#D8CEBF]">·</span>
          <a href="#visit" className="hover:text-[#C09449] transition-colors">Visit</a>
        </div>

        <p className="font-light text-[#8A7E72] pt-2">
          &copy; 2026 Corporate Business Hub &middot; Downtown Dubai
        </p>

        <p className="text-[11px] text-[#A69A8E]">
          1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
        </p>
      </div>
    </footer>
  );
};
