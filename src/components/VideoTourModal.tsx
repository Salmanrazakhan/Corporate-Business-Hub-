import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Check } from 'lucide-react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoUrl?: string;
  initialTitle?: string;
  onBookOffice: (title: string) => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
  initialVideoUrl = '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
  initialTitle = 'Executive Serviced Office Walkthrough',
  onBookOffice,
}) => {
  const [currentVideo, setCurrentVideo] = useState(initialVideoUrl);
  const [currentTitle, setCurrentTitle] = useState(initialTitle);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (initialVideoUrl) {
      setCurrentVideo(initialVideoUrl);
      setCurrentTitle(initialTitle);
    }
  }, [initialVideoUrl, initialTitle]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [isOpen, currentVideo]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSwitchVideo = (url: string, title: string) => {
    setCurrentVideo(url);
    setCurrentTitle(title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-[#18120D] text-white max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-4 sm:px-6 bg-[#140E0A] border-b border-white/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[#C09449] text-[10px] uppercase tracking-widest font-medium">
              Live Video Walkthrough
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
              {currentTitle}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center aspect-video max-h-[60vh] overflow-hidden group">
          <video
            ref={videoRef}
            src={currentVideo}
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className="w-full h-full object-contain"
            onClick={togglePlay}
          />

          {/* Video Control Bar overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 bg-white/15 hover:bg-white/25 text-white rounded-full transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 bg-white/15 hover:bg-white/25 text-white rounded-full transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-xs text-[#D8C7B5] hidden sm:inline font-light">
                1601, 48 Burj Gate, Sofitel Downtown Dubai, Dubai
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onBookOffice(currentTitle);
                  onClose();
                }}
                className="bg-[#C09449] hover:bg-[#A97C38] text-white px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors"
              >
                Inquire For This Office
              </button>
            </div>
          </div>
        </div>

        {/* Video switcher row */}
        <div className="p-4 sm:p-5 bg-[#140E0A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() =>
                handleSwitchVideo(
                  '/assets/aistudio/Serviced_office_video_view_01_a109e61f.mp4',
                  'Designer Serviced Office - Walkthrough Tour'
                )
              }
              className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs text-left border transition-all ${
                currentVideo.includes('01')
                  ? 'border-[#C09449] bg-[#C09449]/10 text-white font-medium'
                  : 'border-white/10 hover:border-white/20 text-[#A89888] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Play className="w-3 h-3 text-[#C09449]" />
                <span>Designer Serviced Office</span>
              </div>
              <span className="text-[10px] text-[#8C7E72] block pl-5">Executive desk &amp; modern decor</span>
            </button>

            <button
              onClick={() =>
                handleSwitchVideo(
                  '/assets/aistudio/Serviced_office_video_view_02_50b7f0be.mp4',
                  'Executive Burj View Suite - Walkthrough Tour'
                )
              }
              className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs text-left border transition-all ${
                currentVideo.includes('02')
                  ? 'border-[#C09449] bg-[#C09449]/10 text-white font-medium'
                  : 'border-white/10 hover:border-white/20 text-[#A89888] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Play className="w-3 h-3 text-[#C09449]" />
                <span>Executive Burj View Suite</span>
              </div>
              <span className="text-[10px] text-[#8C7E72] block pl-5">Leather sofa suite &amp; Burj panorama</span>
            </button>
          </div>

          <p className="text-[11px] text-[#8C7E72] text-center sm:text-right font-light">
            Real video recorded directly on premises at 48 Burj Gate.
          </p>
        </div>
      </div>
    </div>
  );
};
