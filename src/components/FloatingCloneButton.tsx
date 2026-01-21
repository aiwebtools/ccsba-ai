import { useState, useEffect } from 'react';
import { Copy, Code } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FloatingCloneButton = () => {
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
      className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <a
        href="https://lovable.dev/projects/28822f40-e177-4840-8d1a-166c193e1a4b?via=aiwebtools"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('🌀 Clone Website Button clicked - triggering time warp');
          createTimePortalEffect('https://lovable.dev/projects/28822f40-e177-4840-8d1a-166c193e1a4b?via=aiwebtools', 'Clone AI Web Tools');
        }}
        className="group bg-gradient-to-br from-green-500 via-lime-500 to-green-600 hover:from-green-400 hover:via-lime-400 hover:to-green-500 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center relative overflow-hidden border-2 border-green-300/50"
        style={{ 
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.5), 0 4px 16px rgba(132, 204, 22, 0.4)',
          backdropFilter: 'blur(8px)',
        }}
        title="Clone This AI Tools Website - FREE"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-lime-400/30 to-green-500/30 animate-pulse rounded-full" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <Copy className="w-5 h-5 group-hover:animate-bounce mb-0.5" />
          <div className="text-[8px] font-bold leading-tight">
            <div>CLONE</div>
            <div>FREE</div>
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
      </a>
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-green-500/40 pointer-events-none">
        🌿 Clone This Website FREE
      </span>
    </div>
  );
};

export default FloatingCloneButton;