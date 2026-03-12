
import { createTimePortalEffect } from "@/utils/timeEffects";
import ccsbaLogo from "@/assets/ccsba-official-logo.png";

const FooterCompanyInfo = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer company info:', url);
    createTimePortalEffect(url);
  };

  return (
    <div className="space-y-4">
      {/* CCSBA Logo section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src={ccsbaLogo} alt="CCSBA - CT Cannabis Small Business Alliance" className="h-14 w-auto drop-shadow-lg brightness-110" />
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-lime-500 to-green-600 bg-clip-text text-transparent glow-text-effect">
            CCSBA AI TOOLS
          </div>
        </div>
        <div className="text-xs text-green-300 font-semibold">
          CONNECTICUT CANNABIS SMALL BUSINESS ALLIANCE
        </div>
        <div className="text-xs md:text-sm text-gray-300 mt-2">
          Non-Profit Educational Organization
        </div>
        <div className="text-xs md:text-sm text-gray-400 mt-1 flex flex-wrap items-center justify-center gap-1">
          <button 
            onClick={(e) => handleExternalLink("https://ctcannabisalliance.org", e)}
            className="text-green-400 hover:text-green-300 transition-colors underline"
          >
            CTCannabisAlliance.org
          </button>
          <span>|</span>
          <span>Platform by</span>
          <button 
            onClick={(e) => handleExternalLink("https://aiwebtools.lovable.app/?via=aiwebtools", e)}
            className="text-green-400 hover:text-green-300 transition-colors underline"
          >
            AIWebTools.AI
          </button>
        </div>
      </div>

      {/* CCSBA information */}
      <div>
        <h3 className="text-lg font-semibold text-green-300 mb-4 glow-text-effect">
          Connecticut Cannabis Small Business Alliance
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <span>🌿</span>
            <button 
              onClick={(e) => handleExternalLink("https://connecticutcannabis.org", e)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              connecticutcannabis.org
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <button 
              onClick={(e) => handleExternalLink("mailto:info@connecticutcannabis.org", e)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              info@connecticutcannabis.org
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span>Connecticut, USA</span>
          </div>
        </div>
      </div>
      
      {/* AIWebTools.AI Credit */}
      <div className="pt-4 border-t border-green-500/30">
        <div className="text-xs text-gray-400 leading-relaxed">
          <p className="mb-2">
            <strong className="text-green-400">AIWebTools.AI</strong> designed and built this AI tools platform, which was donated to CCSBA to support our members.
          </p>
          <p className="mb-2">
            We empower the community with cutting-edge AI tools for every aspect of your business—from consumers to small business owners to industry leaders.
          </p>
          <p className="text-green-300 font-semibold mb-3">
            🤝 Together We Grow • United We Stand • Empowering Our Community
          </p>
          <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mt-3">
            <p className="text-xs text-blue-300 font-semibold mb-1">💎 GPT-5 Powered • Free with Rate Limits</p>
            <p className="text-xs text-gray-400">
              Our custom GPTs use GPT-5 and are <strong className="text-green-400">FREE</strong>, but free ChatGPT has rate limits (limited messages every few hours). 
              ChatGPT Plus (~$20/month) removes limits for unlimited access. 
              This is <strong className="text-blue-400">OpenAI's policy</strong>, not imposed by CCSBA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
