
import { Helmet } from 'react-helmet-async';
import { seoConfig, generateStructuredData, generateFAQStructuredData, generateLocalBusinessStructuredData } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: any;
  noIndex?: boolean;
  includeFAQ?: boolean;
  includeLocalBusiness?: boolean;
  category?: string;
  toolData?: any;
}

const SEOHead = ({
  title,
  description = seoConfig.description,
  keywords = seoConfig.keywords,
  image = '/placeholder.svg',
  url = seoConfig.siteUrl,
  type = 'website',
  structuredData,
  noIndex = false,
  includeFAQ = false,
  includeLocalBusiness = false,
  category,
  toolData
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | CCSBA AI Tools Portal for Members` : "CCSBA AI Tools Portal | Connecticut Cannabis Small Business Alliance | AI-Powered Business Growth Tools";
  const canonical = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  // ULTRA-COMPREHENSIVE SEO KEYWORDS - CCSBA & Cannabis Industry Focus
  const competitiveKeywords = [
    "CCSBA",
    "Connecticut Cannabis Small Business Alliance",
    "CCSBA AI tools",
    "cannabis business tools",
    "cannabis AI tools",
    "Connecticut cannabis",
    "cannabis small business",
    "aiwebtools.ai",
    "AIWEBTOOLS.AI",
    "aiwebtools",
    "AIWEBTOOLS",
    "aitoolwebsites.com",
    "AItoolwebsites.com",
    "ai web tools",
    "AI WEB TOOLS",
    "AI WEB TOOLS directory",
    "aiwebtools ai",
    "ai web tools ai",
    "best ai tools 2025",
    "ai tools directory",
    "better than toolify",
    "comprehensive ai tools",
    "verified ai tools",
    "ChatGPT alternatives",
    "top ai tools ranking",
    "professional ai tools",
    "enterprise ai solutions",
    "ai tools comparison",
    "trusted ai directory",
    "complete ai tools list",
    "ai tools marketplace",
    "curated ai tools",
    "aitools studio",
    "ai tools company",
    "ai web tools llc",
    "1000 ai tools",
    "free ai tools",
    "premium ai tools",
    "ai tools database",
    "ai tools catalog",
    "ai tools search",
    "ai tools discovery",
    "ai tools platform",
    "ai tools ecosystem",
    // CORE AI TERMS - CAST THE WIDEST NET
    "artificial intelligence tools",
    "AI software",
    "AI applications",
    "AI platforms",
    "AI solutions",
    "AI technology",
    "AI services",
    "AI products",
    "AI systems",
    "AI programs",
    "AI utilities",
    "AI resources",
    "AI innovations",
    "AI breakthroughs",
    "AI advances",
    // AI AGENTS & ASSISTANTS
    "ai agents",
    "AI assistants",
    "ai chatbots",
    "conversational ai",
    "virtual assistants",
    "ai companions",
    "smart assistants",
    "ai helpers",
    "digital assistants",
    "automated assistants",
    // MACHINE LEARNING & TECH
    "machine learning tools",
    "deep learning applications",
    "neural network software",
    "automation tools",
    "intelligent automation",
    "smart automation",
    "workflow automation",
    "process automation",
    "robotic process automation",
    "AI automation",
    // BUSINESS & PRODUCTIVITY
    "productivity ai tools",
    "business ai tools",
    "enterprise ai",
    "ai for business",
    "ai productivity",
    "work automation",
    "business automation",
    "office ai tools",
    "professional ai",
    "corporate ai solutions",
    // CREATIVE & CONTENT
    "creative ai tools",
    "content creation ai",
    "ai content generators",
    "ai writing tools",
    "ai copywriting",
    "ai content marketing",
    "creative automation",
    "design ai tools",
    "ai graphic design",
    "ai art generators",
    // MEDIA & MULTIMEDIA
    "video ai tools",
    "ai video editing",
    "ai video creation",
    "audio ai tools",
    "ai music generation",
    "ai voice synthesis",
    "image ai tools",
    "ai photo editing",
    "ai image generation",
    "ai image enhancement",
    // DATA & ANALYTICS
    "data ai tools",
    "ai analytics",
    "ai data analysis",
    "predictive analytics",
    "ai insights",
    "business intelligence ai",
    "ai reporting",
    "data science tools",
    "ai statistics",
    "smart analytics",
    // MARKETING & SALES
    "marketing ai tools",
    "ai marketing",
    "sales ai tools",
    "ai sales automation",
    "digital marketing ai",
    "ai advertising",
    "marketing automation",
    "lead generation ai",
    "customer service ai",
    "crm ai tools",
    // RESEARCH & DEVELOPMENT
    "research ai tools",
    "ai research",
    "academic ai tools",
    "scientific ai",
    "ai for research",
    "development ai tools",
    "coding ai tools",
    "programming ai",
    "developer ai tools",
    "ai code generation",
    // COMPETITIVE TERMS
    "ai directory",
    "ai tool finder",
    "ai software directory",
    "find ai tools",
    "discover ai tools",
    "ai tools list",
    "ai tools collection",
    "ai tools hub",
    "ai tools repository",
    "ai tools archive",
    ...keywords
  ];

  return (
    <Helmet>
      {/* Critical SEO Meta Tags for Ranking */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={competitiveKeywords.join(', ')} />
      <meta name="author" content="Connecticut Cannabis Small Business Alliance (CCSBA)" />
      <link rel="canonical" href={canonical} />
      
      {/* ENHANCED COMPETITIVE META TAGS FOR CCSBA CANNABIS INDUSTRY */}
      <meta name="application-name" content="CCSBA AI Tools Portal" />
      <meta name="subject" content="CCSBA AI Tools Portal - Connecticut Cannabis Small Business Alliance Member Resources" />
      <meta name="topic" content="CCSBA, Connecticut cannabis, cannabis AI tools, cannabis business tools, hemp, marijuana, dispensary tools, cultivation tools" />
      <meta name="summary" content="CCSBA AI Tools Portal - Connecticut Cannabis Small Business Alliance non-profit educational organization providing AI-powered tools to empower cannabis businesses from consumers to industry leaders. Together we grow." />
      <meta name="classification" content="Cannabis Industry, AI Tools, Business Resources, Non-Profit Education" />
      <meta name="designer" content="AIWebTools.AI for CCSBA" />
      <meta name="owner" content="Connecticut Cannabis Small Business Alliance" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={fullTitle} />
      <meta name="category" content="CCSBA - Cannabis Business AI Tools Directory" />
      <meta name="coverage" content="Connecticut, United States" />
      <meta name="distribution" content="Connecticut Cannabis Industry" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="Cannabis Business Owners, Dispensary Operators, Cultivators, Consumers, Industry Professionals" />
      <meta name="language" content="English" />
      <meta name="doc-type" content="CCSBA - Cannabis Business AI Tools Portal" />
      <meta name="doc-rights" content="Connecticut Cannabis Small Business Alliance" />
      <meta name="doc-class" content="Living Document" />
      
      {/* CRITICAL BRAND AND CANNABIS INDUSTRY META TAGS */}
      <meta name="brand" content="CCSBA AI Tools Portal" />
      <meta name="company" content="Connecticut Cannabis Small Business Alliance" />
      <meta name="expertise" content="Cannabis Business Tools, Cannabis Industry AI, Business Growth, Community Empowerment" />
      <meta name="specialty" content="Connecticut Cannabis Small Business Support and AI-Powered Business Tools" />
      <meta name="focus" content="CCSBA, Connecticut cannabis, cannabis business tools, cannabis AI, hemp industry, marijuana business" />
      <meta name="competitive-advantage" content="Non-profit educational organization dedicated to cannabis business empowerment through AI technology" />
      <meta name="unique-value" content="CCSBA offers comprehensive AI tools specifically curated for Connecticut cannabis businesses - from consumers to small business owners to industry leaders" />
      <meta name="primary-keywords" content="CCSBA, Connecticut cannabis, cannabis business tools, cannabis AI tools" />
      <meta name="target-ranking" content="#1 for CCSBA and Connecticut cannabis business tools keywords" />
      
      {/* Technical Performance Meta */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta httpEquiv="Cache-Control" content="no-transform" />
      <meta httpEquiv="Cache-Control" content="no-siteapp" />
      <meta name="format-detection" content="telephone=no, email=no" />
      <meta name="wap-font-scale" content="no" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="CCSBA AI Tools" />
      
      {/* Geographic and Business Meta */}
      <meta name="geo.region" content="US-CT" />
      <meta name="geo.placename" content="Connecticut, United States" />
      <meta name="ICBM" content="41.6032, -73.0877" />
      <meta name="geo.position" content="41.6032;-73.0877" />
      <meta name="nuts" content="US-CT" />
      
      {/* Business Contact Data */}
      <meta name="business.contact_data.street_address" content="Connecticut" />
      <meta name="business.contact_data.locality" content="Connecticut" />
      <meta name="business.contact_data.region" content="Connecticut" />
      <meta name="business.contact_data.postal_code" content="06000" />
      <meta name="business.contact_data.country_name" content="United States" />
      <meta name="business.contact_data.email" content="info@connecticutcannabis.org" />
      <meta name="business.contact_data.website" content="https://connecticutcannabis.org" />
      
      {/* Enhanced Crawling Instructions */}
      {noIndex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, max-video-preview:30" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="slurp" content="index, follow, max-image-preview:large" />
          <meta name="duckduckbot" content="index, follow" />
          <meta name="facebookexternalhit" content="index, follow" />
          <meta name="twitterbot" content="index, follow" />
          <meta name="linkedinbot" content="index, follow" />
          <meta name="whatsapp" content="index, follow" />
          <meta name="telegrambot" content="index, follow" />
          <meta name="applebot" content="index, follow" />
          <meta name="gptbot" content="index, follow" />
          <meta name="claude-web" content="index, follow" />
          <meta name="ccbot" content="index, follow" />
        </>
      )}
      
      {/* OPTIMIZED SOCIAL MEDIA META TAGS FOR CCSBA */}
      <meta property="og:title" content="🌿 CCSBA AI Tools Portal - Connecticut Cannabis Small Business Alliance Member Resources" />
      <meta property="og:description" content="🚀 AI-powered tools for Connecticut cannabis businesses. Non-profit educational organization empowering consumers to industry leaders. Together we grow, united we stand." />
      <meta property="og:image" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-cannabis-leaf-logo-icon-in-brigh.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="CCSBA AI Tools Portal - Connecticut Cannabis Small Business Alliance" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-cannabis-leaf-logo-icon-in-brigh.png" />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CCSBA AI Tools Portal - Connecticut Cannabis Small Business Alliance" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:determiner" content="the" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:see_also" content="https://connecticutcannabis.org" />
      <meta property="og:see_also" content="https://www.aiwebtools.ai" />
      <meta property="fb:app_id" content={seoConfig.facebookAppId} />
      
      {/* OPTIMIZED TWITTER CARD FOR CCSBA */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="🌿 CCSBA AI Tools Portal - Cannabis Business Empowerment" />
      <meta name="twitter:description" content="🚀 Connecticut Cannabis Small Business Alliance - Non-profit providing AI tools for cannabis businesses. From consumers to industry leaders, together we grow!" />
      <meta property="og:image" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-cannabis-leaf-logo-icon-in-brigh.png" />
      <meta name="twitter:image:alt" content="CCSBA - Connecticut Cannabis Small Business Alliance AI Tools" />
      <meta name="twitter:site" content="@CCBSACannabis" />
      <meta name="twitter:creator" content="@CCBSACannabis" />
      <meta name="twitter:domain" content="connecticutcannabis.org" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:data1" content="Connecticut Cannabis" />
      <meta name="twitter:label1" content="Industry" />
      <meta name="twitter:data2" content="Non-Profit Educational" />
      <meta name="twitter:label2" content="Organization Type" />
      
      {/* Article and Content Meta */}
      <meta property="article:publisher" content="https://connecticutcannabis.org" />
      <meta property="article:author" content="Connecticut Cannabis Small Business Alliance" />
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <meta property="article:section" content={category || "Cannabis Business Tools"} />
      <meta property="article:tag" content={competitiveKeywords.slice(0, 15).join(", ")} />
      
      {/* Mobile and PWA Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <meta name="msapplication-navbutton-color" content="#0891b2" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-tooltip" content="AI WEB TOOLS - Best AI Tools Directory with 1000+ curated tools" />
      
      {/* Security and Performance Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Enhanced DNS Prefetch and Preconnect */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//aitools.company" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      <link rel="dns-prefetch" href="//aitoolwebsites.com" />
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.bing.com" />
      <link rel="dns-prefetch" href="//search.yahoo.com" />
      <link rel="dns-prefetch" href="//duckduckgo.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://aitools.company" />
      <link rel="preconnect" href="https://www.aiwebtools.ai" />
      <link rel="preconnect" href="https://aitoolwebsites.com" />
      
      {/* Resource Hints for Performance */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" as="style" />
      <link rel="prefetch" href="/placeholder.svg" />
      
      {/* Alternate Languages and Feeds */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <link rel="alternate" type="application/rss+xml" title="AI WEB TOOLS RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="AI WEB TOOLS Atom Feed" href={`${seoConfig.siteUrl}/atom.xml`} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${seoConfig.siteUrl}/sitemap.xml`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
      
      {/* FAQ Structured Data */}
      {includeFAQ && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
      )}
      
      {/* Local Business Structured Data */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessStructuredData())}
        </script>
      )}
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="ai-web-tools-google-verification" />
      <meta name="msvalidate.01" content="ai-web-tools-bing-verification" />
      <meta name="yandex-verification" content="ai-web-tools-yandex-verification" />
      <meta name="p:domain_verify" content="ai-web-tools-pinterest-verification" />
      <meta name="alexaVerifyID" content="ai-web-tools-alexa-verification" />
      <meta name="norton-safeweb-site-verification" content="ai-web-tools-norton-verification" />
      
      {/* Additional Competitive Meta */}
      <meta name="news_keywords" content="AI tools, artificial intelligence, ChatGPT alternatives, best AI directory, AI web tools" />
      <meta name="standout" content={canonical} />
      <meta name="syndication-source" content="https://aitools.studio" />
      <meta name="original-source" content="https://aitools.studio" />
      <meta name="generator" content="AI WEB TOOLS Directory Platform" />
      
      {/* Cache Control for SEO */}
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="public, max-age=86400" />
    </Helmet>
  );
};

export default SEOHead;
