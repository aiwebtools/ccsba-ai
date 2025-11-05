import { Link } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterCannabisTools = () => {
  const cannabisTools = [
    { name: "Cannabis GPT", url: "https://cannabisgpt.lovable.app/?via=aiwebtools", icon: "🌿" },
    { name: "Business Plan Generator", url: "https://businessplanandtrainai.lovable.app/?via=aiwebtools", icon: "📋" },
    { name: "Agronomus AI Farming", url: "https://agronomus.lovable.app/?via=aiwebtools", icon: "🌱" },
    { name: "Legal Draftsmith", url: "https://publicdefendergpt.lovable.app/?via=aiwebtools", icon: "⚖️" },
    { name: "Marketing & Graphics Design", url: "https://graphicdesigngpt.lovable.app/?via=aiwebtools", icon: "🎨" },
    { name: "Financial Analysis", url: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools", icon: "💰" },
  ];

  const handleToolClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 Cannabis tool clicked:', url);
    createTimePortalEffect(url);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-green-300 mb-4 glow-text-effect">
        🌿 Popular Cannabis Business Tools
      </h3>
      <ul className="space-y-2">
        {cannabisTools.map((tool) => (
          <li key={tool.name}>
            <button
              onClick={(e) => handleToolClick(tool.url, e)}
              className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group"
            >
              <span className="group-hover:scale-110 transition-transform">{tool.icon}</span>
              <span className="group-hover:translate-x-1 transition-transform">{tool.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-green-500/30">
        <Link 
          to="/main-category/ALL%20AI%20TOOLS"
          className="text-sm text-green-400 hover:text-green-300 transition-colors font-semibold"
        >
          → View All 1500+ Tools
        </Link>
      </div>
    </div>
  );
};

export default FooterCannabisTools;
