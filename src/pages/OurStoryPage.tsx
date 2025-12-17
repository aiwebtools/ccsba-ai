import { Link } from "react-router-dom";
import { Search, Grid3X3, Star, Mail, ArrowRight, Heart, Zap, Globe, Users, Leaf, Shield, Target, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import { createTimePortalEffect } from "@/utils/timeEffects";
import ccsbaLogo from "@/assets/ccsba-official-logo.png";

const OurStoryPage = () => {
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    createTimePortalEffect(url);
  };

  const handleContactEmail = () => {
    const subject = encodeURIComponent('Contact CCSBA - General Inquiry');
    const body = encodeURIComponent(`Hi CCSBA Team,

I hope this message finds you well. I'm reaching out regarding:

1. My inquiry/question:
   [Please describe your question or inquiry here]

2. My interest in CCSBA membership:
   [Please share your interest in joining or learning more]

3. How CCSBA can help my cannabis business:
   [Please describe what you're hoping to accomplish]

Thank you for your time!

Best regards,
[Your name]
[Your contact information]`);
    
    const mailtoUrl = `mailto:info@connecticutcannabis.org?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <SEOHead 
        title="Our Mission – CCSBA | Connecticut Cannabis Small Business Alliance"
        description="Learn about CCSBA: Connecticut Cannabis Small Business Alliance, a non-profit dedicated to empowering Connecticut cannabis businesses through education, advocacy, and AI-powered tools donated by AIWebTools.AI."
        keywords={["CCSBA", "Connecticut Cannabis Small Business Alliance", "cannabis business", "Connecticut cannabis", "cannabis education", "cannabis advocacy", "AIWebTools donation"]}
      />
      
      <AnimatedBackground />
      <Header />
      
      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            {/* CCSBA Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={ccsbaLogo} 
                alt="CCSBA - Connecticut Cannabis Small Business Alliance" 
                className="h-32 md:h-40 w-auto drop-shadow-2xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 via-lime-400 to-green-500 bg-clip-text text-transparent">
              OUR MISSION
            </h1>
            <p className="text-xl md:text-2xl text-green-300 font-light tracking-wide mb-4">
              Connecticut Cannabis Small Business Alliance
            </p>
            <p className="text-lg md:text-xl text-lime-300 font-semibold tracking-wide mb-8">
              🌿 Together We Grow • United We Stand • Empowering Our Community 🌿
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                asChild 
                className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300"
              >
                <Link to="/main-category/ALL%20AI%20TOOLS">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Browse Member Tools
                </Link>
              </Button>
              <Button 
                onClick={(e) => handleExternalLink("https://ctcannabisalliance.org", e as any)}
                className="bg-lime-600/20 hover:bg-lime-600/30 border border-lime-500/30 text-lime-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                Visit CCSBA Website
              </Button>
            </div>

            {/* Global Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <GlobalSearchBar />
            </div>
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Who We Are */}
            <div className="text-center bg-gradient-to-r from-green-900/40 to-lime-900/40 p-8 rounded-2xl border-2 border-green-500/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light mb-4">
                <span className="text-green-400 font-bold">CCSBA</span> (Connecticut Cannabis Small Business Alliance) is a <span className="text-lime-400 font-semibold">non-profit organization</span> dedicated to supporting and empowering cannabis businesses throughout Connecticut.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                We serve our community—from consumers and entrepreneurs to cultivators and industry leaders—providing the resources, education, and advocacy needed to thrive in Connecticut's cannabis industry.
              </p>
            </div>

            <Separator className="bg-green-500/20" />

            {/* Our Mission */}
            <div className="bg-gradient-to-r from-green-900/50 to-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 flex items-center">
                <Target className="w-8 h-8 mr-3" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                CCSBA's mission is to <span className="text-green-400 font-semibold">empower Connecticut cannabis businesses</span> through:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-green-300">Community Building</h3>
                  </div>
                  <p className="text-gray-400">Connecting cannabis professionals, sharing knowledge, and fostering collaboration across Connecticut.</p>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Zap className="w-6 h-6 text-lime-400 mr-3" />
                    <h3 className="text-lg font-semibold text-lime-300">Education & Resources</h3>
                  </div>
                  <p className="text-gray-400">Providing tools, training, and educational resources to help businesses grow and succeed.</p>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-green-300">Advocacy</h3>
                  </div>
                  <p className="text-gray-400">Representing the interests of small cannabis businesses in policy discussions and legislative matters.</p>
                </div>
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Leaf className="w-6 h-6 text-lime-400 mr-3" />
                    <h3 className="text-lg font-semibold text-lime-300">Industry Growth</h3>
                  </div>
                  <p className="text-gray-400">Supporting sustainable growth and innovation within Connecticut's cannabis industry.</p>
                </div>
              </div>
            </div>

            {/* AI Tools Portal - Thank You Section */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-green-900/30 backdrop-blur-sm border-2 border-cyan-500/40 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400 flex items-center justify-center">
                  <HandHeart className="w-8 h-8 mr-3" />
                  AI Tools Portal for Our Members
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  A generous gift to empower Connecticut cannabis businesses
                </p>
              </div>
              
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  CCSBA is proud to offer our members access to this comprehensive <span className="text-green-400 font-semibold">AI Tools Portal</span> featuring <span className="text-cyan-400 font-bold">2,195+ AI-powered tools</span> designed to help cannabis businesses grow, innovate, and succeed.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  These tools cover everything from business planning and marketing to compliance, cultivation assistance, and customer engagement—all curated specifically to support the unique needs of cannabis professionals.
                </p>
              </div>

              {/* Thank You to AIWebTools */}
              <div className="bg-gradient-to-r from-green-900/50 to-lime-900/50 border-2 border-lime-500/40 rounded-xl p-8 text-center">
                <div className="mb-6">
                  <Heart className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold text-lime-400 mb-4">
                    Special Thank You
                  </h3>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                  CCSBA extends our sincere gratitude to <button onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e)} className="text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors">AI Web Tools LLC (AIWebTools.AI)</button> for their generous donation of this AI tools platform to our organization.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  This incredible gift empowers our members with cutting-edge technology and resources that would otherwise be costly or inaccessible. AIWebTools.AI designed and built this entire platform from the ground up, then donated it freely to CCSBA to support Connecticut's cannabis community.
                </p>
                <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 mb-6">
                  <p className="text-cyan-300 font-semibold text-lg">
                    🙏 Thank you, AIWebTools.AI, for believing in our mission and investing in our community's success!
                  </p>
                </div>
                <Button 
                  onClick={(e) => handleExternalLink("https://www.aiwebtools.ai", e as any)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit AIWebTools.AI
                </Button>
              </div>
            </div>

            {/* Important Disclaimers */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Important Information
              </h2>
              <div className="space-y-4">
                <div className="bg-black/50 border-l-4 border-yellow-400 pl-6 py-4">
                  <p className="text-yellow-300 font-medium text-lg mb-2">📋 Educational & Informational Purposes Only</p>
                  <p className="text-gray-300">These AI tools are provided for educational and informational purposes only. Always verify AI-generated outputs for accuracy and consult with professionals for business, legal, or medical decisions.</p>
                </div>
                <div className="bg-black/50 border-l-4 border-orange-400 pl-6 py-4">
                  <p className="text-orange-300 font-medium text-lg mb-2">🔞 Adults Only (18+)</p>
                  <p className="text-gray-300">This platform is intended for adults 18 years of age or older. By using these tools, you confirm that you meet this age requirement.</p>
                </div>
                <div className="bg-black/50 border-l-4 border-green-400 pl-6 py-4">
                  <p className="text-green-300 font-medium text-lg mb-2">✅ Responsible AI Use</p>
                  <p className="text-gray-300">We encourage all users to use AI technology ethically and responsibly. AI is a powerful tool, but human judgment and oversight remain essential.</p>
                </div>
              </div>
            </div>

            {/* Join Us */}
            <div className="text-center bg-gradient-to-r from-green-900/50 via-lime-900/50 to-green-900/50 backdrop-blur-sm border-2 border-green-500/40 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
                Join CCSBA Today
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
                Become part of Connecticut's premier cannabis business alliance. Together, we can build a stronger, more prosperous cannabis industry for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={(e) => handleExternalLink("https://ctcannabisalliance.org", e as any)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg py-6 px-8"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit CTCannabisAlliance.org
                </Button>
                <Button 
                  onClick={handleContactEmail}
                  className="bg-lime-600 hover:bg-lime-500 text-white font-bold text-lg py-6 px-8"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-lime-400 mt-8">
                🌿 Together We Grow 🌿
              </p>
            </div>

            {/* Browse Tools CTA */}
            <div className="text-center py-8">
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 text-white font-bold text-xl py-8 px-12 rounded-xl shadow-lg shadow-green-500/30"
              >
                <Link to="/main-category/ALL%20AI%20TOOLS">
                  <Grid3X3 className="w-6 h-6 mr-3" />
                  Explore 2,195+ AI Tools for Members
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OurStoryPage;
