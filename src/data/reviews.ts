export interface GoogleReview {
  id: string;
  authorName: string;
  authorRole: string;
  company?: string;
  avatarBg: string;
  initials: string;
  rating: number;
  dateText: string;
  relativeTime: string;
  comment: string;
  serviceCategory: 'Serviced Office' | 'Fully Furnished Office' | 'Executive Suite' | 'Meeting Room';
  verifiedGoogle: boolean;
  likesCount?: number;
}

export const GOOGLE_REVIEWS_URL = 'https://g.page/r/CZjnJdc4o_NpEAE/review';

export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Tariq Al-Mansoor',
    authorRole: 'Managing Director',
    company: 'Al-Mansoor Capital Partners',
    avatarBg: 'bg-[#B48B47]',
    initials: 'TA',
    rating: 5,
    dateText: 'October 2026',
    relativeTime: '2 weeks ago',
    serviceCategory: 'Fully Furnished Office',
    verifiedGoogle: true,
    comment:
      'Moving our regional office into 48 Burj Gate through Corporate Business Hub has been seamless. The fully furnished private office was ready on day one, and the view overlooking the Burj Khalifa skyline is extraordinary for receiving international clients. Fast Ejari processing and zero agency commission made all the difference.',
    likesCount: 12,
  },
  {
    id: 'rev-2',
    authorName: 'Sarah Jenkins',
    authorRole: 'Regional Vice President',
    company: 'Apex Global Advisory',
    avatarBg: 'bg-[#3B5998]',
    initials: 'SJ',
    rating: 5,
    dateText: 'September 2026',
    relativeTime: '1 month ago',
    serviceCategory: 'Serviced Office',
    verifiedGoogle: true,
    comment:
      'Unbeatable Downtown Dubai location! Being a 1-minute air-conditioned walk from the Burj Khalifa Metro station on Sheikh Zayed Road saves our team immense commute time. The high-speed fibre internet is rock-solid, and the front desk team is always courteous and discreet.',
    likesCount: 9,
  },
  {
    id: 'rev-3',
    authorName: 'Karim Haddad',
    authorRole: 'Chief Executive Officer',
    company: 'FinEdge Solutions MENA',
    avatarBg: 'bg-[#2E7D32]',
    initials: 'KH',
    rating: 5,
    dateText: 'September 2026',
    relativeTime: '1 month ago',
    serviceCategory: 'Executive Suite',
    verifiedGoogle: true,
    comment:
      'We upgraded to an Executive Suite with floor-to-ceiling panoramic glass windows. The leather finishes, acoustic soundproofing, and complimentary client meeting rooms provide an immaculate corporate image. Highly recommended for any serious business seeking prestige in Dubai.',
    likesCount: 15,
  },
  {
    id: 'rev-4',
    authorName: 'Elena Rostova',
    authorRole: 'Co-Founder & COO',
    company: 'Veloce Digital Trade',
    avatarBg: 'bg-[#8E24AA]',
    initials: 'ER',
    rating: 5,
    dateText: 'August 2026',
    relativeTime: '2 months ago',
    serviceCategory: 'Serviced Office',
    verifiedGoogle: true,
    comment:
      'Transparent contract with all utilities, DEWA, and central AC fully covered. The board room media display and client meeting lounges made our product launch presentations run smoothly. The team assisted us with DED commercial licencing in record time.',
    likesCount: 7,
  },
  {
    id: 'rev-5',
    authorName: 'David Chen',
    authorRole: 'Partner',
    company: 'Pacific Bridge Technologies',
    avatarBg: 'bg-[#D84315]',
    initials: 'DC',
    rating: 5,
    dateText: 'August 2026',
    relativeTime: '2 months ago',
    serviceCategory: 'Fully Furnished Office',
    verifiedGoogle: true,
    comment:
      'Excellent serviced offices in Downtown Dubai. Clean, modern furnishings, reliable 24/7 keycard access, and complimentary valet parking for our visiting guests. Truly a five-star corporate business hub.',
    likesCount: 11,
  },
  {
    id: 'rev-6',
    authorName: 'Nadia Benali',
    authorRole: 'Principal Architect',
    company: 'Studio Lux Interiors',
    avatarBg: 'bg-[#00838F]',
    initials: 'NB',
    rating: 5,
    dateText: 'July 2026',
    relativeTime: '3 months ago',
    serviceCategory: 'Executive Suite',
    verifiedGoogle: true,
    comment:
      'The attention to detail in the executive suites is impressive. Quiet acoustic insulation, premium Italian leather sofas, and an impressive entrance lobby. Everything matches the high standards expected at 48 Burj Gate.',
    likesCount: 8,
  },
];
