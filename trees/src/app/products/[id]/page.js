
// 'use client';

// import React, { useState } from 'react';
// import { useParams } from 'next/navigation';
// import { useCart } from '../../../context/CartContext';

// const products = [
//   { id: 1, name: 'المنتج الأول', price: 100, description: 'وصف المنتج الأول' , imgurl:'../../../../public/images/Group 2.png'},
//   { id: 2, name: 'المنتج الثاني', price: 200, description: 'وصف المنتج الثاني',imgurl:'../../../../public/images/Group 2.png' },
//   { id: 3, name: 'المنتج الثالث', price: 300, description: 'وصف المنتج الثالث',imgurl:'../../../../public/images/Group 2.png' },
// ];

// const ProductDetailsPage = () => {
//   const params = useParams();
//   const { addToCart } = useCart();
//   const [addedToCart, setAddedToCart] = useState(false);
//   const product = products.find((p) => p.id === parseInt(params.id));

//   if (!product) {
//     return <div>المنتج غير موجود</div>;
//   }

//   const handleAddToCart = () => {
//     console.log('Attempting to add to cart:', product);
//     addToCart(product);

//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 2000);
//   };

//   // useEffect(() => {
//   //   console.log('Current cart:', cart);
//   // }, [cart]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
//       <p className="text-gray-600 mb-4">{product.price} ريال</p>
//       <p className="mb-4">{product.description}</p>
//       <div className="md:flex-shrink-0 md:w-1/2">
//          <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.title} />
//        </div>
//       <button
//         onClick={handleAddToCart}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         أضف إلى السلة
//       </button>
//       {addedToCart && (
//         <p className="text-green-500 mt-2">تمت إضافة المنتج إلى السلة!</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetailsPage;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'use client';
// import React, { useState } from 'react';
// import { useParams } from 'next/navigation';
// import { useCart } from '../../../context/CartContext';
// import { ShoppingCart } from 'lucide-react';

// const products = [
//   { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1', image: '/product1.jpg' },
//   { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2', image: '/product2.jpg' },
//   { id: 3, name: 'Product 3', price: 300, description: 'Description of Product 3', image: '/product3.jpg' },
// ];

// const ProductDetailsPage = () => {
//   const params = useParams();
//   const { addToCart } = useCart();
//   const [addedToCart, setAddedToCart] = useState(false);

//   const product = products.find((p) => p.id === parseInt(params.id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product);
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 2000);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row">
//         <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover" />
//         <div className="md:ml-8 mt-4 md:mt-0">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
//           <p className="mb-8">{product.description}</p>
//           <button
//             onClick={handleAddToCart}
//             className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 flex items-center"
//           >
//             <ShoppingCart className="mr-2" />
//             Add to Cart
//           </button>
//           {addedToCart && (
//             <p className="text-green-500 mt-2">Product added to cart!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;
///////////////////////////////////////////////////////////////////////////////////////
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import axios from 'axios';
// import { Leaf, Sun, Droplet, ThermometerSun, ArrowBigLeft, ShoppingCart } from 'lucide-react';
// import { useCart } from '../../../context/CartContext';
// import Link from 'next/link';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// const ProductDetailsPage = () => {
//   const params = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { addToCart } = useCart();
//   const [addedToCart, setAddedToCart] = useState(false);

//   const handleAddToCart = () => {
//     addToCart(product);
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 3000);
//   };

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`/api/products/${params.id}`);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch product details');
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [params.id]);

//   if (loading) return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-red-500 text-xl">{error}</div>
//     </div>
//   );
  
//   if (!product) return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-gray-500 text-xl">Product not found</div>
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0 md:w-1/2">
//             <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.title} />
//           </div>
//           <div className="p-8 md:w-1/2 flex flex-col justify-between">
//             <div>
//               <div className='flex justify-between items-center mb-6'>
//                 <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{product.category}</div>
//                 <Link href="/products">
//                   <span className="inline-flex items-center bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
//                     <ArrowBigLeft className="mr-1 h-4 w-4" /> Back to Products
//                   </span>
//                 </Link>
//               </div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
//               <p className="text-gray-600 mb-6">{product.description}</p>
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex items-center text-gray-500">
//                   <Leaf className="h-5 w-5 mr-1" /> Eco-friendly
//                 </div>
//                 <div className="flex items-center text-gray-500">
//                   <Sun className="h-5 w-5 mr-1" /> Sustainable
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="mb-6">
//                 <span className="text-3xl font-bold text-gray-900">${product.price}</span>
//                 <span className="text-sm text-gray-500 ml-2">USD</span>
//               </div>
//               <button 
//                 onClick={handleAddToCart} 
//                 className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
//               >
//                 <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {addedToCart && (
//         <Alert className="fixed bottom-4 right-4 w-auto bg-green-100 border-green-500">
//           <AlertDescription className="text-green-800">
//             Product added to cart successfully!
//           </AlertDescription>
//         </Alert>
//       )}
//     </div>
//   );
// };

// export default ProductDetailsPage;
///////////////////////////////////////////////////////////////////////////////////
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Leaf, Sun, ShoppingCart, ArrowBigLeft } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding to cart:', product); // Debug log
      addToCart({
        id: product._id, // Use _id as the id
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        // Add any other necessary product details
      });
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        console.log('Fetched product:', response.data); // Debug log
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err); // Debug log
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
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.title} />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className='flex justify-between items-center mb-6'>
                <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{product.category}</div>
                <Link href="/products">
                  <span className="inline-flex items-center bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                    <ArrowBigLeft className="mr-1 h-4 w-4" /> Back to Products
                  </span>
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-gray-500">
                  <Leaf className="h-5 w-5 mr-1" /> Eco-friendly
                </div>
                <div className="flex items-center text-gray-500">
                  <Sun className="h-5 w-5 mr-1" /> Sustainable
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-500 ml-2">USD</span>
              </div>
              <button 
                onClick={handleAddToCart} 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {addedToCart && (
        <Alert className="fixed bottom-4 right-4 w-auto bg-green-100 border-green-500">
          <AlertDescription className="text-green-800">
            Product added to cart successfully!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ProductDetailsPage;