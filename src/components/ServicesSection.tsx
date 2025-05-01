
import { Code, PieChart, Users, Search, Cpu, LineChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business needs, from web applications to complex enterprise systems.",
    icon: <Code className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "Data Analysis & Visualization",
    description: "Transform your raw data into meaningful insights with advanced analytics and beautiful visualizations.",
    icon: <PieChart className="h-10 w-10 text-syndicate-purple" />
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic guidance to navigate your business through digital transformation and stay ahead of industry trends.",
    icon: <LineChart className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "UX/UI Design",
    description: "User-centered design that creates intuitive, engaging interfaces that delight your customers and improve conversion rates.",
    icon: <Users className="h-10 w-10 text-syndicate-purple" />
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Cutting-edge AI implementations that automate processes, predict trends, and deliver personalized experiences.",
    icon: <Cpu className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "SEO & Digital Marketing",
    description: "Comprehensive digital marketing strategies that improve visibility, drive traffic, and increase conversions.",
    icon: <Search className="h-10 w-10 text-syndicate-purple" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray">
            We provide comprehensive digital solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="animate-on-scroll" style={{animationDelay: `${index * 100}ms`}} key={index}>
              <Card className="hover-lift border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 h-full overflow-hidden bg-white rounded-xl group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-syndicate-blue to-syndicate-purple group-hover:h-full transition-all duration-500"></div>
                  <div className="mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-syndicate-blue/10 to-syndicate-purple/10 flex items-center justify-center mb-2">
                        {service.icon}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-lg border border-syndicate-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-syndicate-blue transition-colors">{service.title}</h3>
                  <p className="text-syndicate-gray">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
