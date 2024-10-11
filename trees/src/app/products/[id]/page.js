'use client';


import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Leaf, Sun, Droplet, ThermometerSun } from 'lucide-react';

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [params.id]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-red-500 text-xl">{error}</div>
    </div>
  );
  
  if (!product) return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-gray-500 text-xl">Product not found</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.title} />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{product.category}</div>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-sm text-gray-500 ml-2">USD</span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Plant Care</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Sun className="text-yellow-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">Bright, indirect light</span>
                </div>
                <div className="flex items-center">
                  <Droplet className="text-blue-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">Water weekly</span>
                </div>
                <div className="flex items-center">
                  <ThermometerSun className="text-orange-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">65°F - 80°F</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="text-green-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">Non-toxic to pets</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;