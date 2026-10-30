import React, { useState, useEffect } from 'react';
import { X, MapPin, Users, Maximize2, Sparkles, Play, Video } from 'lucide-react';
import { OfficeItem } from '../data/offices';

interface OfficeDetailModalProps {
  office: OfficeItem | null;
  onClose: () => void;
  onRequestQuote: (officeTitle: string) => void;
  onPlayVideo?: (videoUrl: string, title: string) => void;
}

export const OfficeDetailModal: React.FC<OfficeDetailModalProps> = ({
  office,
  onClose,
  onRequestQuote,
  onPlayVideo,
}) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (office) {
      setActiveImage(office.image);
    }
  }, [office]);

  if (!office) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF7F2] text-[#1A1612] max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E2D6C6] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of the office */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-black">
          <img
            src={activeImage || office.image}
            alt={office.title}
            className="w-full h-full object-cover object-center transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

          {/* Video watch trigger button over image if video is available */}
          {office.videoUrl && onPlayVideo && (
            <button
              onClick={() => {
                onPlayVideo(office.videoUrl!, office.title);
              }}
              className="absolute top-4 left-4 bg-[#C09449] hover:bg-[#A97C38] text-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Video Tour</span>
            </button>
          )}

          <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
            <div className="space-y-0.5">
              <span className="text-[#DEBF86] text-xs uppercase tracking-widest font-medium">
                {office.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {office.title}
              </h2>
              <p className="text-sm text-[#D8C7B5] font-light">{office.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail gallery if multiple views available */}
        {office.gallery && office.gallery.length > 1 && (
          <div className="px-6 py-2.5 bg-[#F0E8DC] border-b border-[#E2D6C6] flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wider text-[#7C7063] font-medium">Views:</span>
            {office.gallery.map((imgUrl, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(imgUrl)}
                className={`w-14 h-10 border overflow-hidden transition-all ${
                  activeImage === imgUrl ? 'border-[#C09449] ring-2 ring-[#C09449]/40' : 'border-neutral-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#E4D9C9] text-xs">
            {office.capacity && (
              <div>
                <span className="text-[#8A7E72] block uppercase tracking-wider text-[10px]">Capacity</span>
                <span className="font-medium text-[#1A1612] flex items-center gap-1 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-[#C09449]" /> {office.capacity}
                </span>
              </div>
            )}
            {office.size && (
              <div>
                <span className="text-[#8A7E72] block uppercase tracking-wider text-[10px]">Area</span>
                <span className="font-medium text-[#1A1612] flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C09449]" /> {office.size}
                </span>
              </div>
            )}
            {office.view && (
              <div className="col-span-2">
                <span className="text-[#8A7E72] block uppercase tracking-wider text-[10px]">Skyline View</span>
                <span className="font-medium text-[#1A1612] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C09449]" /> {office.view}
                </span>
              </div>
            )}
          </div>

          {/* Location details */}
          <div className="bg-[#F3ECE1] p-5 text-xs text-[#6B6054] space-y-2 border border-[#E2D6C6]">
            <span className="font-medium text-[#1A1612] text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C09449]" /> 1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
            </span>
            <p className="leading-relaxed">
              Prime private office of 300 Sq Ft, fully furnished and move-in ready. Includes covered air-conditioned connection to Burj Khalifa / Dubai Mall Metro Station, free valet parking, and immediate Ejari &amp; DED commercial license registration.
            </p>
          </div>

          {/* CTA Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              {office.startingPrice && (
                <div>
                  <span className="text-[11px] text-[#8A7E72] block">Starting from</span>
                  <span className="font-serif text-2xl text-[#C09449] font-normal">{office.startingPrice}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto border border-[#1A1612]/20 hover:border-[#1A1612] px-5 py-3 text-xs uppercase tracking-wider text-[#1A1612]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onRequestQuote(office.title);
                  onClose();
                }}
                className="w-1/2 sm:w-auto bg-[#1A1612] hover:bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Inquire For This Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
