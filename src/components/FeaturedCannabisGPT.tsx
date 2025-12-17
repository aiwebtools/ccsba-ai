import { useState } from 'react';
import { Leaf, Sparkles, Brain, Globe, Eye, BarChart3, Zap, ExternalLink } from 'lucide-react';
import { createTimePortalEffect } from '@/utils/timeEffects';

const FeaturedCannabisGPT = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLaunch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌿 Cannabis GPT Premium Launch clicked');
    createTimePortalEffect('https://cannabisgpt.lovable.app/?via=aiwebtools', 'Cannabis GPT');
  };

  const features = [
    { icon: Brain, label: 'GPT-5 Powered', color: 'text-purple-400' },
    { icon: Eye, label: 'Vision Analysis', color: 'text-blue-400' },
    { icon: Globe, label: 'Web Search', color: 'text-cyan-400' },
    { icon: BarChart3, label: 'Data Analysis', color: 'text-green-400' },
  ];

  return (
    <div className="mt-10 max-w-4xl mx-auto px-4">
      {/* Premium Badge */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full">
          <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
          <span className="text-green-300 text-sm font-semibold uppercase tracking-wider">CCSBA's #1 Featured Tool</span>
          <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
        </div>
      </div>

      {/* Main Card */}
      <div 
        className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
          isHovered 
            ? 'border-green-400 shadow-[0_0_60px_rgba(34,197,94,0.4)]' 
            : 'border-green-500/40 shadow-[0_0_30px_rgba(34,197,94,0.2)]'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(20,83,45,0.9) 0%, rgba(6,78,59,0.9) 50%, rgba(20,83,45,0.9) 100%)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 animate-pulse" />
        
        {/* Floating Cannabis Leaves Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(8)].map((_, i) => (
            <Leaf 
              key={i} 
              className={`absolute text-green-400 animate-float`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${20 + (i % 3) * 8}px`,
                height: `${20 + (i % 3) * 8}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Left Side - Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/40">
                  <Leaf className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    🌿 Cannabis GPT
                  </h3>
                  <p className="text-green-300 text-sm">Your AI Cannabis Expert</p>
                </div>
              </div>

              <p className="text-green-100 mb-4 text-sm md:text-base leading-relaxed">
                The ultimate AI assistant for CCSBA members. Equipped with <span className="text-green-400 font-semibold">GPT-5 power</span>, 
                vision analysis, web search, and data analysis capabilities. Trained on comprehensive cannabis industry knowledge 
                to help with cultivation, compliance, business operations, and everything cannabis-related.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 rounded-full border border-green-500/30"
                  >
                    <feature.icon className={`w-3.5 h-3.5 ${feature.color}`} />
                    <span className="text-xs text-green-200 font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Launch Button */}
              <button
                onClick={handleLaunch}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
                <span>Launch Cannabis GPT</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 rounded-xl" />
              </button>

              <p className="text-green-400/70 text-xs mt-3">
                💎 Free for all CCSBA members • Powered by AIWebTools.AI
              </p>
            </div>

            {/* Right Side - Video */}
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-green-500/40 shadow-lg shadow-green-500/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zGGdCzxFNS4?rel=0&modestbranding=1"
                  title="Cannabis GPT - CCSBA Featured Tool"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              
              {/* Video Label */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-600 rounded-full text-xs text-white font-semibold shadow-lg">
                🌿 Cannabis GPT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500" />
      </div>
    </div>
  );
};

export default FeaturedCannabisGPT;
