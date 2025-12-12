'use client';

import { Lightbulb, Award, Handshake, ShieldCheck } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "We deliver exceptional results with meticulous attention to detail and best practices."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients as partners, fostering open communication and teamwork."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver on time and exceed expectations, building trust through consistent performance."
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-white mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

