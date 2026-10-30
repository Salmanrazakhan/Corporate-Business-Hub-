import React, { useState } from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/offices';

interface PlansPricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

type Currency = 'AED' | 'USD' | 'EUR' | 'GBP';

const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  AED: { symbol: 'AED', rate: 1 },
  USD: { symbol: '$', rate: 0.272 },
  EUR: { symbol: '€', rate: 0.25 },
  GBP: { symbol: '£', rate: 0.215 },
};

export const PlansPricingSection: React.FC<PlansPricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<Currency>('AED');

  const formatPrice = (priceAED: number) => {
    const { symbol, rate } = CURRENCY_RATES[currency];
    const converted = Math.round(priceAED * rate);
    if (currency === 'AED') {
      return `AED ${priceAED.toLocaleString()}`;
    }
    return `${symbol} ${converted.toLocaleString()}`;
  };

  return (
    <section id="plans" className="py-20 sm:py-28 bg-[#17110C] text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with Currency switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <p className="text-[#C09449] text-xs sm:text-sm tracking-[0.24em] font-medium uppercase">
              WORKSPACE PLANS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] leading-tight">
              Flexible terms. Transparent pricing.
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 text-xs">
            {(['AED', 'USD', 'EUR', 'GBP'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1.5 transition-colors ${
                  currency === c
                    ? 'bg-[#C09449] text-white font-medium'
                    : 'text-[#D4C3B2] hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pricing Cards matching image_a9fecae4.png */}
        {/* 3 Pricing Cards with luxury hover effects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                onClick={() => onSelectPlan(plan)}
                className={`group relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2.5 rounded-none ${
                  isFeatured
                    ? 'bg-[#1D1610] border border-[#C09449] shadow-xl shadow-[#C09449]/15 hover:shadow-2xl hover:shadow-[#C09449]/30 hover:border-[#DEBF86] lg:-translate-y-1'
                    : 'bg-[#18120D] border border-white/10 hover:border-[#C09449] hover:bg-[#1E1711] hover:shadow-2xl hover:shadow-[#C09449]/20'
                }`}
              >
                {/* Subtle top gold highlight line on hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent transition-opacity duration-500 ${
                    isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Top Plan info */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#FAF7F2] font-normal group-hover:text-white transition-colors">
                      {plan.name}
                    </h3>
                    {isFeatured && (
                      <span className="text-[10px] uppercase tracking-widest bg-[#C09449]/20 text-[#DEBF86] border border-[#C09449]/40 px-2 py-0.5">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Expanding gold line on hover */}
                  <div className="h-[2px] w-8 bg-[#C09449]/60 group-hover:w-16 group-hover:bg-[#C09449] transition-all duration-500 ease-out mb-7" />

                  {/* Price */}
                  <div className="mb-10 flex items-baseline gap-2 group-hover:translate-x-0.5 transition-transform">
                    <span className="font-serif text-3xl sm:text-4xl text-[#C09449] font-normal group-hover:text-[#DEBF86] transition-colors">
                      {formatPrice(plan.priceAED)}
                    </span>
                    <span className="text-xs text-[#A89888] font-light">
                      / month
                    </span>
                  </div>

                  {/* Features list matching screenshot */}
                  <ul className="space-y-4 mb-10 text-sm text-[#D4C3B2] font-light">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[#C09449] shrink-0 font-bold">—</span>
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlan(plan);
                    }}
                    className={`w-full py-3.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#B88E44] to-[#C99E52] text-white hover:brightness-110 shadow-md group-hover:shadow-lg group-hover:shadow-[#C09449]/30'
                        : 'border border-white/20 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#17110C] group-hover:border-[#C09449] group-hover:bg-[#C09449] group-hover:text-white'
                    }`}
                  >
                    Get a quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Ejari and terms */}
        <div className="mt-12 text-center text-xs text-[#9E8E7E] font-light">
          All contracts include Ejari registration assistance, official commercial address, and flexible payment terms in 1, 2, or 4 cheques.
        </div>
      </div>
    </section>
  );
};
