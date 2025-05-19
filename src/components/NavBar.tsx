
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-black/50 backdrop-blur-sm border-b border-primary/20 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-medieval text-2xl">LoreWeaver</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="link" className="text-white hover:text-primary">Home</Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="link" className="text-white hover:text-primary">Campaigns</Button>
              </Link>
              <Link to="/create">
                <Button variant="link" className="text-white hover:text-primary">Create</Button>
              </Link>
              <Link to="/play">
                <Button variant="default" className="bg-fantasy-purple hover:bg-fantasy-purple/80">Play Now</Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-primary hover:bg-black/20">Home</Button>
            </Link>
            <Link to="/campaigns" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-primary hover:bg-black/20">Campaigns</Button>
            </Link>
            <Link to="/create" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:text-primary hover:bg-black/20">Create</Button>
            </Link>
            <Link to="/play" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full justify-start bg-fantasy-purple hover:bg-fantasy-purple/80">Play Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
