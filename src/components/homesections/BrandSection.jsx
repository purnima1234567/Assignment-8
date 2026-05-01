import React from "react";

const Brands = () => {
  return (
    <section className="py-16 bg-white">

      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        🏷️ Top Summer Brands
      </h2>

      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">

        {/* Brand 1 */}
        <div className="rounded-xl py-16 px-8 text-center shadow-md hover:shadow-xl transition bg-white">
          <h3 className="text-xl font-bold text-gray-800">Ray-Ban 😎</h3>
          <p className="text-gray-500 mt-2">Premium Sunglasses</p>
        </div>

        {/* Brand 2 */}
        <div className="rounded-xl py-16 px-8  text-center shadow-md hover:shadow-xl transition bg-white">
          <h3 className="text-xl font-bold text-gray-800">Nike 👟</h3>
          <p className="text-gray-500 mt-2">Summer Sportswear</p>
        </div>

        {/* Brand 3 */}
        <div className="rounded-xl py-16 px-8  text-center shadow-md hover:shadow-xl transition bg-white">
          <h3 className="text-xl font-bold text-gray-800">Nivea 🧴</h3>
          <p className="text-gray-500 mt-2">Skin Care Products</p>
        </div>

        {/* Brand 4 */}
        <div className="rounded-xl py-16 px-8  text-center shadow-md hover:shadow-xl transition bg-white">
          <h3 className="text-xl font-bold text-gray-800">Adidas 🏃</h3>
          <p className="text-gray-500 mt-2">Comfort Summer Wear</p>
        </div>

      </div>

    </section>
  );
};

export default Brands;