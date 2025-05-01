
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Folder } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A robust e-commerce solution with advanced product filtering, cart management, and secure checkout.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UX/UI Design",
    description: "Interactive financial analytics dashboard with data visualization and real-time monitoring tools.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile Development",
    description: "User-friendly mobile application for tracking fitness goals, nutrition, and workout progress.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 4,
    title: "Supply Chain Management",
    category: "Enterprise Solutions",
    description: "End-to-end supply chain solution with inventory tracking, logistics optimization, and analytics.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 5,
    title: "AI Content Generator",
    category: "Artificial Intelligence",
    description: "Advanced AI-powered platform for generating marketing content, articles, and creative writing.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    category: "Web Development",
    description: "Property listing platform with advanced search, virtual tours, and agent connection features.",
    image: "/placeholder.svg",
    link: "#"
  }
];

const categories = ["All", "Web Development", "UX/UI Design", "Mobile Development", "Enterprise Solutions", "Artificial Intelligence"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/2 bg-purple-50/50 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray mb-8">
            Explore our diverse portfolio of successful digital solutions
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white shadow-md' 
                    : 'bg-gray-100 text-syndicate-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-on-scroll group" 
              style={{animationDelay: `${index * 100}ms`}}
            >
              <a href={item.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-syndicate-blue/20 to-syndicate-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-syndicate-dark z-20">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-syndicate-blue transition-colors">{item.title}</h3>
                    <p className="text-sm text-syndicate-gray mb-4">{item.description}</p>
                    <div className="flex items-center text-syndicate-blue font-medium text-sm">
                      <span>View Project</span>
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-on-scroll">
          <Button asChild className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 shadow-md shadow-syndicate-blue/20 px-8 py-6 h-auto text-base">
            <a href="#contact">
              Start Your Project <ArrowRight size={18} className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
