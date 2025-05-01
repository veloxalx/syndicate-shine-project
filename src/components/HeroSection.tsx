
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Innovative</span>
              <span className="gradient-text">Digital Solutions</span>
              <span className="block">for Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-syndicate-gray mb-8 max-w-lg">
              We transform your business challenges into opportunities with cutting-edge technology and expert consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-opacity">
                <a href="#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-syndicate-blue/10 to-syndicate-purple/10 border border-white/20 shadow-xl">
              <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-syndicate-blue/30 animate-pulse"></div>
              <div className="absolute bottom-20 right-12 w-32 h-32 rounded-full bg-syndicate-purple/20 animate-pulse" style={{animationDelay: "1s"}}></div>
              <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-300/10 animate-pulse" style={{animationDelay: "1.5s"}}></div>
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[70%] rounded-lg bg-white/90 shadow-lg p-6 flex flex-col">
                  <div className="w-full h-8 bg-gray-100 rounded mb-4"></div>
                  <div className="flex flex-1 gap-4">
                    <div className="w-2/3 flex flex-col gap-3">
                      <div className="w-full h-24 bg-gradient-to-r from-syndicate-blue/20 to-syndicate-purple/20 rounded"></div>
                      <div className="w-full h-12 bg-gray-100 rounded"></div>
                      <div className="w-full h-12 bg-gray-100 rounded"></div>
                    </div>
                    <div className="w-1/3 bg-gray-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
