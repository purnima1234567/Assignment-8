import React from 'react';

const TipsSection = () => {
    return (
        <section className="py-16 bg-orange-50 mt-15">

      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        ☀️ Summer Care Tips
      </h2>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">

        {/* Tip 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/433/600/400"
            alt="Hydration"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Stay Hydrated 💧</h3>
            <p className="text-gray-600 mt-2">
              Drink enough water during hot summer days to stay healthy and fresh.
            </p>
          </div>
        </div>

        {/* Tip 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/1062/600/400"
            alt="Sunscreen"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Use Sunscreen 🧴</h3>
            <p className="text-gray-600 mt-2">
              Always apply SPF sunscreen before going outside to protect your skin.
            </p>
          </div>
        </div>

        {/* Tip 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/1005/600/400"
            alt="Light Clothes"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Wear Light Clothes 👕</h3>
            <p className="text-gray-600 mt-2">
              Choose cotton and light clothes to stay cool in summer heat.
            </p>
          </div>
        </div>

      </div>

    </section>

    );
};

export default TipsSection;