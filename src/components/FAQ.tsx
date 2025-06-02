
import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of professional printing services do you offer?",
      answer: "We provide a comprehensive range of professional printing and advertising services including business cards, large format banners, illuminated light boards, custom bill books, wedding invitations, presentation displays, premium acrylic signage, digital marketing solutions, and web development services."
    },
    {
      question: "What are your standard turnaround times for projects?",
      answer: "Our turnaround times vary by project complexity and scope. Business cards typically require 2-3 business days, while larger installations like light boards may take 5-7 business days. Digital marketing campaigns can be launched within 24-48 hours. We also offer express services for urgent requirements."
    },
    {
      question: "Do you provide comprehensive design and consultation services?",
      answer: "Yes, our experienced design team offers complete creative services from concept to completion. We provide professional consultation, brand development, custom design creation, and strategic guidance to ensure your project achieves maximum impact and aligns with your business objectives."
    },
    {
      question: "What are your minimum order requirements?",
      answer: "Minimum order quantities vary by product type. Business cards start at 100 pieces, while digital services and custom signage can accommodate single units. We work with businesses of all sizes and can provide flexible solutions to meet your specific requirements."
    },
    {
      question: "Do you offer professional installation and setup services?",
      answer: "Absolutely. We provide complete installation services for light boards, large format signage, and display systems. Our certified installation team ensures proper placement, secure mounting, and optimal positioning for maximum visibility and impact."
    },
    {
      question: "What payment options and terms do you accept?",
      answer: "We accept multiple payment methods including cash, bank transfers, UPI, and all major credit/debit cards. For corporate clients and large projects, we offer flexible payment terms including advance booking options and milestone-based payments."
    },
    {
      question: "Can we review samples or proofs before final production?",
      answer: "Certainly. We strongly recommend proof approval for all projects. We provide high-resolution digital proofs and, when appropriate, physical samples to ensure complete satisfaction before proceeding with full production. This quality assurance step is included in our standard process."
    },
    {
      question: "Do you offer volume discounts for bulk orders?",
      answer: "Yes, we provide attractive volume pricing for bulk orders across all our services. Our pricing structure rewards larger quantities with better per-unit costs. Contact our sales team for customized quotes based on your specific volume requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
            Frequently Asked <span className="text-blue-900">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find comprehensive answers to common questions about our professional services, processes, and business approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-inset rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-900 p-2 rounded-lg text-white mr-4 flex-shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="ml-14 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6 text-lg">Need additional information? Our professional team is ready to assist you.</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
