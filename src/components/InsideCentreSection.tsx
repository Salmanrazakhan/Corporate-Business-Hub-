import React, { useState } from 'react';
import { InsideRoomItem, MEETING_ROOMS_DATA } from '../data/offices';
import { Eye, Users, Monitor, Sparkles } from 'lucide-react';

interface InsideCentreSectionProps {
  onSelectRoom: (room: InsideRoomItem) => void;
  onOpenBooking: () => void;
}

export const InsideCentreSection: React.FC<InsideCentreSectionProps> = ({
  onSelectRoom,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'all' | 'boardroom' | 'meeting' | 'lounge'>('all');

  const filteredRooms = MEETING_ROOMS_DATA.filter((r) => {
    if (filter === 'all') return true;
    return r.category === filter;
  });

  return (
    <section id="spaces" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[#C09449] text-xs sm:text-sm tracking-[0.24em] font-medium uppercase">
                MEETING ROOMS & BOARD ROOMS
              </span>
              <span className="text-[11px] bg-[#C09449]/15 text-[#8A6324] px-2 py-0.5 rounded-sm font-medium">
                Downtown Dubai Hub
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-tight">
              The rooms, as you&apos;ll find them.
            </h2>
            <p className="text-sm text-[#6E6357] font-light max-w-xl">
              Equipped with smart UHD video conferencing screens, executive leather seating, acoustic privacy glass, and panoramic views of Burj Khalifa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="border border-[#1A1612]/20 hover:border-[#1A1612] bg-white hover:bg-[#1A1612] hover:text-white text-[#1A1612] text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-200"
            >
              Book a viewing
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E8DECE] text-xs sm:text-sm">
          {[
            { id: 'all', label: 'All Meeting & Board Spaces' },
            { id: 'boardroom', label: 'Board Rooms' },
            { id: 'meeting', label: 'Client Meeting Rooms' },
            { id: 'lounge', label: 'Executive Lounges' },
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

        {/* Showcase Grid of actual user meeting room photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room, idx) => {
            // First item spans 2 columns on large screen if 5 items for visual balance
            const isFeatured = idx === 0 && filteredRooms.length % 2 !== 0;

            return (
              <div
                key={room.id}
                onClick={() => onSelectRoom(room)}
                className={`group relative h-[360px] sm:h-[420px] overflow-hidden cursor-pointer bg-[#201A15] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#C09449]/40 ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Luminous gold top border beam on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C09449] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Real photo from premises */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/60 text-[#DEBF86] text-[11px] font-light uppercase tracking-wider px-2.5 py-1 backdrop-blur-md">
                    {room.categoryLabel}
                  </span>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/15 backdrop-blur-md text-white text-xs px-3 py-1 flex items-center gap-1.5 border border-white/20">
                    <Eye className="w-3.5 h-3.5 text-[#DEBF86]" />
                    <span>Explore Space</span>
                  </div>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between">
                  <div className="space-y-1.5 text-white max-w-[85%]">
                    <div className="flex items-center gap-2 text-xs text-[#DEBF86]">
                      <Users className="w-3.5 h-3.5" />
                      <span>{room.capacity}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-white group-hover:text-[#F6ECE0] transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-sm text-[#D4C3B2] font-light line-clamp-1">
                      {room.subtitle}
                    </p>
                  </div>

                  {/* Gold line expanding on hover */}
                  <div className="flex items-center shrink-0">
                    <div className="h-[2px] w-6 bg-[#C09449]/70 group-hover:w-14 group-hover:bg-[#C09449] transition-all duration-400 ease-out" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
