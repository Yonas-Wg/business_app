const Subscribe = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="contact">
      <div className="rounded-lg text-white py-12 sm:py-16 md:py-24" style={{backgroundColor: '#02333d'}}>
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-[95%] sm:w-[90%] md:w-4/5 mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 px-2">
              Why Choose Four Brothers General Trading?
            </h2>
            <p className="leading-relaxed sm:leading-loose font-[500] text-base sm:text-lg px-2">
              Your trusted partner for reliable trading solutions and quality products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏢</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Established Business</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Years of experience in general trading with a proven track record of successful partnerships and reliable service delivery.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🌍</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Wide Network</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Extensive supplier and customer network spanning multiple industries and regions for comprehensive trading solutions.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fast & Reliable</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Quick response times, efficient logistics, and dependable delivery schedules to keep your business operations running smoothly.
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 md:p-8 w-full text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Ready to Partner With Us?</h3>
            <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2">
              Contact us directly for business inquiries and partnership opportunities.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📧</span>
                <span className="font-mono text-sm sm:text-base md:text-lg break-all">fourbrothersgt2025@gmail.com</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-xl sm:text-2xl">📞</span>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <span className="font-mono text-sm sm:text-base md:text-lg">+251911317588</span>
                  <span className="font-mono text-sm sm:text-base md:text-lg">+251908175695</span>
                  <span className="font-mono text-sm sm:text-base md:text-lg">+251989395186</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
