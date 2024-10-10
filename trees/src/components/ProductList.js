import React from 'react';
    const products = [
  { id: 1, name: 'Organic cotton T-shirts', currentPrice: 499, originalPrice: 699, reviews: 825, image: '/images/tshirt.jpg' },
  { id: 2, name: 'Hemp backpack', currentPrice: 1299, originalPrice: 1499, reviews: 231, image: '/images/backpack.jpg' },
  { id: 3, name: 'Bamboo toothbrush', currentPrice: 99, originalPrice: 149, reviews: 540, image: '/images/toothbrush.jpg' },
  // Add more products as needed
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{product.name}</h3>
      <p className="text-gray-700">
        <span className="font-bold text-lg">{product.currentPrice} JOD.</span>
        <span className="ml-2 text-sm line-through text-gray-500">{product.originalPrice} JOD.</span>
      </p>
    </div>
    <div className="px-4 pb-4">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300">
        BUY NOW
      </button>
    </div>
  </div>
);

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Best-Selling Sustainable Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;