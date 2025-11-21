
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import ConsentPopup from "@/components/ConsentPopup";
import { Button } from "@/components/ui/button";
import { getFastToolCount, updateCachedStats } from "@/utils/fastToolCounter";
import { getCurrentToolCount } from "@/utils/toolCounter";
import BookPromotionCard from "@/components/BookPromotionCard";
import LazyFeaturedTools from "@/components/LazyFeaturedTools";
import LazySearchPortal from "@/components/LazySearchPortal";
import InteractiveMatrixBackground from "@/components/InteractiveMatrixBackground";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingCannabisButton from "@/components/FloatingCannabisButton";
import DelayedClonePopup from "@/components/DelayedClonePopup";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { Leaf } from "lucide-react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
  </div>
);

const Index = () => {
  // Use fast cached stats initially for better performance
  const [toolStats, setToolStats] = useState(getFastToolCount());
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  
  // Simple ref for video without complex manager to avoid conflicts
  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set loaded state immediately for faster initial render
    setIsLoaded(true);
    
    // Listen for welcome audio completion to trigger video
    const handleAudioComplete = () => {
      console.log('🎬 Welcome audio complete, starting video...');
      
      const startVideoUnmute = () => {
        const iframe = mainVideoRef.current;
        if (!iframe || videoStarted) return;
        
        setVideoStarted(true);
        console.log('🎥 Starting video playback after audio...');
        
        // Enhanced unmute strategy with multiple attempts
        const attemptUnmute = (attempts = 0) => {
          if (attempts >= 3) {
            console.log('🔇 Video remains muted - browser policy enforced');
            return;
          }
          
          setTimeout(() => {
            try {
              // Multiple methods to attempt unmuting and playing
              const commands = [
                '{"event":"command","func":"playVideo","args":""}',
                '{"event":"command","func":"unMute","args":""}',
                '{"event":"command","func":"setVolume","args":[75]}'
              ];
              
              commands.forEach(command => {
                iframe.contentWindow?.postMessage(command, '*');
              });
              
              console.log(`🔊 Video unmute attempt ${attempts + 1}/3`);
              
              // Retry if needed
              if (attempts < 2) {
                attemptUnmute(attempts + 1);
              }
            } catch (e) {
              console.log(`🔇 Unmute attempt ${attempts + 1} failed:`, e.message);
              if (attempts < 2) {
                attemptUnmute(attempts + 1);
              }
            }
          }, 500 + (attempts * 500)); // Staggered delays
        };
        
        // Start unmute attempts immediately
        attemptUnmute();
        
        // Fallback: Listen for user interaction to enable sound
        const enableSoundOnInteraction = () => {
          try {
            iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            console.log('🔊 Sound enabled via user interaction');
          } catch (e) {
            console.log('🔇 Sound enable failed:', e.message);
          }
        };
        
        // Add interaction listeners
        ['click', 'touchstart', 'keydown'].forEach(event => {
          document.addEventListener(event, enableSoundOnInteraction, { once: true, passive: true });
        });
      };

      // Start video after short delay
      setTimeout(startVideoUnmute, 500);
    };

    window.addEventListener('welcomeAudioComplete', handleAudioComplete);
    
    // Load actual stats in background
    const statsTimer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 8000);

    return () => {
      clearTimeout(statsTimer);
      window.removeEventListener('welcomeAudioComplete', handleAudioComplete);
    };
  }, [videoStarted]);

  const handleSeeMoreAITools = () => {
    // This function can be removed since FeaturedToolsSection handles it
  };

  // Early return with minimal loading state if not ready
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-3"></div>
          <p className="text-cyan-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ImprovedSEOHead pageType="homepage" />
      <GoogleRankingBooster pageType="homepage" />
      
      {/* Background effects */}
      <InteractiveMatrixBackground />
      <AnimatedBackground />
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      {/* Floating Cannabis GPT Button */}
      <FloatingCannabisButton />
      
      <div className="relative z-10">
        <HeroSection />
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* Featured Video Section - Lazy loaded and deferred */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-green-400">AI TOOLS FOR EVERY ASPECT OF YOUR CANNABIS BUSINESS</span>
              </h2>
              <p className="text-lg text-green-200 max-w-3xl mx-auto">
                From cultivation to compliance, marketing to operations - CCSBA has you covered
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full aspect-video">
                <iframe
                  ref={mainVideoRef}
                  className="absolute inset-0 w-full h-full rounded-xl border border-cyan-500/30 bg-slate-800"
                  src="https://www.youtube.com/embed/zGGdCzxFNS4?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
                  title="AI Web Tools Featured Video - 1080p HD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="eager"
                  onLoad={() => console.log('🎥 Video iframe loaded and ready')}
                ></iframe>
              </div>
              
              {/* Cannabis GPT Button Below Video */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🌿 Cannabis GPT button clicked from video section');
                    createTimePortalEffect('https://cannabisgpt.lovable.app/?via=aiwebtools', 'Cannabis GPT');
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-lime-500 to-green-600 hover:from-green-400 hover:via-lime-400 hover:to-green-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-400/60 transform hover:scale-105 transition-all duration-300 border-2 border-green-400 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-lime-400/20 to-green-500/20 animate-pulse rounded-full"></div>
                  
                  {/* Button Content */}
                  <span className="relative flex items-center space-x-3">
                    <Leaf className="w-6 h-6 group-hover:animate-bounce" />
                    <span>🌿 Explore Cannabis GPT</span>
                    <Leaf className="w-6 h-6 group-hover:animate-bounce" />
                  </span>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
                </button>
              </div>
              
              {/* Email Signup Form */}
              <div className="mt-12 max-w-xl mx-auto">
                <div className="bg-gradient-to-br from-green-900/40 to-lime-900/40 p-8 rounded-2xl border-2 border-green-500/30 shadow-2xl shadow-green-500/20">
                  <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Join Our Community</h3>
                  <p className="text-green-200 text-center mb-6">Stay updated with the latest AI tools and cannabis industry insights</p>
                  
                  <div className="flex justify-center mb-6">
                    <a
                      href="https://stats.sender.net/forms/eXD0Pl/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-gradient-to-r from-green-600 via-lime-600 to-green-700 hover:from-green-500 hover:via-lime-500 hover:to-green-600 text-white font-bold text-lg rounded-full shadow-xl shadow-green-600/40 hover:shadow-green-500/60 transform hover:scale-105 transition-all duration-300 border-2 border-green-500 overflow-hidden"
                    >
                      <span className="relative flex items-center space-x-2">
                        <span>📧 Sign Up for Our Email List</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-full" />
                    </a>
                  </div>
                  
                  <div style={{textAlign: "left"}} className="sender-form-field" data-sender-form-id="eXD0Pl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <LazyFeaturedTools onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
        
        <BookPromotionCard />
        <SpecialServices />
        
        {/* Bottom Search Portal - positioned below all featured tools */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-cyan-400">🔍 SEARCH ALL AI TOOLS</span>
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-4">
                Explore our complete database of AI tools with advanced search and filtering
              </p>
            </div>
            
            {/* Search Portal Component */}
            <LazySearchPortal />
          </div>
        </section>
        
        <ScrollToTop />
        <Footer />
      </div>
      
      <ConsentPopup />
      <DelayedClonePopup />
    </div>
  );
};

export default Index;
