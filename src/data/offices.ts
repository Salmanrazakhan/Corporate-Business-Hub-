export interface OfficeItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'serviced' | 'furnished' | 'reception';
  categoryLabel: string;
  image: string;
  gallery?: string[];
  videoUrl?: string;
  capacity: string;
  size: string;
  view: string;
  features?: string[];
  startingPrice: string;
}

export interface InsideRoomItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'boardroom' | 'meeting' | 'lounge';
  categoryLabel: string;
  image: string;
  description: string;
  amenities: string[];
  capacity: string;
}

export const SERVICED_OFFICES_DATA: OfficeItem[] = [
  {
    id: 'executive-burj-suite',
    title: 'Fully Furnished Office',
    subtitle: 'Desk, seating and a city view',
    category: 'furnished',
    categoryLabel: 'Fully Furnished Office',
    image: '/assets/aistudio/Serviced_office_02_d020e619.jpeg',
    videoUrl: '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
    capacity: '3 - 5 People',
    size: '300 Sq Ft',
    view: 'Panoramic Burj Khalifa & Downtown Skyline',
    startingPrice: 'AED 9,500 / mo',
  },
  {
    id: 'designer-serviced-suite',
    title: 'Serviced Office',
    subtitle: 'Furnished and ready',
    category: 'serviced',
    categoryLabel: 'Serviced Office',
    image: '/assets/aistudio/Serviced_Office_01_fd7360e3.jpeg',
    gallery: [
      '/assets/aistudio/Serviced_Office_01_fd7360e3.jpeg',
      '/assets/aistudio/Serviced_Office_01_other_view_c9fc6716.jpeg',
    ],
    videoUrl: '/assets/aistudio/Serviced_office_video_view_01_a109e61f.mp4',
    capacity: '2 - 4 People',
    size: '300 Sq Ft',
    view: 'Downtown Plaza & Burj Gate Tower',
    startingPrice: 'AED 8,800 / mo',
  },
  {
    id: 'skyline-private-office',
    title: 'Serviced Office',
    subtitle: 'Workstation layout',
    category: 'serviced',
    categoryLabel: 'Serviced Office',
    image: '/assets/aistudio/Serviced_office_03_076547b4.jpeg',
    capacity: '4 - 6 People',
    size: '300 Sq Ft',
    view: 'Sheikh Zayed Road & Burj Khalifa Metro Walkway',
    startingPrice: 'AED 10,500 / mo',
  },
  {
    id: 'timber-board-office',
    title: 'Fully Furnished Office',
    subtitle: 'Multiple workstations',
    category: 'furnished',
    categoryLabel: 'Fully Furnished Office',
    image: '/assets/aistudio/Serviced_office_04_15cf930f.jpeg',
    capacity: '4 - 6 People',
    size: '300 Sq Ft',
    view: 'Downtown Financial Skyline',
    startingPrice: 'AED 9,800 / mo',
  },
  {
    id: 'multi-station-team-suite',
    title: 'Serviced Office',
    subtitle: 'Ready to move in',
    category: 'serviced',
    categoryLabel: 'Serviced Office',
    image: '/assets/aistudio/Serviced_office_05_6a7fd8e5.jpeg',
    capacity: '5 - 8 People',
    size: '300 Sq Ft',
    view: 'Downtown Skyline & Boulevard',
    startingPrice: 'AED 12,000 / mo',
  },
  {
    id: 'executive-team-lounge-suite',
    title: 'Serviced Office',
    subtitle: 'Bright workspace',
    category: 'serviced',
    categoryLabel: 'Serviced Office',
    image: '/assets/aistudio/Serviced_office_06_db63f863.jpeg',
    capacity: '4 - 7 People',
    size: '300 Sq Ft',
    view: 'Sofitel Downtown Courtyard & Skyline',
    startingPrice: 'AED 11,200 / mo',
  },
];

