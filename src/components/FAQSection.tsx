import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/faq';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  // Set first item open by default for immediate discoverability
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQ_DATA.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const categories = ['All', 'Offices', 'Location', 'Licensing & Ejari', 'Services'];

  const filteredItems = FAQ_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F5EFEB] text-[#1A1612] border-t border-[#E8DEC0]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#C09449]/15 text-[#8A6324] px-3 py-1 rounded-sm text-xs tracking-[0.2em] font-medium uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#C09449]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-tight">
            Common Questions
          </h2>

          <p className="text-sm sm:text-base text-[#6E6357] font-light leading-relaxed">
            Find immediate answers regarding our serviced offices, fully furnished spaces, Ejari licensing, amenities, and prime Downtown Dubai address.
          </p>

          {/* Quick controls: Category filter & Expand/Collapse */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 transition-all rounded-sm cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1A1612] text-[#DEBF86] font-medium shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#6B5F52] border border-[#E4D9C9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs text-[#8A7E72]">
            <button
              onClick={expandAll}
              className="hover:text-[#C09449] underline decoration-[#C09449]/40 underline-offset-4 transition-colors cursor-pointer"
            >
              Expand all
            </button>
            <span>&middot;</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#C09449] underline decoration-[#C09449]/40 underline-offset-4 transition-colors cursor-pointer"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredItems.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`transition-all duration-300 border bg-white shadow-xs ${
                  isOpen
                    ? 'border-[#C09449]/60 shadow-md ring-1 ring-[#C09449]/20'
                    : 'border-[#E4D9C9] hover:border-[#D1C3B2]'
                }`}
              >
                <h3>
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="font-mono text-xs font-semibold text-[#C09449] mt-1 shrink-0">
                        {item.number}
                      </span>
                      <span
                        className={`text-base sm:text-lg font-serif font-normal transition-colors leading-snug ${
                          isOpen
                            ? 'text-[#1A1612]'
                            : 'text-[#2C241D] group-hover:text-[#C09449]'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#1A1612] text-[#DEBF86] rotate-180'
                          : 'bg-[#FAF7F2] text-[#7B7064] group-hover:bg-[#E8DECE] group-hover:text-[#1A1612]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 sm:pl-14 text-sm sm:text-base text-[#5A5044] font-light leading-relaxed border-t border-[#F5EFEB]">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help & Contact Prompt */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#E4D9C9] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif text-lg sm:text-xl text-[#1A1612]">
              Have a specific requirement or custom team layout?
            </h4>
            <p className="text-xs sm:text-sm text-[#7A6F62] font-light">
              Speak directly with our leasing advisory desk at 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/971527601343?text=Hello%20Corporate%20Business%20Hub%2C%20I%20have%20a%20question%20regarding%20serviced%20offices%20at%2048%20Burj%20Gate%20Downtown%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+971527601343"
              className="inline-flex items-center gap-2 bg-[#1A1612] hover:bg-black text-[#DEBF86] border border-[#DEBF86]/30 px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C09449]" />
              <span>+971 52 760 1343</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
