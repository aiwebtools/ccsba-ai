
import FooterWeb3Domains from "./FooterWeb3Domains";
import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterLinks = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 External link clicked in footer links:', url);
    createTimePortalEffect(url);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-300 glow-text-effect">Quick Links</h3>
          <div className="space-y-2">
            <a
              href="/our-story"
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              📖 Our Story
            </a>
            <button
              onClick={(e) => handleExternalLink("https://ctcannabisalliance.org", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left font-semibold"
            >
              🌿 CCSBA HOMEPAGE
            </button>
            <button
              onClick={(e) => handleExternalLink("https://ctcannabisalliance.org/all-products/ols/categories/membership-enrollment", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              ✅ Become a Member
            </button>
            <button
              onClick={(e) => handleExternalLink("https://ctcannabisalliance.org/upcoming-events%F0%9F%93%85", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              📅 Events Calendar
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-300 glow-text-effect">AI Services</h3>
          <div className="space-y-2">
            <button
              onClick={(e) => handleExternalLink("https://aitools.company/hire-us-to-build-your-ai-1", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              🚀 Custom AI Development
            </button>
            <button
              onClick={(e) => handleExternalLink("https://docs.google.com/forms/d/e/1FAIpQLSchtKquEqaaKSZM9AWygcY3Uf3uQOpVHZUMayVZMCbDTxfyfQ/viewform?usp=sf_link", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              🤖 Request New Tool
            </button>
            <button
              onClick={(e) => handleExternalLink("https://aitools.company/about", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              📋 About AIWebTools.AI
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-300 glow-text-effect">Legal & Support</h3>
          <div className="space-y-2">
            <button
              onClick={(e) => handleExternalLink("https://aitools.company/privacy-policy", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              🔒 Privacy Policy
            </button>
            <button
              onClick={(e) => handleExternalLink("https://aitools.company/terms-of-services", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              📜 Terms of Service
            </button>
            <button
              onClick={(e) => handleExternalLink("https://aitools.company/contact", e)}
              className="block text-sm text-gray-300 hover:text-green-400 transition-colors text-left"
            >
              📞 Contact Support
            </button>
          </div>
        </div>
      </div>
      
      <FooterWeb3Domains />
    </div>
  );
};

export default FooterLinks;
