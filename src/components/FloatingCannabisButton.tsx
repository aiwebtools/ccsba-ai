import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCannabisButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile && currentScrollY > lastScrollY && currentScrollY > 200) {
        // Only hide on mobile when scrolling down and past 200px
        setIsVisible(false);
      } else if (isMobile && currentScrollY < lastScrollY) {
        // Only show/hide logic on mobile when scrolling up
        setIsVisible(true);
      } else if (!isMobile) {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true }); // Handle resize events
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed right-2 top-56 sm:top-64 md:top-28 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <a
        href="https://cannabisgpt.lovable.app/?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🌿 Cannabis GPT Button clicked - triggering time warp');
          createTimePortalEffect('https://cannabisgpt.lovable.app/?via=aiwebtools', 'Cannabis GPT');
        }}
        className="group bg-gradient-to-br from-green-500 via-lime-500 to-green-600 hover:from-green-400 hover:via-lime-400 hover:to-green-500 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ 
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4), 0 4px 16px rgba(132, 204, 22, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        title="Cannabis GPT - CCSBA Priority Tool"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-lime-500/20 to-green-600/20 animate-pulse rounded-full" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <Leaf className="w-5 h-5 group-hover:animate-bounce mb-0.5" />
          <div className="text-[6px] font-bold leading-none">
            <div>CANNABIS</div>
            <div>GPT</div>
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
      </a>
    </div>
  );
};

export default FloatingCannabisButton;
