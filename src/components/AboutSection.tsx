import { Check, TrendingUp, Zap, Shield, Users, Award, Globe } from 'lucide-react';
import React from 'react';

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

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Global Clients" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute -top-64 -left-64 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] rounded-full bg-purple-50 opacity-70"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-syndicate-blue/5 blur-xl pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-syndicate-purple/5 blur-xl pulse-slow" style={{animationDelay: "1.5s"}}></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-syndicate-blue/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-syndicate-purple/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Logo className="h-8 w-auto mr-2" />
            <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Syndicate Solutions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 animate-on-scroll">
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative shadow-xl">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-syndicate-blue/10 animate-pulse" style={{animationDuration: "5s"}}></div>
                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-syndicate-purple/10 animate-pulse" style={{animationDuration: "7s", animationDelay: "1s"}}></div>
                
                {/* Main content */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full h-full glass-card rounded-xl shadow-2xl p-6 relative backdrop-blur-sm border border-white/20">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple"></div>
                    
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Logo className="h-5 w-5" />
                          <div className="w-24 h-5 bg-gray-200 rounded-md"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="col-span-1 h-full bg-gradient-to-br from-gray-100 to-white rounded-lg p-3 flex flex-col items-center justify-center border border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-syndicate-blue/10 flex items-center justify-center mb-2">
                              <Users className="h-6 w-6 text-syndicate-blue" />
                            </div>
                            <div className="h-3 bg-gray-200 rounded-md w-3/4 mt-2"></div>
                          </div>
                          <div className="col-span-2 space-y-4">
                            <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
                            <div className="h-24 bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-lg flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
                                <Award className="h-8 w-8 text-syndicate-purple" />
                              </div>
                            </div>
                            <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                            <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 mb-6">
                          <div className="h-4 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 bg-syndicate-blue/20 rounded-sm"></div>
                          <div className="h-4 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 bg-syndicate-purple/20 rounded-sm"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-20 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-100 p-3 flex flex-col justify-center">
                            <div className="h-3 bg-gray-200 rounded-sm w-1/2 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded-sm w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded-sm w-2/3"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-100 p-3 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-syndicate-purple/10 flex items-center justify-center">
                              <Globe className="h-5 w-5 text-syndicate-purple" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="h-12 bg-gradient-to-r from-syndicate-blue/20 to-syndicate-purple/20 rounded-md flex items-center px-4">
                            <div className="h-4 bg-white/70 rounded-sm w-24"></div>
                            <div className="ml-auto flex space-x-2">
                              <div className="w-8 h-8 rounded-md bg-white/30"></div>
                              <div className="w-8 h-8 rounded-md bg-white/30"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Border decoration */}
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-syndicate-purple/10 rounded-2xl z-0"></div>
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-4 border-syndicate-blue/10 rounded-2xl z-0"></div>
              </div>

              {/* Achievements bar - tablet and above */}
              <div className="hidden md:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[120%] bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 w-full">
                  {achievements.map((item, index) => (
                    <div key={index} className={`py-6 px-4 text-center ${index < achievements.length - 1 ? 'border-r border-gray-100' : ''}`}>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">{item.number}</h3>
                      <p className="text-sm text-syndicate-gray">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 animate-on-scroll">
            <div className="lg:pl-8">
              <p className="text-lg text-syndicate-gray mb-6">
                Founded in 2010, <span className="font-semibold text-gray-800">Syndicate Solutions</span> has been at the forefront of digital innovation, 
                helping businesses across various industries leverage technology to achieve their strategic objectives and drive sustainable growth.
              </p>
              <p className="text-lg text-syndicate-gray mb-8">
                Our team combines deep technical expertise with business acumen to deliver 
                solutions that not only solve complex challenges but also create new opportunities for our clients to thrive in the digital landscape.
              </p>
              
              {/* Mission statement box */}
              <div className="mb-10 p-6 bg-gradient-to-r from-syndicate-blue/5 to-syndicate-purple/5 rounded-xl border border-syndicate-blue/10">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-syndicate-gray italic">
                  "To empower businesses through innovative technology solutions that drive meaningful impact and sustainable growth in an ever-evolving digital world."
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start group hover:transform hover:translate-y-[-5px] transition-all duration-300">
                    <div className="mr-4 p-3 bg-gradient-to-br from-syndicate-blue/10 to-syndicate-purple/10 rounded-xl text-syndicate-blue group-hover:from-syndicate-blue/20 group-hover:to-syndicate-purple/20 transition-all duration-300 shadow-sm">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-syndicate-gray">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA button */}
              <div className="mt-12 inline-block">
                <a href="#team" className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md border border-syndicate-blue/10 text-syndicate-blue hover:shadow-lg transition-all duration-300 font-medium">
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements bar - mobile only */}
        <div className="grid grid-cols-3 gap-4 md:hidden mt-16">
          {achievements.map((item, index) => (
            <div key={index} className="py-4 px-3 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syndicate-blue to-syndicate-purple">{item.number}</h3>
              <p className="text-xs text-syndicate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Re-using the Logo component from Hero section
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

export default AboutSection;