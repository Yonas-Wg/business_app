const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-5 md:px-16 py-12 sm:py-16 md:py-24" id="about">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
          About <span style={{color: '#d4ba7d'}}>Four Brothers</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2">
          Building strong partnerships through reliable trading solutions since 2025
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4" style={{color: '#d4ba7d'}}>
              Our Story
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              Four Brothers General Trading was founded in 2025 with a vision to become Ethiopia's 
              premier trading company. As a registered sole proprietorship, we specialize in importing 
              and wholesale distribution across multiple industries.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted 
              partner for businesses throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="text-center p-3 sm:p-4 rounded-lg" style={{backgroundColor: '#d4ba7d20'}}>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={{color: '#d4ba7d'}}>2025</h4>
              <p className="text-xs sm:text-sm md:text-base font-medium">Founded</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg" style={{backgroundColor: '#02333d20'}}>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={{color: '#02333d'}}>100+</h4>
              <p className="text-xs sm:text-sm md:text-base font-medium">Products</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
          <div className="bg-gradient-to-br from-[#d4ba7d] to-[#02333d] p-6 sm:p-8 rounded-xl text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              To provide exceptional trading services that connect global suppliers with local businesses, 
              ensuring quality products and reliable delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="text-center p-4 sm:p-6 border-2 border-[#d4ba7d] rounded-lg">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
              <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Quality Focus</h4>
              <p className="text-xs sm:text-sm">Premium products only</p>
            </div>
            <div className="text-center p-4 sm:p-6 border-2 border-[#02333d] rounded-lg">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🤝</div>
              <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Trust</h4>
              <p className="text-xs sm:text-sm">Reliable partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
