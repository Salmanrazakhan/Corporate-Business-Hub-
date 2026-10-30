import React, { useState } from 'react';
import {
  GOOGLE_REVIEWS_DATA,
  GOOGLE_REVIEWS_URL,
  GoogleReview,
} from '../data/reviews';
import { Star, ExternalLink, CheckCircle2, ThumbsUp } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredReviews = GOOGLE_REVIEWS_DATA.filter((rev) => {
    if (filter === 'All') return true;
    return rev.serviceCategory === filter;
  });

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1612] border-b border-[#E2D6C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[#C09449] text-xs sm:text-sm tracking-[0.24em] font-medium uppercase">
                CLIENT TESTIMONIALS &amp; GOOGLE REVIEWS
              </span>
              <span className="text-[11px] bg-[#C09449]/15 text-[#8A6324] px-2 py-0.5 rounded-sm font-medium">
                Verified Feedback
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-tight">
              Trusted by leaders in Downtown Dubai.
            </h2>
            <p className="text-sm text-[#6E6357] font-light max-w-xl">
              Discover why multinational enterprises, financial executives, and growing businesses choose Corporate Business Hub at 48 Burj Gate for their serviced offices and fully furnished suites.
            </p>
          </div>

          {/* Google 4.9 Score Box & Direct Review CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-5 sm:p-6 border border-[#E4D9C9] shadow-sm">
            <div className="flex items-center gap-3.5 pr-4 sm:border-r border-[#E8DECE]">
              {/* Google 4-color SVG Logo */}
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8DECE]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold text-[#1A1612]">4.9</span>
                  <div className="flex items-center gap-0.5 text-[#E3A008]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E3A008] text-[#E3A008]" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-[#786D60] block font-light">
                  Google Verified Rating · 48 Burj Gate
                </span>
              </div>
            </div>

            {/* Direct Link to Google Review Form */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1A1612] hover:bg-black text-[#DEBF86] border border-[#DEBF86]/40 px-5 py-3 text-xs uppercase tracking-widest font-medium transition-all hover:scale-102 cursor-pointer shadow-sm"
            >
              <span>Write a Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8DECE] text-xs sm:text-sm">
          {['All', 'Serviced Office', 'Fully Furnished Office', 'Executive Suite'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 transition-all font-light ${
                filter === cat
                  ? 'border-b-2 border-[#C09449] text-[#1A1612] font-medium'
                  : 'text-[#7B7064] hover:text-[#1A1612]'
              }`}
            >
              {cat === 'All' ? 'All Reviews' : cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid with luxury hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white p-7 sm:p-8 border border-[#E4D9C9] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Luminous top gold border beam on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header row: Google badge & Stars & Relative Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 text-[#E3A008]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#E3A008] text-[#E3A008]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] text-[#9E9080] font-light">
                    {review.relativeTime}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-sm text-[#4A4035] font-light leading-relaxed mb-6 group-hover:text-[#1A1612] transition-colors">
                  &ldquo;{review.comment}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#F0E8DC] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-medium text-xs tracking-wider shadow-sm`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-[#1A1612] font-medium leading-tight">
                      {review.authorName}
                    </h3>
                    <p className="text-[11px] text-[#7C7164] font-light line-clamp-1">
                      {review.authorRole} {review.company ? `· ${review.company}` : ''}
                    </p>
                  </div>
                </div>

                {/* Google Verification Check */}
                <div
                  className="flex items-center gap-1 text-[11px] text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full shrink-0"
                  title="Verified Google Review"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                  <span className="font-medium text-[10px]">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with link to Google Review Page */}
        <div className="mt-12 p-6 sm:p-8 bg-[#18120D] text-white border border-[#C09449]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#DEBF86] uppercase tracking-wider font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#C09449]" />
              <span>Direct Link to Google Business Profile</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              Have you worked from Corporate Business Hub?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8B7A5] font-light max-w-xl">
              Share your experience at 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai. Your feedback helps professionals discover premium workspaces in Dubai.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C09449] hover:bg-[#AA7E37] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-medium transition-all shadow-md"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
