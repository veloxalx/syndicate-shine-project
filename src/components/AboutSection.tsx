
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
      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-purple-100 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-lg bg-white shadow-xl p-6 relative z-10">
                    <div className="w-full h-3 bg-gradient-to-r from-syndicate-blue to-syndicate-purple rounded-full mb-4"></div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="h-20 bg-gray-100 rounded"></div>
                      <div className="h-20 bg-gray-100 rounded"></div>
                      <div className="h-20 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-6 w-3/4 bg-gray-100 rounded mb-2"></div>
                    <div className="h-6 w-1/2 bg-gray-100 rounded"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-syndicate-blue/20"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-syndicate-purple/20"></div>
              </div>
              
              {/* Border decoration */}
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-4 border-syndicate-blue/20 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Syndicate Solutions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mb-6"></div>
            <p className="text-lg text-syndicate-gray mb-6">
              Founded in 2015, Syndicate Solutions has been at the forefront of digital innovation, 
              helping businesses across various industries leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-syndicate-gray mb-8">
              Our team of experts combines technical knowledge with business acumen to deliver 
              solutions that not only solve problems but also create new opportunities for growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 p-2 bg-blue-50 rounded-lg text-syndicate-blue">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
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
