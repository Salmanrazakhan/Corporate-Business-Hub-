import React, { useState } from 'react';
import { Building2, Wifi, Clock, CheckCircle2, ChevronDown, Video, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onOfficeSelect?: (officeType: string) => void;
  onOpenBooking?: () => void;
  onWatchVideo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onWatchVideo,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    officeType: 'Fully Furnished Office',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center bg-[#17120D] overflow-hidden">
      {/* Background image: Authentic Downtown Dubai Burj view & executive workspace */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Serviced_office_02_d020e619.jpeg"
          alt="Corporate Business Hub 48 Burj Gate Dubai"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Warm luxury overlays matching the reference layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120D] via-[#1E1610]/85 to-[#1A130E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140F0B] via-transparent to-[#140F0B]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle & Value Badges */}
          <div className="lg:col-span-7 text-white space-y-7">
            <div className="inline-block">
              <span className="text-[#C09449] text-xs sm:text-sm tracking-[0.22em] font-medium uppercase">
                SERVICED OFFICES &amp; FULLY FURNISHED OFFICES · DOWNTOWN DUBAI
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal leading-[1.12] tracking-tight">
              Premium serviced offices &amp; fully furnished offices with the city at your feet.
            </h1>

            <p className="text-[#D8C7B5] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Move-in ready serviced offices and fully furnished offices at 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai. Explore office sizes and flexible rental options in Downtown Dubai.
            </p>

            {/* High-Contrast Primary CTA + Supporting Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-[#FAF7F2] hover:bg-white text-[#17120D] px-7 py-3.5 text-sm tracking-wide font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer ring-2 ring-[#C09449] hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-[#C09449]" />
                <span>Book a Private Tour</span>
              </button>

              <a
                href="#plans"
                className="bg-[#C09449] hover:bg-[#AA7E37] text-white px-6 py-3.5 text-sm tracking-wide font-medium shadow-sm transition-all duration-200"
              >
                View Plans &amp; Pricing
              </a>

              <a
                href="#offices"
                className="border border-white/25 bg-white/5 hover:bg-white/10 text-[#FAF7F2] px-6 py-3.5 text-sm tracking-wide font-medium transition-all duration-200"
              >
                Explore Offices
              </a>

              {onWatchVideo && (
                <button
                  type="button"
                  onClick={onWatchVideo}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#DEBF86] border border-[#DEBF86]/40 hover:border-[#DEBF86] bg-black/40 px-5 py-3.5 transition-colors cursor-pointer"
                >
                  <Video className="w-3.5 h-3.5 text-[#DEBF86]" />
                  <span>Video Tours</span>
                </button>
              )}
            </div>

            {/* Bottom 3 Badges matching screenshot */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs sm:text-sm text-[#D8C7B5]">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#C09449]" />
                <span className="font-light">A-Grade Building</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-[#C09449]" />
                <span className="font-light">High-Speed Internet</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C09449]" />
                <span className="font-light">24/7 Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Consultation Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] text-[#1A1612] p-8 sm:p-9 shadow-2xl relative border border-[#EBE3D7]">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#C09449]/15 flex items-center justify-center mx-auto text-[#C09449]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1612]">
                    Thank you, {formData.fullName.split(' ')[0] || 'valued guest'}!
                  </h3>
                  <p className="text-sm text-[#665E55] leading-relaxed max-w-sm mx-auto">
                    We have received your enquiry for <strong>{formData.officeType}</strong>. Our Downtown Dubai office concierge will share availability and custom pricing to your email/phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-[#C09449] hover:underline font-medium uppercase tracking-wider"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1612]">
                      Get a free consultation
                    </h2>
                    <p className="text-xs sm:text-sm text-[#70675E] font-light">
                      Tell us what you need and we&apos;ll share availability.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D8CEBF] py-2 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D8CEBF] py-2 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D8CEBF] py-2 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="tel"
                        required
                        placeholder="Phone (e.g. +971)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D8CEBF] py-2 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Office Type Selection - Only 3 choices requested */}
                  <div className="relative pt-1">
                    <select
                      value={formData.officeType}
                      onChange={(e) => setFormData({ ...formData, officeType: e.target.value })}
                      className="w-full appearance-none bg-transparent border-b border-[#D8CEBF] py-2.5 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none pr-8 cursor-pointer"
                    >
                      <option value="Fully Furnished Office">Fully Furnished Office</option>
                      <option value="Executive Suite">Executive Suite</option>
                      <option value="Private Office">Private Office</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#8C8276] absolute right-2 bottom-3 pointer-events-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1E1712] hover:bg-[#120D09] text-white py-3.5 text-sm tracking-wide font-medium transition-colors duration-200 mt-4 disabled:opacity-70 shadow-md cursor-pointer"
                  >
                    {loading ? 'Checking Availability...' : 'Get Availability & Pricing'}
                  </button>

                  {/* Google Ads conversion trust indicators */}
                  <div className="pt-2 text-[11px] text-[#7A6F62] space-y-1 font-light border-t border-[#EAE1D3]">
                    <div className="flex items-center gap-1.5 text-[#5C5246]">
                      <span className="text-[#C09449] font-bold">✓</span>
                      <span>Direct Landlord Lease &middot; <strong>Zero Agency Commission</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#5C5246]">
                      <span className="text-[#C09449] font-bold">✓</span>
                      <span>Immediate Ejari &amp; DED Commercial License Support</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#887A6A] pt-0.5">
                      <span>⚡ Dedicated concierge response within 15 minutes</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
