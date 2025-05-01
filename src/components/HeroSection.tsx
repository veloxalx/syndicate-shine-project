
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
              
              <div className="relative z-10 rounded-2xl glass-card w-full h-full p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple"></div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="w-1/3 h-6 bg-gray-100 rounded"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="grid grid-cols-12 gap-4 mb-6">
                      <div className="col-span-8 space-y-4">
                        <div className="h-32 bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-lg flex items-center justify-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-syndicate-blue to-syndicate-purple rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-10 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-8 bg-gray-100 rounded w-1/2"></div>
                      </div>
                      <div className="col-span-4 bg-gray-50 rounded p-3">
                        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 rounded bg-gradient-to-br from-syndicate-blue/20 to-syndicate-purple/5"></div>
                      <div className="h-20 rounded bg-gradient-to-br from-syndicate-purple/20 to-syndicate-blue/5"></div>
                      <div className="h-20 rounded bg-gradient-to-br from-syndicate-blue/15 to-syndicate-purple/10"></div>
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
      </div>
    </section>
  );
};

export default HeroSection;
