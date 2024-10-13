// // pages/checkout.js
// 'use client';
// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });

//   const handleInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // سنقوم بإضافة منطق معالجة الدفع هنا لاحقًا
//     console.log('Payment submitted:', paymentInfo);
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
//           <ul className="divide-y divide-gray-200">
//             {cart.map((item) => (
//               <li key={item.id} className="py-2">
//                 <span>{item.name}</span> - <span>${item.price.toFixed(2)} x {item.quantity}</span>
//               </li>
//             ))}
//           </ul>
//           <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={paymentInfo.cardNumber}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="expiryDate" className="block mb-1">Expiry Date</label>
//                 <input
//                   type="text"
//                   id="expiryDate"
//                   name="expiryDate"
//                   value={paymentInfo.expiryDate}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   placeholder="MM/YY"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="cvv" className="block mb-1">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   name="cvv"
//                   value={paymentInfo.cvv}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="name" className="block mb-1">Name on Card</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={paymentInfo.name}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
//             >
//               Pay ${total.toFixed(2)}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '../../context/CartContext';
// import { Leaf, CreditCard } from 'lucide-react';

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });

//   const handleInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Here you would typically send the payment info to your backend
//     console.log('Payment submitted:', paymentInfo);
    
//     // Simulate a successful payment
//     setTimeout(() => {
//       clearCart();
//       router.push('/order-confirmation/123'); // Replace '123' with actual order ID
//     }, 1500);
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       {/* Rest of the component remains the same */}
//     </div>
//   );
// };

// export default CheckoutPage;
//////////////////////////////////////////////////////////////////////
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard } from 'lucide-react';

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });

//   const handleInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Payment submitted:', paymentInfo);
    
//     // Simulate a successful payment
//     setTimeout(() => {
//       clearCart();
//       router.push('/order-confirmation/123'); // Replace '123' with actual order ID
//     }, 1500);
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h1 className="text-3xl font-bold mb-8 text-[#333333] flex items-center">
//         <Leaf className="mr-2 text-[#55B76B]" />
//         Eco-Friendly Checkout
//       </h1>
//       {/* Rest of the component remains the same */}
//     </div>
//   );
// };

// export default CheckoutPage;
////////////////////////////////////////////////////////////////////////////////////////////////
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard } from 'lucide-react';

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const token = localStorage.getItem('token');
//   //   try {
//   //     const response = await fetch('/api/checkout', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'Authorization': `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify({
//   //         cart,
//   //         paymentInfo,
//   //         shippingAddress,
//   //       }),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error('Checkout failed');
//   //     }

//   //     const data = await response.json();
//   //     clearCart();
//   //     router.push(`/order-confirmation/${data.orderId}`);
//   //   } catch (error) {
//   //     console.error('Checkout error:', error);
//   //     alert('An error occurred during checkout. Please try again.');
//   //     // Handle error (show error message to user)
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const token = localStorage.getItem('token');
//   console.log(cart);
//   if (!token) {
//     alert('You must be logged in to checkout');
//     return;
//   }
//   try {
//     const response = await fetch('http://localhost:3000/api/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         cart,
//         paymentInfo,
//         shippingAddress,
//         productId
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Error data:', errorData);
//       throw new Error(errorData.message || 'Checkout failed');
//     }
    

//     const data = await response.json();
//     console.log('Response data:', data);

//     clearCart();
//     router.push(`/orderConfirmation/${data.orderId}`);
//     console.log('Redirecting to order confirmation:', data.orderId);

//   } catch (error) {
//     console.error('Checkout error:', error);
//     alert(`Checkout failed: ${error.message}`);
//   }
// };


//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h1 className="text-3xl font-bold mb-8 text-[#333333] flex items-center">
//         <Leaf className="mr-2 text-[#55B76B]" />
//         Eco-Friendly Checkout
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between mb-2">
//               <span>{item.name} x {item.quantity}</span>
//               <span>${(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))}
//           <div className="text-xl font-bold mt-4">
//             Total: ${total.toFixed(2)}
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//           <input
//             type="text"
//             name="street"
//             placeholder="Street Address"
//             value={shippingAddress.street}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={shippingAddress.city}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={shippingAddress.state}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={shippingAddress.country}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip Code"
//             value={shippingAddress.zipCode}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />

