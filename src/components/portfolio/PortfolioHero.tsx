'use client';

export default function PortfolioHero() {
  return (
    <section className="relative py-20 bg-black min-h-[80vh] flex items-center">
      {/* Green Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-20">
        <div className="animate-fadeInUp">
          {/* Our Work Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium border border-green-500/30">
              Our Work
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl max-w-4xl mx-auto md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            EXPLORE SEE OUR CREATIONS EXPERIENCE INOVATION
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From ideas to execution — here's a look at what we've crafted with intention.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
