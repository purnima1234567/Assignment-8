'use client';

import React from "react";
import products from "@/data/products.json";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Products = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleClick = (id) => {
    if (user) {
      router.push(`/product/${id}`);  
    } else {
      router.push(`/auth/login?redirect=/product/${id}`);      
    }
  };



  return (
    <section className="py-8 container mx-auto px-4">

      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        🔥 Popular Products
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl shadow-md p-4 hover:shadow-lg transition bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm">{product.brand}</p>

            <p className="mt-2 text-orange-500 font-bold">
              ${product.price}
            </p>

            <p className="text-sm text-gray-600">
              ⭐ {product.rating}
            </p>

            <button
            onClick={() => handleClick(product.id)}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              View Details
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;


