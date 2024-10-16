import React, { useState } from 'react';

const CouponInput = ({ onApplyCoupon, onRemoveCoupon, appliedCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');

  const handleCouponAction = async (action) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('/api/couponsValidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ code: couponCode, action }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${action} coupon`);
      }

      const data = await response.json();

      if (action === 'apply') {
        onApplyCoupon(data.coupon);
      } else {
        onRemoveCoupon();
      }

      setError('');
    } catch (error) {
      console.error(`Coupon ${action} error:`, error);
      setError(error.message);
      if (action === 'remove') {
        onRemoveCoupon();
      }
    }
  };

  const handleApplyCoupon = () => handleCouponAction('apply');
  const handleRemoveCoupon = () => handleCouponAction('remove');

  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="flex">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        {!appliedCoupon ? (
          <button
            onClick={handleApplyCoupon}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Apply Coupon
          </button>
        ) : (
          <button
            onClick={handleRemoveCoupon}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Remove Coupon
          </button>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {appliedCoupon && (
        <p className="text-green-500">
          Coupon applied: {appliedCoupon.code} ({appliedCoupon.discount}% off)
        </p>
      )}
    </div>
  );
};

export default CouponInput;