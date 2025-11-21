import { Link } from "react-router-dom";
import { Search, Grid3X3, Star, Mail, ArrowRight, Heart, Zap, Globe, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";

const OurStoryPage = () => {
  const handleContactEmail = () => {
    const subject = encodeURIComponent('Contact AIWebTools.ai - General Inquiry');
    const body = encodeURIComponent(`Hi AIWebTools.ai Team,

I hope this message finds you well. I'm reaching out regarding:

1. My inquiry/question:
   [Please describe your question or inquiry here]

2. How I discovered AIWebTools.ai:
   [Please tell us how you found our platform]

3. My interest in AI tools:
   [Please share what brings you to explore AI tools]

4. Specific tools or services I'm interested in:
   [Please list any specific tools or services that caught your attention]

5. How AIWebTools.ai can help me:
   [Please describe what you're hoping to accomplish with AI tools]

Additional Information:
[Any other details you'd like to share]

Thank you for your time and for creating such an amazing platform!

Best regards,
[Your name]
[Your contact information - optional]`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };
  return (
    <>
      <SEOHead 
        title="Our Story – CCSBA | Connecticut Cannabis Small Business Alliance"
        description="Learn about CCSBA: Connecticut Cannabis Small Business Alliance non-profit educational organization dedicated to empowering cannabis businesses through AI technology. For adults 18+."
        keywords={["CCSBA", "Connecticut Cannabis Small Business Alliance", "cannabis business", "cannabis AI tools", "Connecticut cannabis", "cannabis education", "cannabis advocacy"]}
      />
      
      <AnimatedBackground />
      <Header />
      
      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 glow-text-effect">
              OUR STORY
            </h1>
            <p className="text-xl md:text-2xl text-green-300 font-light tracking-wide mb-8">
              🌿 Connecticut Cannabis Small Business Alliance 🌿
            </p>
            <p className="text-lg md:text-xl text-cyan-300 font-light tracking-wide mb-8">
              Empowering Cannabis Businesses Through AI Innovation
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                asChild 
                className="bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 text-cyan-300"
              >
                <Link to="/main-category/ALL%20AI%20TOOLS">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Browse All Tools
                </Link>
              </Button>
              <Button 
                asChild 
                className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300"
              >
                <Link to="/category/ai-originals">
                  <Star className="w-4 h-4 mr-2" />
                  AIWebTools Originals
                </Link>
              </Button>
            </div>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <GlobalSearchBar />
            </div>
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Opening */}
            <div className="text-center bg-gradient-to-r from-green-900/40 to-lime-900/40 p-8 rounded-2xl border-2 border-green-500/30">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light mb-4">
                <span className="text-green-400 font-bold text-2xl">CCSBA</span> (Connecticut Cannabis Small Business Alliance) is a non-profit educational organization dedicated to empowering cannabis businesses—from consumers to industry leaders.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                🌿 <span className="text-lime-400 font-semibold">Together we grow. United we stand.</span> 🌿
              </p>
            </div>

            <Separator className="bg-cyan-500/20" />

            {/* The Beginning */}
            <div className="bg-gradient-to-r from-green-900/50 to-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 flex items-center">
                <span className="text-4xl mr-3">🌱</span>
                The Beginning
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                CCSBA was born from the Connecticut cannabis community's need for support, education, and advocacy. As a non-profit organization, we recognized that cannabis businesses face unique challenges and deserve access to cutting-edge tools to thrive.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Through a generous donation from AIWebTools.AI, we now offer our members access to 1,300+ AI-powered tools designed to help cannabis businesses grow, innovate, and succeed.
              </p>
            </div>

            {/* The Mission */}
            <div className="bg-gradient-to-r from-green-900/40 to-lime-900/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                <span className="text-green-400 font-bold">CCSBA's mission</span> is to empower Connecticut cannabis businesses through education, advocacy, and access to innovative technology.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Whether you're a consumer, small business owner, cultivator, or industry leader, these AI tools are here to support your cannabis business journey.
              </p>
              <div className="bg-black/50 border-l-4 border-lime-400 pl-6 py-4 mb-6">
                <p className="text-lime-300 font-medium italic text-lg">
                  🌿 Free AI tools donated by AIWebTools.AI. Educational and informational purposes only. For adults 18+.
                </p>
              </div>
              <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-4">
                <p className="text-red-300 font-semibold text-sm mb-2">⚠️ IMPORTANT DISCLAIMER:</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These AI tools are provided for <span className="text-yellow-400 font-semibold">educational and informational purposes only</span>. Users must be <span className="text-yellow-400 font-semibold">18 years or older</span>. We strongly encourage everyone to <span className="text-cyan-400 font-semibold">verify all AI-generated outputs for accuracy</span> and use AI technology <span className="text-green-400 font-semibold">ethically and responsibly</span>.
                </p>
              </div>
            </div>

            {/* Legislation Writer GPT - WE THE PEOPLE AI */}
            <div className="bg-gradient-to-r from-blue-900/30 to-gray-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400 flex items-center justify-center">
                  <span className="text-4xl mr-3">⚖️</span>
                  The People's Legislative Tool
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Born from the corruption I witnessed, this tool empowers <span className="text-blue-400 font-bold">WE THE PEOPLE</span> to draft our own legislation. 
                  Now that we can write the laws ourselves, lawmakers must ask what purpose they serve if they don't serve their people.
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30" style={{ aspectRatio: '16/9' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/poOGR-6bb2g?autoplay=0&mute=0&controls=1&rel=0&hd=1&vq=hd1080&quality=hd1080&enablejsapi=1&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark"
                  title="Legislation Writer GPT - WE THE PEOPLE AI"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Legislation Writer GPT Description */}
              <div className="mt-8 bg-black/50 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4">⚖️ Legislation Writer GPT</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I assist in drafting complete legislation page by page with clear, precise legal language and seamless continuity. This tool empowers citizens to draft their own bills, statutes, and legal frameworks that meet legislative standards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["legislation", "legal writing", "government", "policy", "law", "political", "civic", "we the people"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold w-full text-lg py-6"
                >
                  <a 
                    href="https://legislationwritergpt.lovable.app/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Scale className="w-5 h-5 mr-3" />
                    WE THE PEOPLE AI
                  </a>
                </Button>
              </div>
            </div>


            {/* Soul Map GPT - My Story in Video */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-400 flex items-center justify-center">
                  <span className="text-4xl mr-3">🔮</span>
                  My Story in Motion
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  This video represents my journey - the spiritual awakening that led to everything you see here. 
                  Soul Map GPT was born from this same vision, using ancient wisdom to help you find your way home.
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-500/30" style={{ aspectRatio: '16/9' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/d3uaQz7oRAs?autoplay=0&mute=0&controls=1&rel=0&loop=0&hd=1&vq=hd1080&quality=hd1080&enablejsapi=1&playsinline=1&modestbranding=1&autohide=1&showinfo=0&fs=1&iv_load_policy=3&cc_load_policy=0&hl=en&color=red&theme=dark"
                  title="Soul Map GPT - My Story"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Soul Map GPT Description */}
              <div className="mt-8 bg-black/50 border border-indigo-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">🔮 Soul Map GPT</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Soul Map GPT uses Gematria, Numerology, and Soul Mapping based on birthplace, time, and name to perform advanced calculations and read the stars based on your essence. Discover your spiritual blueprint through ancient wisdom and mystical mathematics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["gematria", "numerology", "soul mapping", "astrology", "spiritual blueprint", "essence reading", "mystical mathematics"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold w-full"
                  onClick={() => window.open('https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools', '_blank')}
                >
                  <a 
                    href="https://chatgpt.com/g/g-68a24b677890819181b9e47f4d1dd006-soul-scan-gpt-a-way-to-find-your-way-home/?via=aiwebtools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Discover Your Soul Map
                  </a>
                </Button>
              </div>
            </div>

            {/* The Approach */}
            <div className="text-center bg-black/70 border border-yellow-500/30 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-yellow-400">A Simple Approach</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                This isn't a corporate project or a funded startup. It's a collection of useful tools, gathered and organized to save you time.
              </p>
              <p className="text-xl font-medium text-white mb-4">
                Every tool here has been tested and curated to help you get things done.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                The goal is simple: provide access to AI tools that can help with real tasks, at no cost.
              </p>
            </div>

            {/* Why AI */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-green-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 flex items-center">
                <Zap className="w-8 h-8 mr-3" />
                Why AI?
              </h2>
              <p className="text-xl font-medium text-white mb-6">
                AI tools can help us work smarter and focus on what matters most.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                They can save time, spark creativity, and open new possibilities for learning and building.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-300">🤖 Chat & Assistants</h3>
                  <p className="text-gray-400">Turn your ideas into reality</p>
                  
                  <h3 className="text-lg font-semibold text-green-300">📚 Education Tools</h3>
                  <p className="text-gray-400">Help you grow and learn</p>
                  
                  <h3 className="text-lg font-semibold text-purple-300">🎨 Creative Tools</h3>
                  <p className="text-gray-400">Create without limits</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-300">💼 Business Tools</h3>
                  <p className="text-gray-400">Scale your vision</p>
                  
                  <h3 className="text-lg font-semibold text-red-300">⭐ AI Originals</h3>
                  <p className="text-gray-400">Custom-built tools from me, made for you</p>
                  
                  <h3 className="text-lg font-semibold text-blue-300">🚀 1,300+ Tools</h3>
                  <p className="text-gray-400">All free, all open, all waiting for you</p>
                </div>
              </div>
            </div>

            {/* The Anchor Quote - Cannabis Themed */}
            <div className="relative bg-gradient-to-r from-green-900/30 via-lime-900/30 to-green-900/30 backdrop-blur-sm border border-green-500/50 rounded-lg p-8 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-lime-500/5 to-green-500/5 blur-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/80 to-transparent"></div>
              
              <h2 className="relative text-2xl md:text-3xl font-bold mb-6 text-green-400">What CCSBA Offers</h2>
              <div className="relative border border-green-500/30 bg-black/40 backdrop-blur-sm rounded-md p-6">
                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 font-light mb-6 max-w-3xl mx-auto">
                  <span className="text-green-400 text-2xl">"</span>A comprehensive AI tools portal donated by AIWebTools.AI to support Connecticut cannabis businesses. These resources empower our community to grow, innovate, and thrive in the cannabis industry.<span className="text-green-400 text-2xl">"</span>
                </blockquote>
                <p className="text-green-400 text-lg font-medium">— Connecticut Cannabis Small Business Alliance</p>
              </div>
              <p className="relative text-white text-2xl font-bold mt-4">🌿 Grow. Unite. Succeed. 🌿</p>
            </div>

            {/* What's Here */}
            <div className="bg-black/70 border border-red-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 flex items-center">
                <Heart className="w-8 h-8 mr-3" />
                What You'll Find Here
              </h2>
              <p className="text-xl font-medium text-white mb-6">Over 1,300 AI tools across multiple categories:</p>
              
              <div className="space-y-3 text-lg text-gray-300">
                <p>• Chat assistants and productivity tools</p>
                <p>• Creative and content generation tools</p>
                <p>• Educational and research resources</p>
                <p>• Business and development tools</p>
              </div>
              
              <p className="text-xl font-medium text-cyan-400 mt-6">
                All organized, searchable, and free to use.
              </p>
            </div>

            {/* Get Started */}
            <div className="text-center bg-gradient-to-r from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 flex items-center justify-center">
                <Globe className="w-10 h-10 mr-3" />
                Get Started
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Browse the collection, find tools that fit your needs, and start creating.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Whether you're learning, building a project, or growing a business, these tools are here to help.
              </p>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
                  <Link to="/main-category/ALL%20AI%20TOOLS">
                    <Search className="w-4 h-4 mr-2" />
                    Browse All Tools
                  </Link>
                </Button>
                
                <Button asChild className="bg-purple-600 hover:bg-purple-500 text-white font-semibold">
                  <Link to="/#categories">
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Search by Category
                  </Link>
                </Button>
                
                <Button asChild className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold">
                  <Link to="/category/AIWebTools%20GPTs%20Collection">
                    <Star className="w-4 h-4 mr-2" />
                    AIWebTools Originals
                  </Link>
                </Button>
                
                <Button onClick={handleContactEmail} className="bg-green-600 hover:bg-green-500 text-white font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact AIWebTools.ai
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OurStoryPage;