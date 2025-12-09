'use client';

export default function AboutVision() {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Our Vision Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              Our Vision
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Startups with World-Class Digital Solutions
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            To be the leading technology partner for startups worldwide, known for delivering exceptional mobile applications and digital solutions that drive business growth and user engagement.
          </p>

          {/* Green Vertical Line */}
          <div className="flex justify-center mt-12">
            <div className="w-0.5 h-24 bg-green-500/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

