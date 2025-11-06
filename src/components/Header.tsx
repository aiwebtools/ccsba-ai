import { useNavigate } from "react-router-dom";
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import DesktopMenu from "./header/DesktopMenu";
import TabletMenu from "./header/TabletMenu";
import GlobalSearchBar from "./GlobalSearchBar";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 w-full z-[100] bg-black/95 border-b border-cyan-500/30 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[60px]">
          {/* Mobile: Menu button on left, Logo in center, Home button on right */}
          <div className="flex items-center gap-2 md:hidden">
            <MobileMenu />
            <Logo />
          </div>
          
          {/* Mobile: Home button on right */}
          <button 
            onClick={handleHomeClick}
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg transition-all"
            aria-label="Home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </button>
          
          {/* Desktop/Tablet: Logo on left */}
          <div className="hidden md:block">
            <Logo />
          </div>
          
          <div className="flex items-center gap-3">
            <Navigation />
            <DesktopMenu />
            <TabletMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
