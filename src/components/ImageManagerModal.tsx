import React, { useState } from 'react';
import { X, Image as ImageIcon, Check, RefreshCw, Upload, ExternalLink } from 'lucide-react';
import { OfficeItem, InsideRoomItem } from '../data/offices';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateOfficeImage: (id: string, newUrl: string) => void;
  onUpdateRoomImage: (id: string, newUrl: string) => void;
  offices: OfficeItem[];
  rooms: InsideRoomItem[];
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  onUpdateOfficeImage,
  onUpdateRoomImage,
  offices,
  rooms,
}) => {
  const [activeTab, setActiveTab] = useState<'offices' | 'rooms'>('offices');
  const [customUrls, setCustomUrls] = useState<Record<string, string>>({});
  const [savedId, setSavedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyUrl = (id: string, isRoom: boolean) => {
    const url = customUrls[id];
    if (!url) return;
    if (isRoom) {
      onUpdateRoomImage(id, url);
    } else {
      onUpdateOfficeImage(id, url);
    }
    setSavedId(id);
    setTimeout(() => setSavedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF7F2] text-[#1A1612] max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2D6C6] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#8A7E72] hover:text-[#1A1612] p-1.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <span className="text-[#C09449] text-xs uppercase tracking-widest font-medium flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4" /> Custom Image Slot Manager
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1612]">
            Ready for your custom office photos
          </h2>
          <p className="text-xs sm:text-sm text-[#73695F]">
            You can drop images in the chat, send image links, or paste any direct URL here to update cards instantly.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-3 border-b border-[#E2D7C7] mb-6 pb-2 text-xs uppercase tracking-wider font-medium">
          <button
            onClick={() => setActiveTab('offices')}
            className={`pb-2 transition-colors ${
              activeTab === 'offices'
                ? 'border-b-2 border-[#C09449] text-[#1A1612]'
                : 'text-[#8A7E72] hover:text-[#1A1612]'
            }`}
          >
            Office Cards ({offices.length} Slots)
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`pb-2 transition-colors ${
              activeTab === 'rooms'
                ? 'border-b-2 border-[#C09449] text-[#1A1612]'
                : 'text-[#8A7E72] hover:text-[#1A1612]'
            }`}
          >
            Inside Centre Rooms ({rooms.length} Slots)
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto space-y-4 pr-1 flex-1">
          {activeTab === 'offices' &&
            offices.map((office, idx) => (
              <div
                key={office.id}
                className="p-4 bg-white border border-[#E4D9C9] flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="relative w-full sm:w-28 h-20 shrink-0 bg-neutral-200 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5">
                    Slot {idx + 1}
                  </span>
                </div>

                <div className="flex-1 w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base text-[#1A1612] font-medium">
                      {office.title}
                    </h4>
                    <span className="text-[11px] text-[#C09449] uppercase tracking-wider">
                      {office.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A6F62]">{office.subtitle}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="url"
                      placeholder="Paste image URL (e.g. /assets/... or https://...)"
                      value={customUrls[office.id] ?? ''}
                      onChange={(e) =>
                        setCustomUrls({ ...customUrls, [office.id]: e.target.value })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#D8CEBF] px-2.5 py-1.5 text-xs text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                    />
                    <button
                      onClick={() => handleApplyUrl(office.id, false)}
                      className="bg-[#1A1612] hover:bg-black text-white px-3 py-1.5 text-xs shrink-0 flex items-center gap-1 transition-colors"
                    >
                      {savedId === office.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Applied</span>
                        </>
                      ) : (
                        <span>Update</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 'rooms' &&
            rooms.map((room, idx) => (
              <div
                key={room.id}
                className="p-4 bg-white border border-[#E4D9C9] flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="relative w-full sm:w-28 h-20 shrink-0 bg-neutral-200 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5">
                    Room {idx + 1}
                  </span>
                </div>

                <div className="flex-1 w-full space-y-1">
                  <h4 className="font-serif text-base text-[#1A1612] font-medium">
                    {room.title}
                  </h4>
                  <p className="text-xs text-[#7A6F62]">{room.subtitle}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="url"
                      placeholder="Paste image URL for this room..."
                      value={customUrls[room.id] ?? ''}
                      onChange={(e) =>
                        setCustomUrls({ ...customUrls, [room.id]: e.target.value })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#D8CEBF] px-2.5 py-1.5 text-xs text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                    />
                    <button
                      onClick={() => handleApplyUrl(room.id, true)}
                      className="bg-[#1A1612] hover:bg-black text-white px-3 py-1.5 text-xs shrink-0 flex items-center gap-1 transition-colors"
                    >
                      {savedId === room.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Applied</span>
                        </>
                      ) : (
                        <span>Update</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="pt-4 mt-2 border-t border-[#E2D7C7] flex items-center justify-between text-xs text-[#8A7E72]">
          <span>Tip: You can simply upload or share image files in chat anytime!</span>
          <button
            onClick={onClose}
            className="bg-[#C09449] text-white px-5 py-2 text-xs uppercase tracking-wider font-medium hover:bg-[#A97C38] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
