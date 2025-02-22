import React from "react";


export default function Home() {
  const products = [
    { id: 1, name: "Elegant Gold Necklace", price: "₹499", image: "/necklace.jpg" },
    { id: 2, name: "Stylish Leather Handbag", price: "₹899", image: "/handbag.jpg" },
    { id: 3, name: "Classic Aviator Sunglasses", price: "₹299", image: "/glasses.jpg" },
    { id: 4, name: "Chic Pearl Earrings", price: "₹399", image: "/earrings.jpg" }
  ];

  return (
<>
<h2 className="text-4xl font-bold">Trendy & Stylish Accessories</h2>
        <p className="mt-4 text-lg">Find the latest fashion accessories that match your style. <a href="https://textify.ai" className="text-blue-600">Powered by Textify AI</a></p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg">Shop Now</button>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded-lg text-center">
              <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              </a>
              <h3 className="text-xl font-semibold mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">{product.name}</a>
              </h3>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </button>
              <p className="mt-2 text-sm text-gray-500"><a href="https://textify.ai" className="text-blue-600">Powered by Textify AI</a></p>
            </div>
          ))}
        </section>
</>
  );
}
