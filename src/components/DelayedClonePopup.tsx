import { useState, useEffect } from 'react';
import { X, Copy, Code } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const DelayedClonePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('clone-popup-shown');
    
    if (!popupShown && !hasShown) {
      // Show popup after 10 minutes (600,000 milliseconds)
      const timer = setTimeout(() => {
        console.log('⏰ 10 minutes elapsed - showing clone popup');
        
        // Mute all playing videos
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.muted = true;
          video.pause();
        });
        
        // Pause YouTube iframes
        const iframes = document.querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube"]');
        iframes.forEach(iframe => {
          try {
            iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            iframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
          } catch (e) {
            console.log('Could not pause iframe:', e);
          }
        });
        
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('clone-popup-shown', 'true');
      }, 600000); // 10 minutes = 600,000ms

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 Clone button clicked from delayed popup');
    setIsVisible(false);
    createTimePortalEffect('https://lovable.dev/projects/cc49ec6f-7243-4d4b-a3ba-f7ca01ad7eaf?utm_source=lovable-badge', 'Clone AI Web Tools');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
        onClick={handleClose}
      />
      
      {/* Popup modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-black border-2 border-cyan-400 rounded-xl p-6 md:p-8 w-full max-w-md md:max-w-lg shadow-2xl shadow-cyan-400/50 animate-scale-in">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20 rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                <Copy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Love This AI Tools Platform?
              </h2>
              <p className="text-cyan-100 text-base md:text-lg mb-2">
                Clone this entire website with AI and make it your own!
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Build your own AI tools directory in minutes using Lovable AI
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✓</div>
                  <p className="text-white text-sm">Full source code access</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✓</div>
                  <p className="text-white text-sm">Customize everything with AI</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✓</div>
                  <p className="text-white text-sm">Deploy to your own domain</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 font-bold">✓</div>
                  <p className="text-white text-sm">Free to start building</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={handleClone}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" />
                <span>Clone This Website Now</span>
              </button>
              
              <button
                onClick={handleClose}
                className="w-full bg-gray-700/50 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DelayedClonePopup;
