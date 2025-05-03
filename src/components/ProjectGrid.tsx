import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Eye, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectGrid = ({ projects, category = "all" }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Filter projects based on category
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());

    // Short delay for smoother transition
    setTimeout(() => {
      setVisibleItems(filteredProjects);
      setIsLoading(false);
    }, 300);
  }, [projects, category]);

  // Opens project in a new window
  const openProject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-syndicate-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (visibleItems.length === 0) {
    return (
      <div className="w-full h-60 flex flex-col justify-center items-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <div className="text-gray-400 mb-4">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-700">
          No Projects Available
        </h3>
        <p className="text-gray-500 mt-2">
          We're working on adding projects in this category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {visibleItems.map((item, index) => (
        <motion.div key={item.id} variants={itemVariants} className="h-full">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="overflow-hidden group h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative">
                {/* Ribbon for featured projects */}
                {item.featured && (
                  <div className="absolute -top-1 -right-1 z-20">
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white text-xs font-semibold py-1 px-8 shadow-md">
                          <Star size={8} className="inline mr-1" /> Featured
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-syndicate-blue/40 to-syndicate-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/80 backdrop-blur-sm hover:bg-white text-syndicate-blue border-0 shadow-lg transform transition-transform duration-300 hover:scale-105"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openProject(item.link);
                        }}
                      >
                        <Eye size={18} className="mr-2" />
                        Preview
                      </Button>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-syndicate-dark hover:bg-white/95 z-20 shadow-sm">
                    {item.category}
                  </Badge>
                </div>

                {/* Content Section */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-syndicate-blue transition-colors duration-300 flex items-center">
                    {item.title}
                    {item.isNew && (
                      <span className="ml-2 text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">New</span>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-4">
                  <CardDescription className="text-syndicate-gray line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardContent>

                {/* Footer Section */}
                <CardFooter className="pt-0 justify-between items-center border-t border-gray-100 mt-2 pt-4">
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tech.slice(0, 2).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {item.tech.length > 2 && (
                      <Badge
                        variant="outline"
                        className="bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 cursor-help"
                        title={item.tech.slice(2).join(", ")}
                      >
                        +{item.tech.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-syndicate-blue font-medium text-sm group/link p-0 hover:bg-transparent"
                    onClick={(e) => {
                      e.preventDefault();
                      openProject(item.link);
                    }}
                    aria-label={`View ${item.title} project in new window`}
                  >
                    View
                    <ArrowRight
                      size={16}
                      className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Button>
                </CardFooter>
              </Card>
            </HoverCardTrigger>

            {/* Hover Card Content */}
            <HoverCardContent className="w-96 p-0 shadow-xl rounded-xl border-0">
              <div className="relative">
                {/* Header image with gradient overlay */}
                <div className="h-36 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-syndicate-blue/90 z-10 rounded-t-xl"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Content positioned over the gradient */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>

              {/* Main content */}
              <div className="p-4 pt-3">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.fullDescription || item.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Technologies
                  </h4>
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-gray-50 text-gray-600 border-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <Button
                    size="sm"
                    className="flex items-center text-xs bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white px-3 py-1.5 rounded-md hover:opacity-90 transition-colors"
                    onClick={() => openProject(item.link)}
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Open Project
                  </Button>
                  {item.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center text-xs bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => openProject(item.github)}
                    >
                      <Github size={12} className="mr-1" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;