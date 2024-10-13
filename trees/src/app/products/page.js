// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const products = [
//   { id: 1, name: 'المنتج الأول', price: 100 , imgurl:'../../../public/images/Group 1.png'},
//   { id: 2, name: 'المنتج الثاني', price: 200 },
//   { id: 3, name: 'المنتج الثالث', price: 300 },
// ];

// const ProductsPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">قائمة المنتجات</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.price} ريال</p>
//             <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
//               عرض التفاصيل
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
////////////////////////////////////////////////////////////////////////
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../../components/products/ProductList';

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

 

  return (
    <div className=" mx-auto px-4 py-8">   
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