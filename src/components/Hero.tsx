
const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RA Enterprises
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">
              We create your imagination
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Transform your ideas into stunning visual reality. From business cards to billboards, 
              we bring creativity and professionalism to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Products
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Vector Graphic Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Vector Graphic SVG */}
                <div className="w-full h-96 flex items-center justify-center">
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 320 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Background Circle */}
                    <circle cx="160" cy="160" r="150" fill="url(#gradient1)" opacity="0.1"/>
                    
                    {/* Design Tools */}
                    {/* Pen Tool */}
                    <path d="M80 100 L120 60 L140 80 L100 120 Z" fill="url(#gradient2)"/>
                    <circle cx="130" cy="70" r="8" fill="#ffffff"/>
                    
                    {/* Ruler */}
                    <rect x="200" y="80" width="80" height="8" rx="4" fill="url(#gradient3)"/>
                    <rect x="205" y="82" width="2" height="4" fill="#ffffff"/>
                    <rect x="215" y="82" width="2" height="4" fill="#ffffff"/>
                    <rect x="225" y="82" width="2" height="4" fill="#ffffff"/>
                    <rect x="235" y="82" width="2" height="4" fill="#ffffff"/>
                    <rect x="245" y="82" width="2" height="4" fill="#ffffff"/>
                    
                    {/* Color Palette */}
                    <circle cx="70" cy="180" r="12" fill="#FF6B6B"/>
                    <circle cx="100" cy="180" r="12" fill="#4ECDC4"/>
                    <circle cx="130" cy="180" r="12" fill="#45B7D1"/>
                    <circle cx="160" cy="180" r="12" fill="#96CEB4"/>
                    <circle cx="190" cy="180" r="12" fill="#FFEAA7"/>
                    
                    {/* Business Card */}
                    <rect x="200" y="140" width="60" height="36" rx="4" fill="url(#gradient4)" stroke="url(#gradient2)" strokeWidth="2"/>
                    <rect x="205" y="145" width="25" height="3" rx="1.5" fill="#ffffff" opacity="0.8"/>
                    <rect x="205" y="152" width="40" height="2" rx="1" fill="#ffffff" opacity="0.6"/>
                    <rect x="205" y="158" width="35" height="2" rx="1" fill="#ffffff" opacity="0.6"/>
                    <rect x="205" y="164" width="20" height="2" rx="1" fill="#ffffff" opacity="0.6"/>
                    
                    {/* Banner/Flex */}
                    <rect x="80" y="220" width="100" height="20" rx="2" fill="url(#gradient5)"/>
                    <rect x="85" y="225" width="30" height="3" rx="1.5" fill="#ffffff" opacity="0.8"/>
                    <rect x="85" y="232" width="40" height="2" rx="1" fill="#ffffff" opacity="0.6"/>
                    
                    {/* Light Board */}
                    <rect x="200" y="200" width="80" height="50" rx="8" fill="url(#gradient6)" stroke="url(#gradient2)" strokeWidth="3"/>
                    <circle cx="220" cy="215" r="3" fill="#FFD93D"/>
                    <circle cx="235" cy="215" r="3" fill="#FFD93D"/>
                    <circle cx="250" cy="215" r="3" fill="#FFD93D"/>
                    <circle cx="265" cy="215" r="3" fill="#FFD93D"/>
                    <rect x="210" y="230" width="50" height="4" rx="2" fill="#ffffff" opacity="0.9"/>
                    <rect x="210" y="238" width="40" height="3" rx="1.5" fill="#ffffff" opacity="0.7"/>
                    
                    {/* Creative Elements */}
                    <path d="M50 50 Q60 40 70 50 T90 50" stroke="url(#gradient2)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M250 260 Q260 250 270 260 T290 260" stroke="url(#gradient3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    
                    {/* Sparkles */}
                    <path d="M120 40 L122 45 L127 43 L122 48 L120 53 L118 48 L113 43 L118 45 Z" fill="url(#gradient7)"/>
                    <path d="M280 120 L281.5 123 L284.5 121.5 L281.5 126 L280 129 L278.5 126 L275.5 121.5 L278.5 123 Z" fill="url(#gradient7)"/>
                    <path d="M40 280 L41.5 283 L44.5 281.5 L41.5 286 L40 289 L38.5 286 L35.5 281.5 L38.5 283 Z" fill="url(#gradient7)"/>
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea"/>
                        <stop offset="100%" stopColor="#764ba2"/>
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea"/>
                        <stop offset="100%" stopColor="#764ba2"/>
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f093fb"/>
                        <stop offset="100%" stopColor="#f5576c"/>
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4facfe"/>
                        <stop offset="100%" stopColor="#00f2fe"/>
                      </linearGradient>
                      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#43e97b"/>
                        <stop offset="100%" stopColor="#38f9d7"/>
                      </linearGradient>
                      <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fa709a"/>
                        <stop offset="100%" stopColor="#fee140"/>
                      </linearGradient>
                      <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffecd2"/>
                        <stop offset="100%" stopColor="#fcb69f"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Creative Design & Printing Solutions
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Business Cards • Banners • Wedding Cards • Light Boards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
