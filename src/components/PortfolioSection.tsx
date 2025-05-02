import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const portfolioItems = [
  {
    id: 1,
    title: "SpeedLabs",
    link: "https://speedlabs.vercel.app/",
    githubUrl: "https://github.com/yourusername/speedlabs",
    description:
      "Innovative platform showcasing cutting-edge technological solutions with advanced performance optimization and user-centric design.",
    image: "/speedlabs/speedlabs.jpeg",
    tech: ["Next.js", "Resend", "Firebase", "Tailwind"],
    category: "Web Development",
    fullDescription:
      "SpeedLabs is a comprehensive web platform designed to revolutionize technological solutions. Leveraging modern web technologies, it provides an intuitive interface for exploring and implementing cutting-edge innovations.",
  },
  {
    id: 2,
    title: "SparkShift",
    link: "https://sparkshift-final.vercel.app/",
    githubUrl: "https://github.com/yourusername/sparkshift",
    description:
      "Sleek and professional website for SparkShift, a Social Media Marketing Agency (SMMA).",
    image: "/spark/spark.jpg",
    tech: ["Next.js", "Resend", "Firebase", "Tailwind"],
    category: "Web Development",
    fullDescription:
      "SparkShift is a modern and professional website for a Social Media Marketing Agency (SMMA). It features an automated contact form that streamlines client inquiries, making it easy for potential customers to connect with the agency effortlessly.",
  },
  {
    id: 3,
    title: "LankaMods",
    link: "https://lankamodslk.vercel.app/",
    description:
      "Premium marketplace for automotive modification parts with a seamless shopping experience.",
    image: "/lankamod/lankamod-hero.jpg",
    tech: ["Next.js", "Firebase", "Tailwind", "WhatsApp API"],
    category: "Web Development",
    fullDescription:
      "LankaMods is a comprehensive e-commerce platform specializing in car modification parts. The site features detailed listings of modded cars alongside their individual components, with high-quality images for each part. The platform includes a responsive shopping cart system that temporarily stores user selections in-memory for the current session.",
  },
  {
    id: 4,
    title: "LankanArt",
    link: "https://lankaart.vercel.app",
    description:
      "A vibrant online marketplace for Sri Lankan artists to showcase and sell their artwork.",
    image: "/art/art.png",
    tech: [
      "Next.js",
      "Firebase",
      "Tailwind",
      "Cloudinary",
      "Whatsapp API",
    ],
    category: "Marketing",
    fullDescription:
      "LankanArt is a vibrant online marketplace for Sri Lankan artists to showcase and sell their artwork. The platform features a user-friendly interface that allows artists to create profiles, upload their art, and manage their sales.",
  },
  {
    id: 5,
    title: "LankaSupply",
    link: "https://lankasupply.vercel.app",
    description:
      "LankaSupply is a comprehensive e-commerce platform specializing in helping early-stage startups and small businesses find the right suppliers.",
    image: "/supply/supply.jpeg",
    tech: [
      "Next.js",
      "Firebase",
      "Tailwind",
      "Cloudinary",
      "Whatsapp API",
    ],
    category: "AI",
    fullDescription:
      "LankaSupply is a comprehensive e-commerce platform specializing in helping early-stage startups and small businesses find the right suppliers and manufacturers for their products.",
  },
  {
    id: 6,
    title: "Syndicate Solutions",
    link: "https://syndicatesolutions.vercel.app/",
    description: "Innovative Digital Services Provider",
    image: "/syndicate/synd.png",
    tech: ["Next.js", "Firebase", "Tailwind", "WhatsApp API"],
    category: "Web Development",
    fullDescription:
      "Syndicate Solutions is a forward-thinking tech startup specializing in delivering cutting-edge digital services, including custom software development, AI-driven workflow automation, and comprehensive digital marketing solutions.",
  },
  {
    id: 7,
    title: "KQM Estate",
    link: "https://www.kqmestate.com/",
    githubUrl: "https://github.com/yourusername/kqmestate",
    description:
      "Elegant real estate website with seamless user experience and advanced property search capabilities.",
    image: "/kqm/kqm.jpg",
    tech: ["Next.js", "Resend", "Firebase", "Tailwind"],
    category: "Web Development",
    fullDescription:
      "KQM Estate represents the pinnacle of modern real estate web applications, offering intuitive navigation, comprehensive property listings, and a sleek, responsive design that adapts to user needs.",
  },
  {
    id: 8,
    title: "Sisira Auto Parts",
    link: "https://sisiraautoparts.vercel.app",
    description:
      "Sisira Auto Parts is a comprehensive e-commerce platform specializing in automotive parts and accessories.",
    image: "/sisira/sisira.png",
    tech: ["Next.js", "Firebase", "Cloudinary", "Tailwind"],
    category: "Mobile Development",
    fullDescription:
      "Sisira Auto Parts is a comprehensive e-commerce platform specializing in automotive parts and accessories. The site features a user-friendly interface, allowing customers to easily browse and purchase a wide range of products.",
  },
];

// Update categories to match the ones used in the portfolio items
const categories = [
  "All",
  "Web Development",
  "Marketing",
  "Mobile Development",
  "AI",
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(portfolioItems);
  const portfolioRef = useRef(null);

  useEffect(() => {
    // Filter items based on active category
    const filtered =
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);

    // Animate new items in
    setVisibleItems([]);
    setTimeout(() => {
      setVisibleItems(filtered);
    }, 300);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="section bg-gradient-to-b from-white to-gray-50 relative py-24"
      ref={portfolioRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl opacity-70 pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/2 bg-purple-50/50 rounded-full blur-3xl opacity-70 floating"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray mb-8">
            Explore our diverse portfolio of successful digital solutions that
            deliver real business value
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover-lift ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white shadow-lg shadow-syndicate-blue/20"
                    : "bg-white text-syndicate-gray border border-gray-100 hover:border-gray-200 hover:bg-gray-50"
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
              style={{ animationDelay: `${index * 150}ms` }}
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
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
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
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${item.title} project`}
                      >
                        View Project
                        <ArrowRight
                          size={16}
                          className="ml-1 transition-transform group-hover/link:translate-x-1"
                        />
                      </a>
                    </CardFooter>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 shadow-xl rounded-xl border-0">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.fullDescription}
                    </p>
                    <div className="flex gap-1.5 flex-wrap mb-3">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      className="flex items-center text-xs text-syndicate-blue font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
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
          <Button
            asChild
            className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 shadow-lg shadow-syndicate-blue/20 px-8 py-6 h-auto text-base font-medium"
          >
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