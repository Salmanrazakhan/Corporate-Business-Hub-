export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category?: 'Location' | 'Offices' | 'Licensing & Ejari' | 'Services';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'Where is Corporate Business Hub located in Downtown Dubai?',
    answer:
      'Corporate Business Hub is located at 48 Burj Gate, Downtown Dubai, near Sofitel Dubai Downtown Hotel. Its central location provides convenient access to Sheikh Zayed Road, the Burj Khalifa, Dubai Mall, and the wider business district.',
    category: 'Location',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Are serviced offices available for rent in Downtown Dubai?',
    answer:
      'Yes, Corporate Business Hub offers serviced offices in Downtown Dubai for startups, SMEs, entrepreneurs, and established businesses. Businesses can choose a professional workspace with essential facilities and administrative support.',
    category: 'Offices',
  },
  {
    id: 'faq-3',
    number: '03',
    question: "What facilities are included in Corporate Business Hub's serviced offices?",
    answer:
      "Corporate Business Hub offers furnished office spaces with essential business facilities, including internet connectivity, utilities, and administrative support, depending on the selected office package. Contact our team to confirm the inclusions for your preferred workspace.",
    category: 'Services',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'How much does it cost to rent an office at Corporate Business Hub in Downtown Dubai?',
    answer:
      'Office rental prices depend on the office size, location, facilitie and lease terms. Corporate Business Hub offers workspace options for businesses with different requirements. Contact our team for current availability and pricing.',
    category: 'Offices',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Can I get an Ejari with an office at Corporate Business Hub?',
    answer:
      'Ejari eligibility depends on the office type, tenancy agreement and applicable requirements. If your business requires an Ejari for licensing or regulatory purposes, our team can help you explore suitable office options and clarify the documentation needed.',
    category: 'Licensing & Ejari',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Can I use a Downtown Dubai office address for my business licence?',
    answer:
      "A suitable office address may be used for business licensing, subject to the licensing authority's requirements, tenancy documentation and the type of business activity. Corporate Business Hub can help you identify an appropriate workspace for your company's needs.",
    category: 'Licensing & Ejari',
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Is Corporate Business Hub suitable for startups and small businesses?',
    answer:
      'Yes, Corporate Business Hub is suitable for startups, entrepreneurs, consultants and small businesses looking for a professional business address in Downtown Dubai. A serviced office can help reduce the need to manage office infrastructure independently.',
    category: 'Offices',
  },
  {
    id: 'faq-8',
    number: '08',
    question: 'Can I visit Corporate Business Hub before renting an office?',
    answer:
      'Yes, you can contact our team to arrange an office tour at Corporate Business Hub. Visiting the workspace allows you to explore available offices, understand the facilities and discuss your business requirements before making a decision.',
    category: 'Location',
  },
  {
    id: 'faq-9',
    number: '09',
    question: 'How quickly can I move into an office at Corporate Business Hub?',
    answer:
      'It will be our pleasure to welcome you in our office premises and make you a partner of Corporate business hub family',
    category: 'Offices',
  },
  {
    id: 'faq-10',
    number: '10',
    question: 'Does Corporate Business Hub offer private offices in Downtown Dubai?',
    answer:
      'Yes, Corporate Business Hub provides private office options for businesses that need a dedicated professional workspace. Availability, office sizes, and pricing may vary, so contact our team to find an option that suits your team.',
    category: 'Offices',
  },
  {
    id: 'faq-11',
    number: '11',
    question: 'Is Corporate Business Hub easily accessible by public transport?',
    answer:
      'Corporate Business Hub is situated in Downtown Dubai, with convenient access to major roads and nearby public transport connections. Its central location makes it a practical option for businesses receiving clients, employees and business partners.',
    category: 'Location',
  },
  {
    id: 'faq-12',
    number: '12',
    question: 'Why choose Corporate Business Hub for serviced offices in Downtown Dubai?',
    answer:
      'Corporate Business Hub offers a professional business environment in a prime Downtown Dubai location, close to key commercial destinations. Businesses can explore serviced office options, access essential workspace facilities and benefit from a central address for client meetings and daily operations.',
    category: 'Offices',
  },
];
