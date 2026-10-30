/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyBenefitsSection } from './components/KeyBenefitsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { OfficesGallerySection } from './components/OfficesGallerySection';
import { WhatYouGetBanner } from './components/WhatYouGetBanner';
import { InsideCentreSection } from './components/InsideCentreSection';
import { PlansPricingSection } from './components/PlansPricingSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OfficeDetailModal } from './components/OfficeDetailModal';
import { BookViewingModal } from './components/BookViewingModal';
import { VideoTourModal } from './components/VideoTourModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import {
  SERVICED_OFFICES_DATA,
  MEETING_ROOMS_DATA,
  OfficeItem,
  InsideRoomItem,
  PricingPlan,
} from './data/offices';
import { MessageSquare, Phone, Image as ImageIcon, Video } from 'lucide-react';

export default function App() {
  const [offices, setOffices] = useState<OfficeItem[]>(SERVICED_OFFICES_DATA);
  const [rooms, setRooms] = useState<InsideRoomItem[]>(MEETING_ROOMS_DATA);

  // Modals state
  const [selectedOffice, setSelectedOffice] = useState<OfficeItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [selectedPlanForVisit, setSelectedPlanForVisit] = useState<PricingPlan | null>(null);
  const [selectedSpaceType, setSelectedSpaceType] = useState<string>('Fully Furnished Office');

  // Video Tour Modal state
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoModalData, setVideoModalData] = useState({
    url: '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
    title: 'Executive Burj View Suite - Walkthrough Tour',
  });

  const handlePlayVideo = (url: string, title: string) => {
    setVideoModalData({ url, title });
    setIsVideoOpen(true);
  };

  // Handle plan selection from Pricing table
  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForVisit(plan);
    const visitElement = document.getElementById('visit');
    if (visitElement) {
      visitElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle room inspection
  const handleSelectRoom = (room: InsideRoomItem) => {
    const adapted: OfficeItem = {
      id: room.id,
      title: room.title,
      subtitle: room.subtitle,
      category: 'serviced',
      categoryLabel: room.categoryLabel,
      image: room.image,
      capacity: room.capacity,
      size: '300 Sq Ft',
      view: 'Burj Khalifa & Downtown Skyline',
      startingPrice: 'Hourly & Monthly memberships available',
    };
    setSelectedOffice(adapted);
  };

  // Update image handlers
  const handleUpdateOfficeImage = (id: string, newUrl: string) => {
    setOffices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, image: newUrl } : item))
    );
  };

  const handleUpdateRoomImage = (id: string, newUrl: string) => {
    setRooms((prev) =>
      prev.map((item) => (item.id === id ? { ...item, image: newUrl } : item))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1612] flex flex-col font-sans selection:bg-[#C09449] selection:text-white">
      {/* 0. Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3. Hero Section with Consultation Card */}
      <main className="flex-1">
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onWatchVideo={() =>
            handlePlayVideo(
              '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
              'Serviced Office - Executive Skyline Walkthrough'
            )
          }
          onOfficeSelect={(type) => setSelectedSpaceType(type)}
        />

        {/* 3.1 Key Benefits Grid (Prime Location, High-speed Internet, Professional Address) */}
        <KeyBenefitsSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 4. Why Us Section (01 - 06 Grid) */}
        <WhyUsSection />

        {/* 5. Section 1: Serviced Offices & Fully Furnished Offices with Video Tours */}
        <OfficesGallerySection
          onSelectOffice={(office) => setSelectedOffice(office)}
          onOpenBooking={() => setIsBookingOpen(true)}
          onPlayVideo={handlePlayVideo}
        />

        {/* 6. What You Get Dark Banner */}
        <WhatYouGetBanner />

        {/* 7. Section 2: Meeting Rooms & Board Rooms ("The rooms, as you'll find them") */}
        <InsideCentreSection
          onSelectRoom={handleSelectRoom}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 8. Workspace Plans & Pricing */}
        <PlansPricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. Verified Google Reviews & Client Testimonials */}
        <GoogleReviewsSection />

        {/* 10. Visit Us, Interactive Google Map & Private Tour Form */}
        <VisitUsSection selectedPlan={selectedPlanForVisit} />

        {/* 11. Common Questions (Accordion FAQ Section) */}
        <FAQSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Modals */}
      <OfficeDetailModal
        office={selectedOffice}
        onClose={() => setSelectedOffice(null)}
        onRequestQuote={(officeTitle) => {
          setSelectedSpaceType(officeTitle);
          const visitEl = document.getElementById('visit');
          if (visitEl) {
            visitEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onPlayVideo={handlePlayVideo}
      />

      <BookViewingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultSpace={selectedSpaceType}
      />

      <VideoTourModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        initialVideoUrl={videoModalData.url}
        initialTitle={videoModalData.title}
        onBookOffice={(title) => {
          setSelectedSpaceType(title);
          const visitEl = document.getElementById('visit');
          if (visitEl) {
            visitEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      <ImageManagerModal
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
        onUpdateOfficeImage={handleUpdateOfficeImage}
        onUpdateRoomImage={handleUpdateRoomImage}
        offices={offices}
        rooms={rooms}
      />

      {/* Floating Action Bar: High-Converting Google Ads Lead Triggers (WhatsApp & Direct Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Watch video walkthrough pill */}
        <button
          onClick={() =>
            handlePlayVideo(
              '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
              'Executive Burj View Suite - Walkthrough Tour'
            )
          }
          title="Watch Video Walkthrough"
          className="bg-[#18120D] hover:bg-black text-[#DEBF86] border border-[#C09449]/40 shadow-xl rounded-full px-4 py-2.5 text-xs font-medium flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        >
          <Video className="w-3.5 h-3.5 text-[#C09449]" />
          <span className="hidden sm:inline">Watch Office Tour</span>
        </button>

        {/* WhatsApp direct chat link with Google Ads conversion context */}
        <a
          href="https://wa.me/971527601343?text=Hello%20Corporate%20Business%20Hub%2C%20I%20am%20inquiring%20about%20serviced%20offices%20at%2048%20Burj%20Gate%20Downtown%20Dubai.%20Please%20share%20current%20availability%20and%20rates."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp (+971 52 760 1343)"
          className="group relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Quick Call button */}
        <a
          href="tel:+971527601343"
          title="Call Corporate Business Hub (+971 52 760 1343)"
          className="group relative bg-[#1A1612] hover:bg-black text-[#C09449] border border-[#C09449]/50 p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +971 52 760 1343
          </span>
        </a>
      </div>
    </div>
  );
}
