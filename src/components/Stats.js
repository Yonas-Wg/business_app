const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: "👥",
      description: "Satisfied business partners"
    },
    {
      number: "1000+",
      label: "Products Delivered",
      icon: "📦",
      description: "Quality items imported"
    },
    {
      number: "50+",
      label: "Supplier Network",
      icon: "🌐",
      description: "Global connections"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: "🎧",
      description: "Always available"
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{backgroundColor: '#02333d'}}>
      <div className="container mx-auto px-5 md:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span style={{color: '#d4ba7d'}}>Achievements</span>
          </h2>
          <p className="text-lg sm:text-xl text-white opacity-90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold mb-2" style={{color: '#d4ba7d'}}>
                {stat.label}
              </h4>
              <p className="text-sm sm:text-base text-white opacity-80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-base sm:text-lg text-white opacity-90 mb-6">
              Become part of Ethiopia's most trusted trading community. We're always looking for new partnerships and opportunities to grow together.
            </p>
            <button 
              className="bg-[#d4ba7d] hover:bg-[#c4aa6d] text-[#02333d] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

