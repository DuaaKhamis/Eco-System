'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Replace with your actual categories
const categories = ['All', 'Clothing', 'Accessories', 'Personal Care', 'Home & Kitchen', 'Fitness', 'Kitchen & Dining'];

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ease-out border-2 border-gray-200 hover:border-green-500 group">
     <div className="h-80 bg-gray-50 flex items-center justify-center overflow-hidden">
  <img 
    src={product.imageUrl} 
    alt={product.title} 
    className="w-full h-full object-fill"
  />
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 6; // Adjust as needed


  const fetchProducts = async (search = '', category = 'All', page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products?q=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}&page=${page}&limit=${productsPerPage}`);
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };


   useEffect(() => {
    fetchProducts(searchTerm, selectedCategory, currentPage);
  }, [selectedCategory, searchTerm, currentPage]);


  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
    fetchProducts(searchTerm, selectedCategory, 1);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Best-Selling Sustainable Products</h2>
      
      {/* Category Filter */}
      <div className="mb-6 flex justify-start">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Enhanced Search Bar with Form */}
      <form onSubmit={handleSearch} className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md"
            placeholder="Search for products..."
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
                fetchProducts('', selectedCategory);
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <span className="text-2xl">&times;</span>
            </button>
          )}
        </div>
      </form>
  
      {/* Product List */}
         <div className=" mx- grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="flex justify-end h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
        ) : error ? (
          <div className="col-span-full text-center py-8 text-red-500">{error}</div>
        ) : products.length > 0 ? (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === page + 1
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
