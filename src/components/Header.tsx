
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RA</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800">RA Enterprises</h1>
              <p className="text-sm text-slate-500">Professional Advertising Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="text-left text-slate-700 hover:text-blue-900 transition-colors font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium w-fit"
              >
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