export const MEETING_ROOMS_DATA: InsideRoomItem[] = [
  {
    id: 'client-meeting-room',
    title: 'Client Meeting Room',
    subtitle: 'Conference table · wall display & wood panelling',
    category: 'meeting',
    categoryLabel: 'Meeting Room',
    image: '/assets/aistudio/Client_Meeting_Room_080a7f26.jpeg',
    description: 'A prestigious conference setting equipped with a large glass-top table, ribbed leather executive chairs, and an ultra-high-definition wall presentation display.',
    amenities: [
      '10-person glass-top conference table with integrated power docks',
      '75" 4K presentation display with HD webcam for hybrid meetings',
      'Acoustic timber wall and sliding frosted glass partition',
      'Tea, artisan coffee, and chilled water service included',
    ],
    capacity: '10 - 12 Attendees',
  },
  {
    id: 'meeting-room-skyline',
    title: 'Skyline Meeting Room',
    subtitle: 'Burj Khalifa skyline view · whiteboard & conference setup',
    category: 'meeting',
    categoryLabel: 'Meeting Room',
    image: '/assets/aistudio/Meeting_Room_94399920.jpeg',
    description: 'Breathtaking corner views over Downtown Dubai and Burj Khalifa create an impressive backdrop for investor presentations and high-profile pitches.',
    amenities: [
      'Direct unobstructed panoramic windows toward Burj Khalifa',
      'Large conference table with chrome and leather armchairs',
      'Mobile presentation flipchart and magnetic whiteboard',
      'Dual conference speakerphone for crystal-clear audio',
    ],
    capacity: '8 - 10 Attendees',
  },
  {
    id: 'board-room-media',
    title: 'Board Room',
    subtitle: 'Leather seating · wood panelling & 4K media wall',
    category: 'boardroom',
    categoryLabel: 'Board Room',
    image: '/assets/aistudio/Board_Room_97d4ba8a.jpeg',
    description: 'Formal yet comfortable board setting featuring natural light, wood veneer media wall, sleek leather seating, and integrated AV casting.',
    amenities: [
      'Central 65" 4K Smart TV mounted on warm natural oak panelling',
      'Black Italian leather club chairs and wide low tables',
      'Lush indoor botanical plants & executive magazine stand',
      'Wireless HDMI, Apple AirPlay, and Google Cast support',
    ],
    capacity: '6 - 8 Attendees',
  },
  {
    id: 'client-meeting-lounge',
    title: 'Client Meeting Lounge',
    subtitle: 'Sofas along the window · Downtown Dubai vistas',
    category: 'lounge',
    categoryLabel: 'Executive Lounge',
    image: '/assets/aistudio/Client_Meeting_Lounge_26f36d19.jpeg',
    description: 'Expansive lounge area drenched in natural daylight with sofas lining the floor-to-ceiling windows, ideal for informal client discussions and VIP breaks.',
    amenities: [
      'Multiple 3-seater and armchair clusters with glass coffee tables',
      'Sweeping skyline view across Burj Gate plaza and Downtown',
      'Direct access to espresso bar and reception desk',
      'Quiet acoustic environment for private one-on-ones',
    ],
    capacity: '8 - 14 Attendees',
  },
  {
    id: 'board-room-lounge',
    title: 'Board Room Lounge',
    subtitle: 'Sofas & connecting boardroom access',
    category: 'boardroom',
    categoryLabel: 'Board Room',
    image: '/assets/aistudio/Board_Room_Lounge_b2fe22a5.jpeg',
    description: 'Executive breakout lounge connecting directly to the private board suites with timber ceiling beams and marble corridor accents.',
    amenities: [
      'Direct connecting doorway to executive suites',
      'Recessed ceiling illumination & architectural lighting',
      'Comfortable leather sofas with center coffee tables',
      'High-speed Wi-Fi and power outlets for laptops',
    ],
    capacity: '6 - 10 Attendees',
  },
];

export interface PricingPlan {
  id: string;
  name: 'Private Office' | 'Fully Furnished Office' | 'Executive Suite';
  priceAED: number;
  featured?: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'private-office',
    name: 'Private Office',
    priceAED: 8000,
    features: [
      'Fully furnished',
      'High-speed internet',
      '24/7 access',
      'All utilities included',
      'Meeting room access',
    ],
  },
  {
    id: 'furnished-office',
    name: 'Fully Furnished Office',
    priceAED: 9500,
    featured: true,
    features: [
      'Fully furnished',
      'High-speed internet',
      '24/7 access',
      'All utilities included',
      'Meeting room access',
    ],
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    priceAED: 12000,
    features: [
      'Fully furnished',
      'High-speed internet',
      '24/7 access',
      'All utilities included',
      'Meeting room access',
    ],
  },
];
