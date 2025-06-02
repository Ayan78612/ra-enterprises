
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RA</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">RA Enterprises</h3>
                  <p className="text-sm text-slate-400">Professional Advertising Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Your trusted partner for comprehensive advertising and digital solutions. 
                We deliver professional results that drive business growth and success.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Business Cards & Corporate Stationery</li>
                <li>Large Format Printing & Banners</li>
                <li>Illuminated Signage Solutions</li>
                <li>Wedding & Event Invitations</li>
                <li>Premium Acrylic Displays</li>
                <li>Digital Marketing & Web Development</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
              <div className="space-y-2 text-slate-400">
                <p>Phone: +91 9594364200 / +91 7500272759</p>
                <p>Email: raent.chembur@gmail.com</p>
                <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RA Enterprises. All rights reserved. | Professional Advertising Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
