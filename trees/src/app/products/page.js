import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantSearch from '../../components/PlantSearch';
import ProductList from '../../components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (searchTerm = '') => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products?q=${encodeURIComponent(searchTerm)}`);
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

  const handleSearch = (searchTerm) => {
    fetchProducts(searchTerm);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sustainable Plant Marketplace</h1>
      <PlantSearch onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ProductsPage;