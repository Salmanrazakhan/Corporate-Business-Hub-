import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Train,
  CheckCircle2,
  ChevronDown,
  Clock,
  Car,
  Star,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { PricingPlan } from '../data/offices';

interface VisitUsProps {
  selectedPlan: PricingPlan | null;
}

export const VisitUsSection: React.FC<VisitUsProps> = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    officeType: 'Private Office',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        officeType: selectedPlan.name,
      }));
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Full-Width Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-[#C09449] text-xs sm:text-sm tracking-[0.24em] font-medium uppercase">
            VISIT US · DOWNTOWN DUBAI
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#1A1612]">
            Book a private tour.
          </h2>
          <p className="text-[#6D6358] text-base font-light leading-relaxed pt-1">
            Tour our premier <strong>serviced offices and fully furnished offices in Downtown Dubai</strong> at 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai. Our on-site leasing advisory team will tailor a package with flexible payment terms for your business.
          </p>
        </div>

        {/* 2. Balanced 2-Column Row: Location & Address Card (Left) vs. Tour Booking Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Dedicated Location & Address Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 border border-[#E4D9C9] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header with Luxury Badge */}
              <div className="space-y-2 border-b border-[#F0E8DC] pb-5">
                <div className="inline-flex items-center gap-2 bg-[#C09449]/10 text-[#8A6324] px-2.5 py-1 text-xs uppercase tracking-wider font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C09449]" />
                  <span>A-Grade Commercial Tower</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1612] font-normal">
                  Corporate Business Hub
                </h3>
                <p className="text-sm text-[#7D7368] font-light">
                  1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
                </p>
              </div>

              {/* Structured Key Details List */}
              <div className="space-y-4 pt-1">
                {/* Exact Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8DECE] flex items-center justify-center shrink-0 mt-0.5 text-[#C09449]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider font-medium text-[#C09449] block">
                      Exact Address &amp; Suite
                    </span>
                    <p className="text-sm text-[#1A1612] font-semibold leading-snug">
                      1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
                    </p>
                    <p className="text-xs text-[#7A6F62] font-light">
                      Sheikh Zayed Road, Downtown Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Metro Connection */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8DECE] flex items-center justify-center shrink-0 mt-0.5 text-[#C09449]">
                    <Train className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider font-medium text-[#C09449] block">
                      Metro Connection
                    </span>
                    <p className="text-sm text-[#1A1612] font-normal leading-snug">
                      1-Minute Walk to Burj Khalifa / Dubai Mall Metro
                    </p>
                    <p className="text-xs text-[#7A6F62] font-light">
                      Direct covered air-conditioned footbridge connected directly to the building
                    </p>
                  </div>
                </div>

                {/* Operating Hours & Access */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8DECE] flex items-center justify-center shrink-0 mt-0.5 text-[#C09449]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider font-medium text-[#C09449] block">
                      Access &amp; Operating Hours
                    </span>
                    <p className="text-sm text-[#1A1612] font-normal leading-snug">
                      24/7 Keycard &amp; Biometric Access for Tenants
                    </p>
                    <p className="text-xs text-[#7A6F62] font-light">
                      Reception &amp; Leasing Desk: Monday &ndash; Saturday, 8:30 AM &ndash; 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Visitor Parking */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E8DECE] flex items-center justify-center shrink-0 mt-0.5 text-[#C09449]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider font-medium text-[#C09449] block">
                      Client &amp; Guest Parking
                    </span>
                    <p className="text-sm text-[#1A1612] font-normal leading-snug">
                      Complimentary Valet Parking Available
                    </p>
                    <p className="text-xs text-[#7A6F62] font-light">
                      Dedicated basement parking bays and hotel valet drop-off
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & Verified Rating Bar */}
            <div className="pt-6 mt-6 border-t border-[#F0E8DC] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                <a
                  href="tel:+971527601343"
                  className="flex items-center gap-2 text-[#1A1612] hover:text-[#C09449] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C09449]" />
                  <span>+971 52 760 1343</span>
                </a>

                <a
                  href="mailto:admin@cbh.ae"
                  className="flex items-center gap-2 text-[#6A5F53] hover:text-[#C09449] font-light transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C09449]" />
                  <span>admin@cbh.ae</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8A7F73] pt-1">
                <span className="text-[#8A7F73]">Sheikh Zayed Road &middot; Downtown Dubai</span>
                <a
                  href="https://g.page/r/CZjnJdc4o_NpEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#786D60] hover:text-[#C09449] transition-colors font-medium flex items-center gap-1"
                >
                  <Star className="w-3.5 h-3.5 fill-[#E3A008] text-[#E3A008]" />
                  <span>Rated 4.9 on Google (Reviews)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tour Booking Form Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 border border-[#E4D9C9] shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-14 h-14 rounded-full bg-[#C09449]/15 flex items-center justify-center mx-auto text-[#C09449]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1612]">Viewing Request Confirmed</h3>
                <p className="text-sm text-[#665E55] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. We have registered your inquiry for <strong>{formData.officeType}</strong>. A dedicated workspace consultant will contact you within 1 business hour to finalize your tour time.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-[#C09449] hover:underline font-medium cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Form Header */}
                <div className="space-y-2 border-b border-[#F0E8DC] pb-5">
                  <div className="inline-flex items-center gap-2 bg-[#C09449]/10 text-[#8A6324] px-2.5 py-1 text-xs uppercase tracking-wider font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C09449]" />
                    <span>Free Consultation &amp; Tour</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1612] font-normal">
                    Get Availability &amp; Pricing
                  </h3>
                  <p className="text-sm text-[#7D7368] font-light">
                    Tell us what you need and our leasing desk will prepare an all-inclusive proposal.
                  </p>
                </div>

                {selectedPlan && (
                  <div className="text-xs bg-[#FAF7F2] p-3 border border-[#E4D9C9] text-[#7A6F62] flex items-center justify-between">
                    <span>Selected Plan: <strong className="text-[#1A1612]">{selectedPlan.name}</strong></span>
                    <span className="text-[#C09449] font-medium">AED {selectedPlan.priceAED.toLocaleString()} / mo</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#8A7F73] font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF7F2]/50 border-b border-[#D8CEBF] py-2.5 px-1 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#8A7F73] font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#FAF7F2]/50 border-b border-[#D8CEBF] py-2.5 px-1 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#8A7F73] font-medium">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF7F2]/50 border-b border-[#D8CEBF] py-2.5 px-1 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider text-[#8A7F73] font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2]/50 border-b border-[#D8CEBF] py-2.5 px-1 text-sm text-[#1A1612] placeholder-[#9C9286] focus:border-[#C09449] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Office Type Dropdown - 3 exact options */}
                  <div className="space-y-1 relative pt-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#8A7F73] font-medium">
                      Select Space Type
                    </label>
                    <select
                      value={formData.officeType}
                      onChange={(e) => setFormData({ ...formData, officeType: e.target.value })}
                      className="w-full appearance-none bg-[#FAF7F2]/50 border-b border-[#D8CEBF] py-2.5 px-1 text-sm text-[#1A1612] focus:border-[#C09449] focus:bg-white focus:outline-none pr-8 cursor-pointer"
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
                    className="w-full bg-[#18120D] hover:bg-black text-[#DEBF86] hover:text-white py-4 text-sm tracking-wide font-medium transition-all duration-200 mt-4 disabled:opacity-75 cursor-pointer shadow-sm"
                  >
                    {loading ? 'Submitting Request...' : 'Get Availability & Pricing'}
                  </button>

                  <div className="pt-2 text-center text-xs text-[#8A7F73] font-light flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C09449]" />
                    <span>Response within 1 business hour &middot; Zero agency commission &middot; Direct with landlord</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* 3. Wide Panoramic Interactive Google Map Container */}
        <div className="bg-white border border-[#E4D9C9] shadow-sm overflow-hidden">
          {/* Map Top Status Bar */}
          <div className="px-6 py-3.5 bg-[#FAF7F2] border-b border-[#E8DECE] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#1A1612] font-medium">
              <MapPin className="w-4 h-4 text-[#C09449]" />
              <span>Interactive Location Map &middot; 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai</span>
            </div>
            <div className="flex items-center gap-4 text-[#7A6F62] font-light">
              <span className="flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-[#C09449]" />
                Direct Burj Khalifa / Dubai Mall Metro Access
              </span>
              <span className="hidden sm:inline text-[#D8CEBF]">&middot;</span>
              <span className="hidden sm:inline">Sheikh Zayed Road, Downtown Dubai</span>
            </div>
          </div>

          {/* Map Iframe */}
          <div className="relative w-full h-72 sm:h-80 md:h-96 bg-[#E8DECE]">
            <iframe
              title="Corporate Business Hub 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai Google Map"
              src="https://maps.google.com/maps?q=1601,+48+Burj+Gate,+Sofitel+Downtown+Dubai,+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