//           <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Card Number"
//             value={paymentInfo.cardNumber}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <div className="flex space-x-4">
//             <input
//               type="text"
//               name="expiryDate"
//               placeholder="MM/YY"
//               value={paymentInfo.expiryDate}
//               onChange={handlePaymentInputChange}
//               className="w-1/2 p-2 mb-4 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="cvv"
//               placeholder="CVV"
//               value={paymentInfo.cvv}
//               onChange={handlePaymentInputChange}
//               className="w-1/2 p-2 mb-4 border rounded"
//               required
//             />
//           </div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name on Card"
//             value={paymentInfo.name}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#55B76B] text-white py-2 px-4 rounded hover:bg-[#4ca061] transition duration-200"
//           >
//             <CreditCard className="inline-block mr-2" />
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
///////////////////////////////////////////////////////////////////////////////
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard } from 'lucide-react';

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//     method: 'credit_card', // Default payment method
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     console.log('Cart before submission:', cart);
//     if (!token) {
//       alert('You must be logged in to checkout');
//       return;
//     }
//     try {
//       const formattedCart = cart.map(item => ({
//         product: item._id,
//         quantity: item.quantity
//       }));

//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cart: formattedCart,
//           paymentInfo,
//           shippingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error data:', errorData);
//         throw new Error(errorData.message || 'Checkout failed');
//       }
      
//       const data = await response.json();
//       console.log('Response data:', data);

//       clearCart();
//       // router.push(`/orderConfirmation/${data.orderId}`);
//       // console.log('Redirecting to order confirmation:', data.orderId);

//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert(`Checkout failed: ${error.message}`);
//     }
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6 bg-white">
//       <h1 className="text-3xl font-bold mb-8 text-[#333333] flex items-center">
//         <Leaf className="mr-2 text-[#55B76B]" />
//         Eco-Friendly Checkout
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//           {cart.map((item) => (
//             <div key={item._id} className="flex justify-between mb-2">
//               <span>{item.title} x {item.quantity}</span>
//               <span>${(item.price * item.quantity).toFixed(2)}</span>
              
//             </div>
//           ))}
//           <div className="text-xl font-bold mt-4">
//             Total: ${total.toFixed(2)}
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//            <input
//             type="text"
//             name="street"
//             placeholder="Street Address"
//             value={shippingAddress.street}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={shippingAddress.city}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={shippingAddress.state}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={shippingAddress.country}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip Code"
//             value={shippingAddress.zipCode}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />

//           <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>

//           <select
//             name="method"
//             value={paymentInfo.method}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           >
//             <option value="credit_card">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             {/* Add more payment methods as needed */}
//           </select>
//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Card Number"
//             value={paymentInfo.cardNumber}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />


