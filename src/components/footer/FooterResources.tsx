import { createTimePortalEffect } from "@/utils/timeEffects";

const FooterResources = () => {
  const resources = [
    {
      title: "🎓 Educational Resources",
      links: [
        { name: "Cannabis Compliance Guide", url: "https://ctcannabisalliance.org" },
        { name: "Business Startup Toolkit", url: "https://ctcannabisalliance.org" },
        { name: "Industry Best Practices", url: "https://ctcannabisalliance.org" },
      ]
    },
    {
      title: "🤝 Community & Support",
      links: [
        { name: "Member Directory", url: "https://ctcannabisalliance.org" },
        { name: "Monthly Meetings", url: "https://ctcannabisalliance.org/upcoming-events%F0%9F%93%85" },
        { name: "Advocacy & Policy Updates", url: "https://ctcannabisalliance.org" },
      ]
    },
    {
      title: "📊 Business Tools",
      links: [
        { name: "License Application Helper", url: "https://ctcannabisalliance.org" },
        { name: "Compliance Checklist", url: "https://ctcannabisalliance.org" },
        { name: "Market Research Data", url: "https://ctcannabisalliance.org" },
      ]
    }
  ];

  const handleResourceClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 Resource link clicked:', url);
    createTimePortalEffect(url);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-green-300 mb-4 glow-text-effect">
        📚 CCSBA Member Resources
      </h3>
      <div className="space-y-4">
        {resources.map((section, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold text-green-400 mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => handleResourceClick(link.url, e)}
                    className="text-xs text-gray-400 hover:text-green-300 transition-colors"
                  >
                    → {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterResources;
