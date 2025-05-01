
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
    <section id="team" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-syndicate-blue to-syndicate-purple mx-auto mb-6"></div>
          <p className="text-lg text-syndicate-gray">
            Meet the talented professionals behind Syndicate Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center gap-4">
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Linkedin className="h-5 w-5 text-syndicate-blue" />
                    </a>
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Twitter className="h-5 w-5 text-syndicate-blue" />
                    </a>
                    <a href="#" className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Mail className="h-5 w-5 text-syndicate-blue" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-syndicate-blue mb-2">{member.position}</p>
                <p className="text-sm text-syndicate-gray">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
