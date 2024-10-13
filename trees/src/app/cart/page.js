
// 'use client';

// import React, { useEffect } from 'react';
// import { useCart } from '../../context/CartContext';

// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   useEffect(() => {
//     console.log('Current cart:', cart);
//   }, [cart]);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">سلة التسوق</h1>
//       {cart.length === 0 ? (
//         <p>السلة فارغة</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id} className="mb-2 p-2 border rounded">
//                 <span>{item.name}</span> - 
//                 <span>{item.price} ريال</span> - 
//                 <span>الكمية: {item.quantity}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="ml-2 text-red-500 hover:text-red-700"
//                 >
//                   إزالة
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-4 font-bold">الإجمالي: {total} ريال</p>
//           <button
//             onClick={clearCart}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             إفراغ السلة
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'use client';
// import React from 'react';
// import { useCart } from '../../context/CartContext';
// import { Plus, Minus, Trash } from 'lucide-react';

// const CartPage = () => {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {cart.map((item) => (
//               <li key={item.id} className="py-4 flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//                   <div>
//                     <h3 className="text-lg font-medium">{item.name}</h3>
//                     <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                     className="p-1 rounded-full hover:bg-gray-100"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="mx-2">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 rounded-full hover:bg-gray-100"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-4 p-1 rounded-full text-red-500 hover:bg-red-100"
//                   >
//                     <Trash className="w-4 h-4" />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-8 flex justify-between items-center">
//             <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//             <button
//               onClick={clearCart}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
//////////////////////////////////////////////////////////////////////////////
// 'use client';
// import React, { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '../../context/CartContext';
// import { Plus, Minus, Trash, Leaf } from 'lucide-react';


// const CartPage = () => {
//   const router = useRouter();
//   const { cart, removeFromCart, updateQuantity, clearCart,isLoggedIn  } = useCart();


//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.push('/login');
//     }
//   }, [isLoggedIn, router]);


  
//   if (!isLoggedIn) {
//     return null; // Or a loading spinner
//   }

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleCheckout = () => {
//     router.push('/checkout');
//   };

//   return (
//     <div className="container mx-auto p-4 bg-white">
//       <h1 className="text-3xl font-bold mb-6 text-[#333333] flex items-center">
//         <Leaf className="mr-2 text-[#55B76B]" />
//         Your Eco-Friendly Cart
//       </h1>
//       {cart.length === 0 ? (
//         <p className="text-[#333333]">Your cart is empty. Start planting some trees!</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-[#8BD2A0]">
//             {cart.map((item) => (
//               <li key={item.id} className="py-6 flex items-center justify-between">
//                  <div className="flex items-center">
//                  <img className="h-full w-full object-cover" src={item.imageUrl} alt={item.title} />
//                   <div>
//                   <div>
//                     <h3 className="text-lg font-medium text-[#333333]">{item.title}</h3>
//                     <p className="text-gray-600 mb-2">{item.description}</p> 
//                     <p className="text-[#55B76B] font-semibold">${item.price.toFixed(2)}</p>
//                   </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                     className="p-1 rounded-full hover:bg-[#8BD2A0] text-[#333333]"
//                   >
//                     <Minus className="w-5 h-5" />
//                   </button>
//                   <span className="mx-3 text-[#333333]">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 rounded-full hover:bg-[#8BD2A0] text-[#333333]"
//                   >
//                     <Plus className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-6 p-1 rounded-full text-red-500 hover:bg-red-100"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-8 flex justify-between items-center">
//             <p className="text-2xl font-bold text-[#333333]">Total: ${total.toFixed(2)}</p>
//             <div>
//               <button
//                 onClick={clearCart}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 mr-4"
//               >
//                 Clear Cart
//               </button>
//               <button
//                 onClick={handleCheckout}
//                 className="bg-[#55B76B] text-white px-6 py-3 rounded hover:bg-[#8BD2A0] transition duration-200 font-semibold"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
//////////////////////////////////////////////////////////////////////////////////////////
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, Trash, Leaf, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, clearCart, isLoggedIn } = useCart();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-[#333333] flex items-center">
        <Leaf className="mr-2 text-[#55B76B]" />
        Your Eco-Friendly Cart
      </h1>
      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <ShoppingCart size={64} className="mx-auto mb-4 text-[#8BD2A0]" />
          <p className="text-[#333333] text-xl">Your cart is empty. Start planting some trees!</p>
        </motion.div>
      ) : (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <motion.li
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.title} />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#333333]">{item.title}</h3>
                  {/* <p className="text-gray-600 mb-2">{item.description}</p> */}
                  <p className="text-[#55B76B] font-semibold mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 rounded-full hover:bg-[#8BD2A0] text-[#333333]"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="mx-3 text-[#333333]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-[#8BD2A0] text-[#333333]"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 rounded-full text-red-500 hover:bg-red-100"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-2xl font-bold text-[#333333] mb-4 md:mb-0">Total: ${total.toFixed(2)}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Cart
              </motion.button>
              <motion.button
                onClick={handleCheckout}
                className="bg-[#55B76B] text-white px-6 py-3 rounded hover:bg-[#8BD2A0] transition duration-200 font-semibold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Proceed to Checkout
                <ArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;