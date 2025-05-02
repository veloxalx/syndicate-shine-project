
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A robust e-commerce solution with advanced product filtering, cart management, and secure checkout.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UX/UI Design",
    description: "Interactive financial analytics dashboard with data visualization and real-time monitoring tools.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["Figma", "Adobe XD", "Sketch", "React"]
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile Development",
    description: "User-friendly mobile application for tracking fitness goals, nutrition, and workout progress.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["Flutter", "Firebase", "TensorFlow", "REST API"]
  },
  {
    id: 4,
    title: "Supply Chain Management",
    category: "Enterprise Solutions",
    description: "End-to-end supply chain solution with inventory tracking, logistics optimization, and analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
  },
  {
    id: 5,
    title: "AI Content Generator",
    category: "Artificial Intelligence",
    description: "Advanced AI-powered platform for generating marketing content, articles, and creative writing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["Python", "TensorFlow", "GPT-3", "AWS"]
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    category: "Web Development",
    description: "Property listing platform with advanced search, virtual tours, and agent connection features.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tech: ["Next.js", "GraphQL", "Prisma", "Mapbox"]
  }
];

const categories = ["All", "Web Development", "UX/UI Design", "Mobile Development", "Enterprise Solutions", "Artificial Intelligence"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState<typeof portfolioItems>([]);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Filter items based on active category
    const filtered = activeCategory === "All" 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeCategory);
    
    // Animate new items in
    setVisibleItems([]);
    setTimeout(() => {
      setVisibleItems(filtered);
    }, 300);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-white to-gray-50 relative py-24" ref={portfolioRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl opacity-70 pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/2 bg-purple-50/50 rounded-full blur-3xl opacity-70 floating"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray mb-8">
            Explore our diverse portfolio of successful digital solutions that deliver real business value
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover-lift ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white shadow-lg shadow-syndicate-blue/20' 
                    : 'bg-white text-syndicate-gray border border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleItems.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-on-scroll fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="overflow-hidden hover-lift group h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[16/9] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-syndicate-blue/30 to-syndicate-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-syndicate-dark z-20 shadow-sm">
                        {item.category}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl group-hover:text-syndicate-blue transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <CardDescription className="text-syndicate-gray">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0 justify-between items-center">
                      <div className="flex gap-1.5 flex-wrap">
                        {item.tech.slice(0, 2).map((tech, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                        {item.tech.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{item.tech.length - 2}
                          </span>
                        )}
                      </div>
                      <a 
                        href={item.link} 
                        className="flex items-center text-syndicate-blue font-medium text-sm group/link"
                        aria-label={`View ${item.title} project`}
                      >
                        View Project
                        <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </CardFooter>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 shadow-xl rounded-xl border-0">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex gap-1.5 flex-wrap mb-3">
                      {item.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={item.link} 
                      className="flex items-center text-xs text-syndicate-blue font-medium"
                    >
                      Visit Project <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-on-scroll">
          <Button asChild className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 shadow-lg shadow-syndicate-blue/20 px-8 py-6 h-auto text-base font-medium">
            <a href="#contact">
              Start Your Project <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
