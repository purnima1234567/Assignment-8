import React from 'react';

const HeroSections = () => {
    return (
           <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 pl-15">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            Summer Sale is Here ☀️
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Get up to <span className="font-semibold text-orange-500">50% OFF</span> on sunglasses, outfits, skincare & beach essentials.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Summer Beach"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>

    );
};

export default HeroSections;