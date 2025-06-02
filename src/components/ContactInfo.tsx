
import { Contact as ContactIcon, Layout, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="bg-blue-900 p-3 rounded-lg text-white mr-4">
            <ContactIcon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-800">Contact Information</h3>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
              <p className="text-slate-600">+91 9594364200 / +91 7500272759</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
              <p className="text-slate-600">raent.chembur@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
              <p className="text-slate-600">
                Vatsalatai Naik Nagar<br />
                Pipeline Road, Chembur<br />
                Mumbai, Maharashtra - 400071
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
              <p className="text-slate-600">
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="bg-slate-700 p-3 rounded-lg text-white mr-4">
            <Layout className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-800">Why Choose RA Enterprises?</h3>
        </div>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-slate-600">Premium quality materials and professional finishing</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-slate-600">Fast turnaround with guaranteed delivery timelines</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-slate-600">Competitive pricing with transparent quotations</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-slate-600">Expert design consultation and creative services</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-slate-600">Comprehensive digital and print solutions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
