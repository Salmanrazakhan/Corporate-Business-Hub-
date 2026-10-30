import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface BookViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpace?: string;
}

export const BookViewingModal: React.FC<BookViewingModalProps> = ({
  isOpen,
  onClose,
  defaultSpace = 'Private Office',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    space: defaultSpace,
    guests: '1 - 2 People',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF7F2] text-[#1A1612] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2D6C6] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#8A7E72] hover:text-[#1A1612] p-1.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C09449]/15 flex items-center justify-center mx-auto text-[#C09449]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#1A1612]">Viewing Booked</h3>
            <p className="text-sm text-[#665E55] leading-relaxed max-w-md mx-auto">
              We look forward to welcoming you to <strong>1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai</strong> on <strong>{formData.date}</strong> ({formData.timeSlot}).
            </p>
            <p className="text-xs text-[#8A7E72]">
              A calendar invite and VIP valet parking pass will be sent to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 bg-[#1A1612] text-white px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-[#C09449] text-xs uppercase tracking-[0.2em] font-medium">
                1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1612]">
                Schedule a Private Viewing
              </h2>
              <p className="text-xs sm:text-sm text-[#73695F] font-light">
                Experience our serviced offices, meeting rooms, and skyline lounges in person.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-[#DCD0C0] p-3 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 52 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#DCD0C0] p-3 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#DCD0C0] p-3 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C09449]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#DCD0C0] p-2.5 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C09449]" /> Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-[#DCD0C0] p-2.5 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#73695F] mb-1">
                  Space Type of Interest
                </label>
                <select
                  value={formData.space}
                  onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                  className="w-full bg-white border border-[#DCD0C0] p-2.5 text-sm text-[#1A1612] focus:border-[#C09449] focus:outline-none"
                >
                  <option value="Fully Furnished Office">Fully Furnished Office</option>
                  <option value="Executive Suite">Executive Suite</option>
                  <option value="Private Office">Private Office</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A1612] hover:bg-black text-white py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                {loading ? 'Confirming Tour...' : 'Confirm Viewing Appointment'}
              </button>
              <p className="text-[11px] text-center text-[#8A7E72] mt-2 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-[#C09449]" /> Free guest valet parking provided upon arrival
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
