
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
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray">
            We provide comprehensive digital solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-syndicate-blue to-syndicate-purple transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <CardContent className="p-6">
                <div className="mb-5 p-3 rounded-lg bg-gray-50 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-syndicate-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
