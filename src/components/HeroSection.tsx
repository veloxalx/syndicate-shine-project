import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 z-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-blue-300/20 blur-xl pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <Logo className="h-12 w-auto mr-4" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">Syndicate</span>
            </div>
            
            <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block">Transform Your</span>
              <span className="gradient-text text-5xl md:text-6xl lg:text-7xl">Digital Presence</span>
            </h1>
            <p className="text-lg md:text-xl text-syndicate-gray mb-8 max-w-xl">
              We help forward-thinking businesses solve complex challenges through cutting-edge technology and strategic consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-all shadow-md shadow-syndicate-blue/20 relative overflow-hidden group">
                <a href="#contact">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-syndicate-blue/20 hover:bg-syndicate-blue/5 transition-all">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-6 relative animate-fade-in">
            <div className="w-full h-[500px] floating">
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-syndicate-blue/30 to-syndicate-purple/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-300/20 blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-syndicate-purple/20 blur-2xl"></div>
              </div>
              
              <div className="relative z-10 rounded-2xl glass-card w-full h-full p-6 shadow-xl border border-white/20 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple"></div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="w-1/3 h-6 bg-gray-100/80 rounded"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="grid grid-cols-12 gap-4 mb-6">
                      <div className="col-span-8 space-y-4">
                        <div className="h-32 bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-lg flex items-center justify-center">
                          <Logo className="w-20 h-20 text-syndicate-blue" />
                        </div>
                        <div className="h-10 bg-gray-100/80 rounded w-3/4"></div>
                        <div className="h-8 bg-gray-100/80 rounded w-1/2"></div>
                      </div>
                      <div className="col-span-4 bg-gray-50/90 rounded-lg p-3">
                        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 rounded-lg bg-gradient-to-br from-syndicate-blue/20 to-syndicate-purple/5 flex items-center justify-center">
                        <div className="w-8 h-8 bg-syndicate-blue/30 rounded-md flex items-center justify-center">
                          <div className="w-4 h-4 bg-syndicate-blue/60 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="h-20 rounded-lg bg-gradient-to-br from-syndicate-purple/20 to-syndicate-blue/5 flex items-center justify-center">
                        <div className="w-8 h-8 bg-syndicate-purple/30 rounded-md flex items-center justify-center">
                          <div className="w-4 h-4 bg-syndicate-purple/60 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="h-20 rounded-lg bg-gradient-to-br from-syndicate-blue/15 to-syndicate-purple/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-syndicate-blue/20 rounded-md flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-400/60 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-syndicate-blue/20 rounded-full"></div>
                        <div className="w-8 h-8 bg-syndicate-purple/20 rounded-full"></div>
                      </div>
                      <div className="w-24 h-8 bg-gradient-to-r from-syndicate-blue to-syndicate-purple rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <div className="animate-bounce w-6 h-10 border-2 border-syndicate-gray/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-syndicate-gray/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Stats banner */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-16 px-6 py-8 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">10+</h3>
            <p className="text-syndicate-gray">Years of Excellence</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">250+</h3>
            <p className="text-syndicate-gray">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">95%</h3>
            <p className="text-syndicate-gray">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Logo Component
const Logo = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" /> {/* syndicate-blue */}
          <stop offset="100%" stopColor="#8B5CF6" /> {/* syndicate-purple */}
        </linearGradient>
      </defs>
      
      {/* Base hexagon shape */}
      <path 
        d="M100,20 L170,60 L170,140 L100,180 L30,140 L30,60 Z" 
        fill="url(#logoGradient)"
        opacity="0.9"
      />
      
      {/* Inner shape */}
      <path 
        d="M100,40 L150,70 L150,130 L100,160 L50,130 L50,70 Z" 
        fill="#ffffff"
        opacity="0.3"
      />
      
      {/* Center connection lines */}
      <path 
        d="M100,40 L100,160 M50,70 L150,130 M50,130 L150,70" 
        stroke="white"
        strokeWidth="3"
        opacity="0.6"
      />
      
      {/* Center dot */}
      <circle 
        cx="100" 
        cy="100" 
        r="15" 
        fill="white"
        opacity="0.9"
      />
      
      {/* Connection dots */}
      <circle cx="100" cy="40" r="5" fill="white" opacity="0.8" />
      <circle cx="100" cy="160" r="5" fill="white" opacity="0.8" />
      <circle cx="50" cy="70" r="5" fill="white" opacity="0.8" />
      <circle cx="150" cy="70" r="5" fill="white" opacity="0.8" />
      <circle cx="50" cy="130" r="5" fill="white" opacity="0.8" />
      <circle cx="150" cy="130" r="5" fill="white" opacity="0.8" />
    </svg>
  );
};

export default HeroSection;