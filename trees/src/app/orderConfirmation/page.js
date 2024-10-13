// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const OrderConfirmationPage = () => {
//   const router = useRouter();
//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const orderId = localStorage.getItem('lastOrderId');
//     if (orderId) {
//       fetchOrderDetails(orderId);
//     }
//   }, []);

//   const fetchOrderDetails = async (orderId) => {
//     try {
//       const response = await fetch(`/api/orders/${orderId}`, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setOrderDetails(data);
//       } else {
//         console.error('Failed to fetch order details');
//       }
//     } catch (error) {
//       console.error('Error fetching order details:', error);
//     }
//   };

//   if (!orderDetails) {
//     return <div>Loading order details...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
//       <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
//         <p className="font-bold">Thank you for your order!</p>
//         <p>Your order has been successfully placed and is being processed.</p>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Order Details</h2>
//         <p>Order ID: {orderDetails._id}</p>
//         <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
//         <p>Status: {orderDetails.status}</p>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Shipping Address</h2>
//         <p>{orderDetails.shippingAddress.street}</p>
//         <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}</p>
//         <p>{orderDetails.shippingAddress.country}</p>
//       </div>
//       <button 
//         onClick={() => router.push('/orders')} 
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         View All Orders
//       </button>
//     </div>
//   );
// };

// export default OrderConfirmationPage;
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const OrderConfirmationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const orderId = searchParams.get('orderId') || localStorage.getItem('lastOrderId');
    if (orderId) {
      fetchOrderDetails(orderId);
    } else {
      setError('No order ID found. Please try again or contact support.');
    }
  }, [searchParams]);

  const fetchOrderDetails = async (orderId) => {

    if (!orderId) {
      console.error('Order ID is undefined');
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to view order details.');
        return;
      }

      const response = await fetch(`/api/orders/${orderId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to fetch order details');
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };


  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
        <button 
          onClick={() => router.push('/')} 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Return to Home
        </button>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
        <div>Loading order details...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
        <p className="font-bold">Thank you for your order!</p>
        <p>Your order has been successfully placed and is being processed.</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Order Details</h2>
        <p>Order ID: {orderDetails._id}</p>
        <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
        <p>Status: {orderDetails.status}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Shipping Address</h2>
        <p>{orderDetails.shippingAddress.street}</p>
        <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}</p>
        <p>{orderDetails.shippingAddress.country}</p>
      </div>
      <button 
        onClick={() => router.push('/orders')} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View All Orders
      </button>
    </div>
  );
};

export default OrderConfirmationPage;