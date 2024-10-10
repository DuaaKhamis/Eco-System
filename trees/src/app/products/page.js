'use client';

import React from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'المنتج الأول', price: 100 },
  { id: 2, name: 'المنتج الثاني', price: 200 },
  { id: 3, name: 'المنتج الثالث', price: 300 },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">قائمة المنتجات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price} ريال</p>
            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              عرض التفاصيل
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;