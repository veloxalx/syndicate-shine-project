
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "With over 15 years of experience in technology and business management."
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/placeholder.svg",
    bio: "Expert in software architecture and emerging technologies."
  },
  {
    name: "Mike Johnson",
    position: "Design Lead",
    image: "/placeholder.svg",
    bio: "Award-winning UX/UI designer with a focus on user-centered design."
  },
  {
    name: "Sarah Williams",
    position: "Marketing Director",
    image: "/placeholder.svg",
    bio: "Specialist in digital marketing strategies and brand development."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-purple-50/50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-50/50 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 rounded-full border border-syndicate-blue/20 inline-block mb-4">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray">
            The talented professionals who make innovation happen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-lift">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-syndicate-blue/10 to-syndicate-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-center gap-4">
                      <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors transform hover:scale-110">
                        <Linkedin className="h-5 w-5 text-syndicate-blue" />
                      </a>
                      <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors transform hover:scale-110">
                        <Twitter className="h-5 w-5 text-syndicate-blue" />
                      </a>
                      <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors transform hover:scale-110">
                        <Mail className="h-5 w-5 text-syndicate-blue" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-syndicate-blue mb-3 text-sm font-medium">{member.position}</p>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mb-3"></div>
                  <p className="text-sm text-syndicate-gray">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
