'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Search } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ease-out border-2 border-gray-200 hover:border-green-500 group">
      <div className="h-48 overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-fit object-cover" />
      </div>
      <div className="p-4 relative h-[150px]">
        <h3 className="font-semibold text-lg mb-2 truncate">{product.title}</h3>
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-lg font-bold">${product.price}</span>
        </div>
        <Link 
          href={`/products/${product._id}`}
          className="w-[40%] absolute left-1/2 bottom-4 -translate-x-1/2 translate-y-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-95 shadow-[rgba(0,0,15,0.7)_0px_4px_0px_0px] text-center"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = async (search = '') => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products?q=${encodeURIComponent(search)}`);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(searchTerm);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Best-Selling Sustainable Products</h2>
      
      {/* Enhanced Search Bar with Form */}
      <form onSubmit={handleSearch} className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md"
            placeholder="Search for plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                fetchProducts('');
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <span className="text-2xl">&times;</span>
            </button>
          )}
        </div>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-lg text-gray-600">No products found.</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your search or browse our categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;