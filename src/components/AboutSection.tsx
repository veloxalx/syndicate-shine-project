
import { Check, TrendingUp, Zap, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Check className="h-5 w-5" />,
      title: "Quality",
      description: "We maintain the highest standards in every project we undertake."
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Efficiency",
      description: "We optimize processes to deliver results in a timely manner."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our engagements."
    }
  ];

  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute -top-64 -left-64 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] rounded-full bg-purple-50 opacity-70"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-syndicate-blue/5 blur-xl pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-syndicate-purple/5 blur-xl pulse-slow" style={{animationDelay: "1.5s"}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="relative">
              <div className="w-full h-80 md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-syndicate-blue/10 animate-pulse" style={{animationDuration: "5s"}}></div>
                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-syndicate-purple/10 animate-pulse" style={{animationDuration: "7s", animationDelay: "1s"}}></div>
                
                {/* Main content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 glass-card rounded-xl shadow-2xl p-6 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple"></div>
                    
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="w-1/3 h-6 bg-gray-200 rounded-md"></div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="col-span-1 h-full bg-gray-100 rounded-lg"></div>
                          <div className="col-span-2 space-y-4">
                            <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
                            <div className="h-24 bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-lg"></div>
                            <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                            <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="h-12 bg-gradient-to-r from-syndicate-blue/20 to-syndicate-purple/20 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Border decoration */}
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-syndicate-purple/10 rounded-2xl z-0"></div>
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-4 border-syndicate-blue/10 rounded-2xl z-0"></div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Syndicate Solutions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mb-6"></div>
            <p className="text-lg text-syndicate-gray mb-6">
              Founded in 2024, Syndicate Solutions has been at the forefront of digital innovation, 
              helping businesses across various industries leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-syndicate-gray mb-8">
              Our team of experts combines technical knowledge with business acumen to deliver 
              solutions that not only solve problems but also create new opportunities for growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-start hover-lift">
                  <div className="mr-4 p-3 bg-gradient-to-br from-syndicate-blue/10 to-syndicate-purple/10 rounded-xl text-syndicate-blue">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-syndicate-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
