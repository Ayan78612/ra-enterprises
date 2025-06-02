
import { Image, Layout, Clipboard, Globe, BarChart2 } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const Products = () => {
  const products = [
    {
      name: "Business Cards",
      description: "Professional business cards that make a lasting first impression",
      icon: <Image className="w-6 h-6" />,
      color: "bg-blue-900",
      imageUrl: "https://images.unsplash.com/photo-1580032791554-0d80493499c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?"
    },
    {
      name: "Flex/Banner",
      description: "Large format printing for maximum visibility and brand impact",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-slate-700",
      imageUrl:"https://images.unsplash.com/photo-1693031630369-bd429a57f115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?"
    },
    {
      name: "Light Board / Neon Board",
      description: "Illuminated signage solutions for 24/7 brand visibility",
      icon: <Image className="w-6 h-6" />,
      color: "bg-blue-800",
      imageUrl: "https://plus.unsplash.com/premium_photo-1675278299431-ed806c529207?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?"
    },
    {
      name: "Bill Book",
      description: "Custom invoice books and receipt pads for your business",
      icon: <Clipboard className="w-6 h-6" />,
      color: "bg-slate-600",
      imageUrl: "https://cdn.printshoppy.com/image/cache/catalog/product-image/stationery/bill-book/bill-book-101-600x800.png?w=400&h=300&fit=crop"
    },
    {
      name: "Wedding Cards",
      description: "Elegant invitation cards for your most important celebrations",
      icon: <Image className="w-6 h-6" />,
      color: "bg-rose-700",
      imageUrl: "https://images.unsplash.com/photo-1740511365551-3c8130ef2a62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?"
    },
    {
      name: "Clip On Board",
      description: "Portable display solutions for presentations and events",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-slate-800",
      imageUrl: "https://brandprofesor.com/wp-content/uploads/2021/09/LED-Clip-On.png?fit=crop"
    },
    {
      name: "Acrylic Board",
      description: "Premium acrylic displays with crystal clear finish",
      icon: <Image className="w-6 h-6" />,
      color: "bg-blue-700",
      imageUrl: "https://metabranding.in/wp-content/uploads/2023/08/Acrylic-Sign-Board.webp?w=400&h=300&fit=crop"
    },
    {
      name: "Digital Marketing",
      description: "Strategic online campaigns to boost your digital presence",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "bg-emerald-700",
      imageUrl: "https://digitallearning.eletsonline.com/wp-content/uploads/2019/04/Digital-Marketing.jpg?w=400&h=300&fit=crop"
    },
    {
      name: "Web Development",
      description: "Professional websites and web applications for your business",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-indigo-700",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
            Our Professional <span className="text-blue-900">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive advertising and digital solutions designed to elevate your business presence and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg ${product.color} text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request Professional Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
