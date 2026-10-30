import React, { useState } from 'react';
import { OfficeItem, SERVICED_OFFICES_DATA } from '../data/offices';
import { Play, Eye, Video, CheckCircle, Sparkles } from 'lucide-react';

interface OfficesGalleryProps {
  onSelectOffice: (office: OfficeItem) => void;
  onOpenBooking: () => void;
  onPlayVideo: (videoUrl: string, title: string) => void;
}

export const OfficesGallerySection: React.FC<OfficesGalleryProps> = ({
  onSelectOffice,
  onOpenBooking,
  onPlayVideo,
}) => {
  const [filter, setFilter] = useState<'all' | 'video' | 'serviced' | 'furnished' | 'reception'>('all');

  const filteredOffices = SERVICED_OFFICES_DATA.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'video') return Boolean(item.videoUrl);
    return item.category === filter;
  });

  // Top 2 prominent cards (as in reference layout) and the rest in responsive grid
  const topTwo = filteredOffices.slice(0, 2);
  const remaining = filteredOffices.slice(2);

  return (
    <section id="offices" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with Title and Book a Viewing button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[#C09449] text-xs sm:text-sm tracking-[0.22em] font-medium uppercase">
                SERVICED OFFICES &amp; FULLY FURNISHED OFFICES IN DOWNTOWN DUBAI
              </span>
              <span className="text-[11px] bg-[#C09449]/15 text-[#8A6324] px-2 py-0.5 rounded-sm font-medium">
                48 Burj Gate
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-tight">
              Furnished and ready to move in.
            </h2>
            <p className="text-sm text-[#6E6357] font-light max-w-xl">
              Fully fitted private serviced offices and fully furnished offices inside 48 Burj Gate, Downtown Dubai. High-speed fibre, ergonomic executive furnishings, and floor-to-ceiling city views.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                onPlayVideo(
                  '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
                  'Executive Burj View Suite - Video Tour'
                );
              }}
              className="flex items-center gap-2 bg-[#1A1612] hover:bg-black text-[#DEBF86] border border-[#DEBF86]/40 text-xs uppercase tracking-widest px-5 py-3 transition-colors duration-200 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-[#DEBF86]" />
              <span>Watch Video Tours</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="border border-[#1A1612]/20 hover:border-[#1A1612] bg-white hover:bg-[#1A1612] hover:text-white text-[#1A1612] text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-200"
            >
              Book a viewing
            </button>
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8DECE] text-xs sm:text-sm">
          {[
            { id: 'all', label: 'All Offices' },
            { id: 'video', label: '🎬 With Video Walkthrough' },
            { id: 'serviced', label: 'Serviced Offices' },
            { id: 'furnished', label: 'Fully Furnished Offices' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 transition-all font-light ${
                filter === tab.id
                  ? 'border-b-2 border-[#C09449] text-[#1A1612] font-medium'
                  : 'text-[#7B7064] hover:text-[#1A1612]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Top 2 prominent cards */}
        {topTwo.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:gap-8">
            {topTwo.map((office) => (
              <div
                key={office.id}
                onClick={() => onSelectOffice(office)}
                className="group relative h-[380px] sm:h-[480px] overflow-hidden cursor-pointer bg-[#201A15] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#C09449]/40"
              >
                {/* Luminous gold top border beam on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Background Image with hover zoom */}
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Subtle luxury vignette & dark bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                {/* Badges row at top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  {office.videoUrl ? (
                    <span className="bg-[#C09449] text-white text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5 shadow-md">
                      <Video className="w-3 h-3" />
                      <span>Video Tour Available</span>
                    </span>
                  ) : <span />}

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-md text-white text-xs px-3.5 py-1.5 flex items-center gap-1.5 border border-white/20 transform translate-y-1 group-hover:translate-y-0">
                    <Eye className="w-3.5 h-3.5 text-[#DEBF86]" />
                    <span>View Office</span>
                  </div>
                </div>

                {/* Play Button Overlay if Video is available */}
                {office.videoUrl && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayVideo(office.videoUrl!, office.title);
                    }}
                    className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 hover:bg-[#C09449] text-white flex items-center justify-center border border-white/40 shadow-2xl transition-all duration-300 hover:scale-110">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>
                )}

                {/* Content Overlay at bottom - ONLY showing the clean title phrase with hover effect */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-white group-hover:text-[#DEBF86] transition-colors duration-300">
                      {office.title}
                    </h3>
                  </div>

                  {/* Gold accent line (expands on hover) */}
                  <div className="flex items-center shrink-0">
                    <div className="h-[2px] w-8 bg-[#C09449]/70 group-hover:w-16 group-hover:bg-[#DEBF86] transition-all duration-400 ease-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Remaining Serviced Offices in responsive grid */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 mt-6">
            {remaining.map((office) => (
              <div
                key={office.id}
                onClick={() => onSelectOffice(office)}
                className="group relative h-[320px] sm:h-[360px] overflow-hidden cursor-pointer bg-[#201A15] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#C09449]/40"
              >
                {/* Luminous gold top border beam on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  {office.videoUrl ? (
                    <span className="bg-[#C09449] text-white text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 flex items-center gap-1 shadow-md">
                      <Video className="w-2.5 h-2.5" />
                      <span>Video</span>
                    </span>
                  ) : <span />}

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 flex items-center gap-1 border border-white/20 transform translate-y-1 group-hover:translate-y-0">
                    <Eye className="w-3 h-3 text-[#DEBF86]" />
                    <span>View</span>
                  </div>
                </div>

                {/* Bottom Overlay - ONLY showing the clean title phrase with hover effect */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal tracking-wide text-white group-hover:text-[#DEBF86] transition-colors duration-300 leading-snug">
                      {office.title}
                    </h3>
                  </div>

                  {/* Gold accent line */}
                  <div className="flex items-center shrink-0">
                    <div className="h-[2px] w-6 bg-[#C09449]/70 group-hover:w-14 group-hover:bg-[#DEBF86] transition-all duration-400 ease-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Walkthrough Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#18120D] text-white border border-[#C09449]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs text-[#C09449] tracking-widest uppercase font-medium flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Real Video Walkthroughs Available
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              Take a virtual step inside our Executive Suites &amp; Serviced Offices
            </h3>
            <p className="text-xs sm:text-sm text-[#C8B7A5] font-light max-w-xl">
              Watch authentic video walkthroughs showing move-in ready desks, leather sofas, world map feature wall, and direct views toward Burj Khalifa.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() =>
                onPlayVideo(
                  '/assets/aistudio/Serviced_office_video_view_01_a109e61f.mp4',
                  'Designer Serviced Office - Walkthrough Tour'
                )
              }
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Designer Suite Tour</span>
            </button>
            <button
              onClick={() =>
                onPlayVideo(
                  '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
                  'Executive Burj View Suite - Walkthrough Tour'
                )
              }
              className="bg-[#C09449] hover:bg-[#AA7E37] text-white text-xs uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 transition-colors font-medium shadow-md cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Burj View Suite Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