//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Card Number"
//             value={paymentInfo.cardNumber}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <div className="flex space-x-4">
//             <input
//               type="text"
//               name="expiryDate"
//               placeholder="MM/YY"
//               value={paymentInfo.expiryDate}
//               onChange={handlePaymentInputChange}
//               className="w-1/2 p-2 mb-4 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="cvv"
//               placeholder="CVV"
//               value={paymentInfo.cvv}
//               onChange={handlePaymentInputChange}
//               className="w-1/2 p-2 mb-4 border rounded"
//               required
//             />
//           </div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name on Card"
//             value={paymentInfo.name}
//             onChange={handlePaymentInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#55B76B] text-white py-2 px-4 rounded hover:bg-[#4ca061] transition duration-200"
//           >
//             <CreditCard className="inline-block mr-2" />
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
//////////////////////////////////////////////////////////////////////////////////////
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard, PaypalIcon } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (paymentMethod === 'credit_card') {
//       await processCardPayment();
//     }
//     // PayPal payment is handled separately by PayPal button
//   };

//   const processCardPayment = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('You must be logged in to checkout');
//       return;
//     }
//     try {
//       const formattedCart = cart.map(item => ({
//         product: item._id,
//         quantity: item.quantity
//       }));

//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cart: formattedCart,
//           paymentInfo: { ...paymentInfo, method: 'credit_card' },
//           shippingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Checkout failed');
//       }
      
//       // const data = await response.json();
//       // console.log('Order placed successfully:', data);
//       // clearCart();
//       // router.push('/orderConfirmation');
      
//     const data = await response.json();
//     console.log('Order placed successfully:', data);
//     localStorage.setItem('lastOrderId', data.orderId); 
//     clearCart();
//     router.push('/orderConfirmation');
    
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert(`Checkout failed: ${error.message}`);
//     }
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//       <div className="container mx-auto p-6 bg-white">
//         <h1 className="text-3xl font-bold mb-8 text-[#333333] flex items-center">
//           <Leaf className="mr-2 text-[#55B76B]" />
//           Eco-Friendly Checkout
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//             {cart.map((item) => (
//               <div key={item._id} className="flex justify-between mb-2">
//                 <span>{item.title} x {item.quantity}</span>
//                 <span>${(item.price * item.quantity).toFixed(2)}</span>
//                 <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.title} />
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4">
//               Total: ${total.toFixed(2)}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//             <form onSubmit={handleSubmit}>
//               {/* Shipping address inputs */}

//           <input
//             type="text"
//             name="street"
//             placeholder="Street Address"
//             value={shippingAddress.street}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={shippingAddress.city}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={shippingAddress.state}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={shippingAddress.country}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip Code"
//             value={shippingAddress.zipCode}
//             onChange={handleShippingInputChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />

//               <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     className="form-radio"
//                     name="paymentMethod"
//                     value="credit_card"
//                     checked={paymentMethod === 'credit_card'}
//                     onChange={() => setPaymentMethod('credit_card')}
//                   />
//                   <span className="ml-2">Credit Card</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input
//                     type="radio"
//                     className="form-radio"
//                     name="paymentMethod"
//                     value="paypal"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={() => setPaymentMethod('paypal')}
//                   />
//                   <span className="ml-2">PayPal</span>
//                 </label>
//               </div>

//               {paymentMethod === 'credit_card' && (
//                 <>
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     placeholder="Card Number"
//                     value={paymentInfo.cardNumber}
//                     onChange={handlePaymentInputChange}
//                     className="w-full p-2 mb-4 border rounded"
//                     required
//                   />
//                   {/* Add other credit card inputs here */}
//                   <button
//                     type="submit"
//                     className="w-full bg-[#55B76B] text-white py-2 px-4 rounded hover:bg-[#4ca061] transition duration-200"
//                   >
//                     <CreditCard className="inline-block mr-2" />
//                     Pay with Credit Card
//                   </button>
//                 </>
//               )}
//             </form>

//             {paymentMethod === 'paypal' && (
//               <PayPalButtons
//                 createOrder={(data, actions) => {
//                   return actions.order.create({
//                     purchase_units: [
//                       {
//                         amount: {
//                           value: total.toFixed(2),
//                         },
//                       },
//                     ],
//                   });
//                 }}
//                 onApprove={async (data, actions) => {
//                   const details = await actions.order.capture();
//                   const token = localStorage.getItem('token');
//                   if (!token) {
//                     alert('You must be logged in to checkout');
//                     return;
//                   }
//                   try {
//                     const formattedCart = cart.map(item => ({
//                       product: item._id,
//                       quantity: item.quantity
//                     }));
//                     const response = await fetch('/api/checkout', {
//                       method: 'POST',
//                       headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`,
//                       },
//                       body: JSON.stringify({
//                         cart: formattedCart,
//                         paymentInfo: { method: 'paypal', paypalOrderId: details.id },
//                         shippingAddress,
//                       }),
//                     });
//                     if (!response.ok) {
//                       throw new Error('Failed to process order');
//                     }
//                     clearCart();
//                     // في CheckoutPage.js، بعد نجاح عملية الدفع
//                      localStorage.setItem('lastOrderId', data.orderID);
//                      router.push('/orderConfirmation');
//                   } catch (error) {
//                     console.error('Error processing PayPal order:', error);
//                     alert('Failed to process PayPal payment');
//                   }

//                   // const orderResponse = await response.json();
//                   // localStorage.setItem('lastOrderId', orderResponse.orderId); // تأكد من أن هذا السطر موجود
//                   // clearCart();
//                   // router.push('/orderConfirmation');
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;
//////////////////////////////////////////////////////////////////
// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard, TreePine, Package } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (paymentMethod === 'credit_card') {
//       await processCardPayment();
//     }
//   };
//   const processCardPayment = async () => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           alert('You must be logged in to checkout');
//           return;
//         }
//         try {
//           const formattedCart = cart.map(item => ({
//             product: item._id,
//             quantity: item.quantity
//           }));
    
//           const response = await fetch('/api/checkout', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//               cart: formattedCart,
//               paymentInfo: { ...paymentInfo, method: 'credit_card' },
//               shippingAddress,
//             }),
//           });
    
//           if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || 'Checkout failed');
//           }

          
//         const data = await response.json();
//         console.log('Order placed successfully:', data);
//         localStorage.setItem('lastOrderId', data.orderId); 
//         clearCart();
//         router.push('/orderConfirmation');
        
//         } catch (error) {
//           console.error('Checkout error:', error);
//           alert(`Checkout failed: ${error.message}`);
//         }
//       };
    
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   return (
//     <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//     <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-white">
//       <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center justify-center">
//         <Leaf className="mr-2 text-green-600" />
//         Eco-Friendly Checkout
//       </h1>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="flex items-center text-2xl font-semibold text-green-700 mb-4">
//             <Package className="mr-2" />
//             Order Summary
//           </h2>
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div key={item._id} className="flex items-center mb-4 bg-gray-50 p-4 rounded-lg">
//                 <img className="w-16 h-16 object-cover rounded-md mr-4" src={item.imageUrl} alt={item.title} />
//                 <div className="flex-grow">
//                   <h3 className="font-semibold text-green-800">{item.title}</h3>
//                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//                 <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4 text-right text-green-800">
//               Total: ${total.toFixed(2)}
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="flex items-center text-2xl font-semibold text-green-700 mb-4">
//             <TreePine className="mr-2" />
//             Shipping & Payment
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Shipping address inputs */}
//             {/* ... (keep the shipping address inputs from the second code snippet) ... */}
            
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//               <div className="mt-2 space-y-2">
//                 <div className="flex items-center">
//                   <input
//                     id="credit_card"
//                     name="paymentMethod"
//                     type="radio"
//                     checked={paymentMethod === 'credit_card'}
//                     onChange={() => setPaymentMethod('credit_card')}
//                     className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
//                   />
//                   <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-700">
//                     Credit Card
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     id="paypal"
//                     name="paymentMethod"
//                     type="radio"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={() => setPaymentMethod('paypal')}
//                     className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
//                   />
//                   <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
//                     PayPal
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {paymentMethod === 'credit_card' && (
//               <div className="space-y-2">
//                 <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
//                 <input
//                   id="cardNumber"
//                   name="cardNumber"
//                   type="text"
//                   value={paymentInfo.cardNumber}
//                   onChange={handlePaymentInputChange}
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
//                 >
//                   <CreditCard className="mr-2" />
//                   Pay with Credit Card
//                 </button>
//               </div>
//             )}
//           </form>

//           {paymentMethod === 'paypal' && (
//             <div className="mt-4">
//               <PayPalButtons
//                 createOrder={(data, actions) => {
//                   return actions.order.create({
//                     purchase_units: [
//                       {
//                         amount: {
//                           value: total.toFixed(2),
//                         },
//                       },
//                     ],
//                   });
//                 }}
//                 onApprove={async (data, actions) => {
//                   const details = await actions.order.capture();
//                   const token = localStorage.getItem('token');
//                   if (!token) {
//                     alert('You must be logged in to checkout');
//                     return;
//                   }
//                   try {
//                     const formattedCart = cart.map(item => ({
//                       product: item._id,
//                       quantity: item.quantity
//                     }));
//                     const response = await fetch('/api/checkout', {
//                       method: 'POST',
//                       headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`,
//                       },
//                       body: JSON.stringify({
//                         cart: formattedCart,
//                         paymentInfo: { method: 'paypal', paypalOrderId: details.id },
//                         shippingAddress,
//                       }),
//                     });
//                     if (!response.ok) {
//                       throw new Error('Failed to process order');
//                     }
//                     clearCart();
//                     localStorage.setItem('lastOrderId', data.orderID);
//                     router.push('/orderConfirmation');
//                   } catch (error) {
//                     console.error('Error processing PayPal order:', error);
//                     alert('Failed to process PayPal payment');
//                   }
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;
/////////////////////////////////////////////////////////////////////////////////////////////
// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard, ShoppingBag, Bell } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (paymentMethod === 'credit_card') {
//       await processCardPayment();
//     }
//   };

//   const processCardPayment = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('You must be logged in to checkout');
//       return;
//     }
//     try {
//       const formattedCart = cart.map(item => ({
//         product: item._id,
//         quantity: item.quantity
//       }));

//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cart: formattedCart,
//           paymentInfo: { ...paymentInfo, method: 'credit_card' },
//           shippingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Checkout failed');
//       }
      
//       const data = await response.json();
//       console.log('Order placed successfully:', data);
//       localStorage.setItem('lastOrderId', data.orderId); 
//       clearCart();
//       router.push('/orderConfirmation');
    
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert(`Checkout failed: ${error.message}`);
//     }
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//       <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-white">

//         <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center justify-center">
//           <Leaf className="mr-2 text-green-600" />
//           Eco-Friendly Checkout
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
//               <ShoppingBag className="mr-2" />
//               Order Summary
//             </h2>
//             {cart.map((item) => (
//               <div key={item._id} className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-lg">
//                 <img className="w-16 h-16 object-cover rounded-md" src={item.imageUrl || '/placeholder-image.jpg'} alt={item.title} />
//                 <div className="flex-grow ml-4">
//                   <h3 className="font-semibold text-green-800">{item.title}</h3>
//                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//                 <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4 text-right text-green-800">
//               Total: ${total.toFixed(2)}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
//               <Bell className="mr-2" />
//               Shipping & Payment
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
//                 <div className="flex items-center space-x-4">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       className="form-radio text-green-600"
//                       name="paymentMethod"
//                       value="credit_card"
//                       checked={paymentMethod === 'credit_card'}
//                       onChange={() => setPaymentMethod('credit_card')}
//                     />
//                     <span className="ml-2">Credit Card</span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       className="form-radio text-green-600"
//                       name="paymentMethod"
//                       value="paypal"
//                       checked={paymentMethod === 'paypal'}
//                       onChange={() => setPaymentMethod('paypal')}
//                     />
//                     <span className="ml-2">PayPal</span>
//                   </label>
//                 </div>
//               </div>

//               {paymentMethod === 'credit_card' && (
//                 <>
//                   <div className="mb-4">
//                     <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
//                     <input
//                       type="text"
//                       id="cardNumber"
//                       name="cardNumber"
//                       placeholder="1234 5678 9012 3456"
//                       value={paymentInfo.cardNumber}
//                       onChange={handlePaymentInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
//                   >
//                     <CreditCard className="mr-2" />
//                     Pay with Credit Card
//                   </button>
//                 </>
//               )}
//             </form>

//             {paymentMethod === 'paypal' && (
//               <div className="mt-4">
//                 <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [
//                         {
//                           amount: {
//                             value: total.toFixed(2),
//                           },
//                         },
//                       ],
//                     });
//                   }}
//                   onApprove={async (data, actions) => {
//                     const details = await actions.order.capture();
//                     const token = localStorage.getItem('token');
//                     if (!token) {
//                       alert('You must be logged in to checkout');
//                       return;
//                     }
//                     try {
//                       const formattedCart = cart.map(item => ({
//                         product: item._id,
//                         quantity: item.quantity
//                       }));
//                       const response = await fetch('/api/checkout', {
//                         method: 'POST',
//                         headers: {
//                           'Content-Type': 'application/json',
//                           'Authorization': `Bearer ${token}`,
//                         },
//                         body: JSON.stringify({
//                           cart: formattedCart,
//                           paymentInfo: { method: 'paypal', paypalOrderId: details.id },
//                           shippingAddress,
//                         }),
//                       });
//                       if (!response.ok) {
//                         throw new Error('Failed to process order');
//                       }
//                       clearCart();
//                       localStorage.setItem('lastOrderId', data.orderID);
//                       router.push('/orderConfirmation');
//                     } catch (error) {
//                       console.error('Error processing PayPal order:', error);
//                       alert('Failed to process PayPal payment');
//                     }
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;
///////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard, ShoppingBag, Bell, Truck } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (paymentMethod === 'credit_card') {
//       await processCardPayment();
//     }
//   };

//   const processCardPayment = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('You must be logged in to checkout');
//       return;
//     }
//     try {
//       const formattedCart = cart.map(item => ({
//         product: item._id,
//         quantity: item.quantity
//       }));

//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cart: formattedCart,
//           paymentInfo: { ...paymentInfo, method: 'credit_card' },
//           shippingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Checkout failed');
//       }
      
//       const data = await response.json();
//       console.log('Order placed successfully:', data);
//       localStorage.setItem('lastOrderId', data.orderId); 
//       clearCart();
//       router.push('/orderConfirmation');
    
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert(`Checkout failed: ${error.message}`);
//     }
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const isShippingValid = () => {
//     return Object.values(shippingAddress).every(value => value.trim() !== '');
//   };

//   return (
//     <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//       <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-white">
//         <nav className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-green-800">GreenHope</h1>
//           <div className="flex items-center space-x-4">
//             <a href="#" className="text-gray-600 hover:text-green-800">Shop</a>
//             <a href="#" className="text-gray-600 hover:text-green-800">Event</a>
//             <a href="#" className="text-gray-600 hover:text-green-800">Contact us</a>
//             <a href="#" className="text-gray-600 hover:text-green-800">About us</a>
//             <a href="#" className="text-gray-600 hover:text-green-800">Profile</a>
//             <a href="#" className="text-gray-600 hover:text-green-800 relative">
//               <ShoppingBag className="w-6 h-6" />
//               <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cart.length}</span>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-green-800">Logout</a>
//           </div>
//         </nav>

//         <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center justify-center">
//           <Leaf className="mr-2 text-green-600" />
//           Eco-Friendly Checkout
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
//               <ShoppingBag className="mr-2" />
//               Order Summary
//             </h2>
//             {cart.map((item) => (
//               <div key={item._id} className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-lg">
//                 <img className="w-16 h-16 object-cover rounded-md" src={item.imageUrl || '/placeholder-image.jpg'} alt={item.title} />
//                 <div className="flex-grow ml-4">
//                   <h3 className="font-semibold text-green-800">{item.title}</h3>
//                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//                 <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4 text-right text-green-800">
//               Total: ${total.toFixed(2)}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
//               <Bell className="mr-2" />
//               Shipping & Payment
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2 text-green-700 flex items-center">
//                   <Truck className="mr-2" />
//                   Shipping Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
//                     <input
//                       type="text"
//                       id="street"
//                       name="street"
//                       value={shippingAddress.street}
//                       onChange={handleShippingInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                     <input
//                       type="text"
//                       id="city"
//                       name="city"
//                       value={shippingAddress.city}
//                       onChange={handleShippingInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
//                     <input
//                       type="text"
//                       id="state"
//                       name="state"
//                       value={shippingAddress.state}
//                       onChange={handleShippingInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                     <input
//                       type="text"
//                       id="country"
//                       name="country"
//                       value={shippingAddress.country}
//                       onChange={handleShippingInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
//                     <input
//                       type="text"
//                       id="zipCode"
//                       name="zipCode"
//                       value={shippingAddress.zipCode}
//                       onChange={handleShippingInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
//                 <div className="flex items-center space-x-4">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       className="form-radio text-green-600"
//                       name="paymentMethod"
//                       value="credit_card"
//                       checked={paymentMethod === 'credit_card'}
//                       onChange={() => setPaymentMethod('credit_card')}
//                     />
//                     <span className="ml-2">Credit Card</span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       className="form-radio text-green-600"
//                       name="paymentMethod"
//                       value="paypal"
//                       checked={paymentMethod === 'paypal'}
//                       onChange={() => setPaymentMethod('paypal')}
//                     />
//                     <span className="ml-2">PayPal</span>
//                   </label>
//                 </div>
//               </div>

//               {paymentMethod === 'credit_card' && (
//                 <>
//                   <div className="mb-4">
//                     <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
//                     <input
//                       type="text"
//                       id="cardNumber"
//                       name="cardNumber"
//                       placeholder="1234 5678 9012 3456"
//                       value={paymentInfo.cardNumber}
//                       onChange={handlePaymentInputChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
//                     disabled={!isShippingValid()}
//                   >
//                     <CreditCard className="mr-2" />
//                     Pay with Credit Card
//                   </button>
//                 </>
//               )}
//             </form>

//             {paymentMethod === 'paypal' && (
//               <div className="mt-4">
//                 <PayPalButtons
//                   createOrder={(data, actions) => {
//                     if (!isShippingValid()) {
//                       alert('Please fill in all shipping information before proceeding.');
//                       return Promise.reject('Shipping information incomplete');
//                     }
//                     return actions.order.create({
//                       purchase_units: [
//                         {
//                           amount: {
//                             value: total.toFixed(2),
//                           },
//                         },
//                       ],
//                     });
//                   }}
//                   onApprove={async (data, actions) => {
//                     const details = await actions.order.capture();
//                     const token = localStorage.getItem('token');
//                     if (!token) {
//                       alert('You must be logged in to checkout');
//                       return;
//                     }
//                     try {
//                       const formattedCart = cart.map(item => ({
//                         product: item._id,
//                         quantity: item.quantity
//                       }));
//                       const response = await fetch('/api/checkout', {
//                         method: 'POST',
//                         headers: {
//                           'Content-Type': 'application/json',
//                           'Authorization': `Bearer ${token}`,
//                         },
//                         body: JSON.stringify({
//                           cart: formattedCart,
//                           paymentInfo: { method: 'paypal', paypalOrderId: details.id },
//                           shippingAddress,
//                         }),
//                       });
//                       if (!response.ok) {
//                         throw new Error('Failed to process order');
//                       }
//                       clearCart();
//                       localStorage.setItem('lastOrderId', data.orderID);
//                       router.push('/orderConfirmation');
//                     } catch (error) {
//                       console.error('Error processing PayPal order:', error);
//                       alert('Failed to process PayPal payment');
//                     }
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;
///////////////////////////////////////////////////////////////////////////
// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import { Leaf, CreditCard, ShoppingBag, Bell, Truck, MapPin } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/taps";

// const CheckoutPage = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };
//   const router = useRouter();
//   const { cart, clearCart } = useCart();
//   const [activeTab, setActiveTab] = useState("shipping");
//   const [paymentMethod, setPaymentMethod] = useState('credit_card');
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     name: '',
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//   });

//   const handlePaymentInputChange = (e) => {
//     setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
//   };

//   const handleShippingInputChange = (e) => {
//     setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (paymentMethod === 'credit_card') {
//       await processCardPayment();
//     }
//   };

//   const processCardPayment = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('You must be logged in to checkout');
//       return;
//     }
//     try {
//       const formattedCart = cart.map(item => ({
//         product: item._id,
//         quantity: item.quantity
//       }));

//       const response = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cart: formattedCart,
//           paymentInfo: { ...paymentInfo, method: 'credit_card' },
//           shippingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Checkout failed');
//       }
      
//       const data = await response.json();
//       console.log('Order placed successfully:', data);
//       localStorage.setItem('lastOrderId', data.orderId); 
//       clearCart();
//       router.push('/orderConfirmation');
    
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert(`Checkout failed: ${error.message}`);
//     }
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const isShippingValid = () => {
//     return Object.values(shippingAddress).every(value => value.trim() !== '');
//   };

//   return (
//     <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//       <div className="container mx-auto p-6 bg-gradient-to-b from-green-50 to-white">
        

//         <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center justify-center">
//           <Leaf className="mr-2 text-green-600" />
//           Eco-Friendly Checkout
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
//               <ShoppingBag className="mr-2" />
//               Order Summary
//             </h2>
//             {cart.map((item) => (
//               <div key={item._id} className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-lg">
//                 <img className="w-16 h-16 object-cover rounded-md" src={item.imageUrl || '/placeholder-image.jpg'} alt={item.title} />
//                 <div className="flex-grow ml-4">
//                   <h3 className="font-semibold text-green-800">{item.title}</h3>
//                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//                 <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4 text-right text-green-800">
//               Total: ${total.toFixed(2)}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <Tabs value={activeTab} onValueChange={setActiveTab}>
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="shipping" className="flex items-center justify-center">
//                   <Truck className="mr-2" />
//                   Shipping
//                 </TabsTrigger>
//                 <TabsTrigger value="payment" className="flex items-center justify-center">
//                   <CreditCard className="mr-2" />
//                   Payment
//                 </TabsTrigger>
//               </TabsList>
//               <TabsContent value="shipping">
//                 <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
//                   <MapPin className="mr-2" />
//                   Shipping Information
//                 </h3>
//                 <form onSubmit={(e) => { e.preventDefault(); setActiveTab("payment"); }}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
//                       <input
//                         type="text"
//                         id="street"
//                         name="street"
//                         value={shippingAddress.street}
//                         onChange={handleShippingInputChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                       <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={shippingAddress.city}
//                         onChange={handleShippingInputChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         value={shippingAddress.state}
//                         onChange={handleShippingInputChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                       <input
//                         type="text"
//                         id="country"
//                         name="country"
//                         value={shippingAddress.country}
//                         onChange={handleShippingInputChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
//                       <input
//                         type="text"
//                         id="zipCode"
//                         name="zipCode"
//                         value={shippingAddress.zipCode}
//                         onChange={handleShippingInputChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
//                     disabled={!isShippingValid()}
//                   >
//                     <CreditCard className="mr-2" />
//                     Proceed to Payment
//                   </button>
//                 </form>
//               </TabsContent>
//               <TabsContent value="payment">
//                 <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
//                   <CreditCard className="mr-2" />
//                   Payment Method
//                 </h3>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <div className="flex items-center space-x-4">
//                       <label className="inline-flex items-center">
//                         <input
//                           type="radio"
//                           className="form-radio text-green-600"
//                           name="paymentMethod"
//                           value="credit_card"
//                           checked={paymentMethod === 'credit_card'}
//                           onChange={() => setPaymentMethod('credit_card')}
//                         />
//                         <span className="ml-2">Credit Card</span>
//                       </label>
//                       <label className="inline-flex items-center">
//                         <input
//                           type="radio"
//                           className="form-radio text-green-600"
//                           name="paymentMethod"
//                           value="paypal"
//                           checked={paymentMethod === 'paypal'}
//                           onChange={() => setPaymentMethod('paypal')}
//                         />
//                         <span className="ml-2">PayPal</span>
//                       </label>
//                     </div>
//                   </div>

//                   {paymentMethod === 'credit_card' && (
//                     <>
//                       <div className="mb-4">
//                         <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
//                         <input
//                           type="text"
//                           id="cardNumber"
//                           name="cardNumber"
//                           placeholder="1234 5678 9012 3456"
//                           value={paymentInfo.cardNumber}
//                           onChange={handlePaymentInputChange}
//                           className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
//                           required
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
//                       >
//                         <CreditCard className="mr-2" />
//                         Pay with Credit Card
//                       </button>
//                     </>
//                   )}

//                   {paymentMethod === 'paypal' && (
//                     <div className="mt-4">
//                       <PayPalButtons
//                         createOrder={(data, actions) => {
//                           if (!isShippingValid()) {
//                             alert('Please fill in all shipping information before proceeding.');
//                             return Promise.reject('Shipping information incomplete');
//                           }
//                           return actions.order.create({
//                             purchase_units: [
//                               {
//                                 amount: {
//                                   value: total.toFixed(2),
//                                 },
//                               },
//                             ],
//                           });
//                         }}
//                         onApprove={async (data, actions) => {
//                           const details = await actions.order.capture();
//                           const token = localStorage.getItem('token');
//                           if (!token) {
//                             alert('You must be logged in to checkout');
//                             return;
//                           }
//                           try {
//                             const formattedCart = cart.map(item => ({
//                               product: item._id,
//                               quantity: item.quantity
//                             }));
//                             const response = await fetch('/api/checkout', {
//                               method: 'POST',
//                               headers: {
//                                 'Content-Type': 'application/json',
//                                 'Authorization': `Bearer ${token}`,
//                               },
//                               body: JSON.stringify({
//                                 cart: formattedCart,
//                                 paymentInfo: { method: 'paypal', paypalOrderId: details.id },
//                                 shippingAddress,
//                               }),
//                             });
//                             if (!response.ok) {
//                               throw new Error('Failed to process order');
//                             }
//                             clearCart();
//                             localStorage.setItem('lastOrderId', data.orderID);
//                             router.push('/orderConfirmation');
//                           } catch (error) {
//                             console.error('Error processing PayPal order:', error);
//                             alert('Failed to process PayPal payment');
//                           }
//                         }}
//                       />
//                     </div>
//                   )}
//                 </form>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Leaf, CreditCard, ShoppingBag, Bell, Truck, MapPin } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/taps";

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [activeTab, setActiveTab] = useState("shipping");
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });

  const handlePaymentInputChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleShippingInputChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === 'credit_card') {
      await processCardPayment();
    }
  };

  const processCardPayment = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to checkout');
      return;
    }
    try {
      const formattedCart = cart.map(item => ({
        product: item.id,
        quantity: item.quantity
      }));

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: formattedCart,
          paymentInfo: { ...paymentInfo, method: 'credit_card' },
          shippingAddress,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Checkout failed');
      }
      
      const data = await response.json();
      console.log('Order placed successfully:', data);
      localStorage.setItem('lastOrderId', data.orderId); 
      clearCart();
      router.push('/orderConfirmation');
    
    } catch (error) {
      console.error('Checkout error:', error);
      alert(`Checkout failed: ${error.message}`);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const isShippingValid = () => {
    return Object.values(shippingAddress).every(value => value.trim() !== '');
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
      <div className="container mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center justify-center">
          <Leaf className="mr-2 text-green-600" />
          Eco-Friendly Checkout
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
              <ShoppingBag className="mr-2" />
              Order Summary
            </h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 bg-gray-50 p-4 rounded-lg">
                <img className="w-16 h-16 object-cover rounded-md" src={item.imageUrl || '/placeholder-image.jpg'} alt={item.title} />
                <div className="flex-grow ml-4">
                  <h3 className="font-semibold text-green-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="text-xl font-bold mt-4 text-right text-green-800">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="shipping" className="flex items-center justify-center p-2 border-b-2 transition-colors duration-200">
                  <Truck className="mr-2" />
                  Shipping
                </TabsTrigger>
                <TabsTrigger value="payment" className="flex items-center justify-center p-2 border-b-2 transition-colors duration-200">
                  <CreditCard className="mr-2" />
                  Payment
                </TabsTrigger>
              </TabsList>
              <TabsContent value="shipping">
                <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
                  <MapPin className="mr-2" />
                  {/* Shipping Information */}
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); setActiveTab("payment"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        value={shippingAddress.street}
                        onChange={handleShippingInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleShippingInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingAddress.state}
                        onChange={handleShippingInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={shippingAddress.country}
                        onChange={handleShippingInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={shippingAddress.zipCode}
                        onChange={handleShippingInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
                    disabled={!isShippingValid()}
                  >
                    <CreditCard className="mr-2" />
                    Proceed to Payment
                  </button>
                </form>
              </TabsContent>
              <TabsContent value="payment">
                <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
                  <CreditCard className="mr-2" />
                 Choose Payment Method
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-green-600"
                          name="paymentMethod"
                          value="credit_card"
                          checked={paymentMethod === 'credit_card'}
                          onChange={() => setPaymentMethod('credit_card')}
                        />
                        <span className="ml-2">Credit Card</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-green-600"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                        />
                        <span className="ml-2">PayPal</span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === 'credit_card' && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={paymentInfo.expiryDate}
                            onChange={handlePaymentInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
                      >
                        <CreditCard className="mr-2" />
                        Pay with Credit Card
                      </button>
                    </>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="mt-4">
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          if (!isShippingValid()) {
                            alert('Please fill in all shipping information before proceeding.');
                            return Promise.reject('Shipping information incomplete');
                          }
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: total.toFixed(2),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={async (data, actions) => {
                          const details = await actions.order.capture();
                          const token = localStorage.getItem('token');
                          if (!token) {
                            alert('You must be logged in to checkout');
                            return;
                          }
                          try {
                            const formattedCart = cart.map(item => ({
                              product: item.id,
                              quantity: item.quantity
                            }));
                            const response = await fetch('/api/checkout', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                              },
                              body: JSON.stringify({
                                cart: formattedCart,
                                paymentInfo: { method: 'paypal', paypalOrderId: details.id },
                                shippingAddress,
                              }),
                            });
                            if (!response.ok) {
                              throw new Error('Failed to process order');
                            }
                            clearCart();
                            localStorage.setItem('lastOrderId', data.orderID);
                            router.push('/orderConfirmation');
                          } catch (error) {
                            console.error('Error processing PayPal order:', error);
                            alert('Failed to process PayPal payment');
                          }
                        }}
                      />
                    </div>
                  )}
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;