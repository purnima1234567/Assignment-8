import products from "@/data/products.json";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-lg w-full"
        />

        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            {product.name}
          </h1>

          <p className="text-gray-500">{product.brand}</p>

          <p className="mt-4">{product.description}</p>

          <p className="mt-4 text-xl font-bold text-orange-500">
            ${product.price}
          </p>

          <p>⭐ {product.rating}</p>
        </div>

      </div>
    </div>
  );
}