'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

export default function AboutTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Chief Executive Officer",
      image: "/Bilal-Attari.jpg",
      fallback: "JD"
    },
    {
      id: 2,
      name: "John Doe",
      role: "Chief Technology Officer",
      image: "/muhammad-ahmed.jpg",
      fallback: "JD"
    },
    {
      id: 3,
      name: "John Doe",
      role: "Lead Developer",
      image: "/Bilal-Attari.jpg",
      fallback: "JD"
    },
    {
      id: 4,
      name: "John Doe",
      role: "Product Manager",
      image: "/muhammad-ahmed.jpg",
      fallback: "JD"
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Our Team Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              Our Team
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            It's all about the people
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Innovative team behind our amazing product
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-500/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.fallback}</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {member.role}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-green-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-green-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

