import { Code, PieChart, Users, Search, Cpu, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored platforms and apps for all industries—from car dealerships and real estate firms to e-commerce brands and enterprise systems.",
    icon: <Code className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "Data Analysis & Visualization",
    description: "Transform raw data into insights—track sales trends, property metrics, customer behavior, and optimize your decision-making.",
    icon: <PieChart className="h-10 w-10 text-syndicate-purple" />
  },
  {
    title: "Digital Transformation & Business Consulting",
    description: "Helping traditional sectors like real estate, car sales, and retail modernize through automation, AI, and scalable digital systems.",
    icon: <LineChart className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "UX/UI & Creative Design",
    description: "Stunning visuals and user-friendly interfaces for real estate listings, vehicle catalogs, online stores, and SaaS platforms.",
    icon: <Users className="h-10 w-10 text-syndicate-purple" />
  },
  {
    title: "AI & Automation Solutions",
    description: "Intelligent tools for personalized recommendations, pricing engines, chatbot assistants, and predictive analytics across industries.",
    icon: <Cpu className="h-10 w-10 text-syndicate-blue" />
  },
  {
    title: "SEO, Ads & Digital Marketing",
    description: "Generate more leads for your real estate agency, dealership, or online brand with proven strategies in SEO, SEM, and social campaigns.",
    icon: <Search className="h-10 w-10 text-syndicate-purple" />
  }
];


const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
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
            We provide comprehensive digital solutions to help your business
            thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
              key={index}
            >
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
                  <h3 className="text-xl font-bold mb-3 group-hover:text-syndicate-blue transition-colors">
                    {service.title}
                  </h3>
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
