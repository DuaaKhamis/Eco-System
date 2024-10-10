
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '../../../context/CartContext';

const products = [
  { id: 1, name: 'المنتج الأول', price: 100, description: 'وصف المنتج الأول' },
  { id: 2, name: 'المنتج الثاني', price: 200, description: 'وصف المنتج الثاني' },
  { id: 3, name: 'المنتج الثالث', price: 300, description: 'وصف المنتج الثالث' },
];

const ProductDetailsPage = () => {
  const params = useParams();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  const handleAddToCart = () => {
    console.log('Attempting to add to cart:', product);
    addToCart(product);
   
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // useEffect(() => {
  //   console.log('Current cart:', cart);
  // }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.price} ريال</p>
      <p className="mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        أضف إلى السلة
      </button>
      {addedToCart && (
        <p className="text-green-500 mt-2">تمت إضافة المنتج إلى السلة!</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;