const ChefService = () => {
  return (
    <section className="w-full lg:mt-24 pt-4">
      <div className="relative w-full h-50  md:h-100 lg:h-125 overflow-hidden">
        {/* Background Image */}
        {/* <img
          src="/images/chef-service.jpg"
          alt="Chef Service"
          className="w-full h-full object-cover "
        /> */}

        <div className="bg-[url('/images/chef-service.jpg')] w-full h-full object-cover bg-fixed"></div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/95 px-6  sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 text-center max-w-[90%] sm:max-w-[80%] md:max-w-175 lg:max-w-212.5 shadow-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-3 md:mb-4 mt-2">
              Bistro Boss
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              At Bistro Boss, we bring you a unique dining experience with
              carefully crafted dishes made from the freshest ingredients. Our
              passion for quality and taste ensures every meal is memorable,
              combining tradition with modern culinary excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefService;
