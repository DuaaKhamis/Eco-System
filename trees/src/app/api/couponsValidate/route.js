import dbConnect from '../../../lib/mongodb';
import Coupon from '../../../models/coupons';
import { authMiddleware } from '../../../middlewares/auth';
import { NextResponse } from 'next/server';

export const POST = authMiddleware(async (req) => {
  await dbConnect();

  try {
    const { code, action } = await req.json();
    const userId = req.userId;
    console.log('Received coupon request:', { code, userId, action });

    const coupon = await Coupon.findOne({ code, issuedTo: userId });
    console.log('Coupon found:', coupon);

    if (!coupon) {
      console.log('Coupon not found or does not match criteria:', { code, userId });
      return NextResponse.json({ message: 'Invalid coupon' }, { status: 400 });
    }

    if (action === 'apply') {
      if (coupon.isUsed) {
        console.log('Coupon has already been used:', { code });
        return NextResponse.json({ message: 'Coupon has already been used' }, { status: 400 });
      }

      if (new Date(coupon.validUntil) < new Date()) {
        console.log('Coupon has expired:', { validUntil: coupon.validUntil });
        return NextResponse.json({ message: 'Coupon has expired' }, { status: 400 });
      }

      // Mark the coupon as used
      // coupon.isUsed = true;
      await coupon.save();

      console.log('Valid coupon applied:', { code: coupon.code, discount: coupon.discount });
      return NextResponse.json({
        coupon: { code: coupon.code, discount: coupon.discount }
      }, { status: 200 });
    } else if (action === 'remove') {
      // Mark the coupon as unused
      // coupon.isUsed = false;
      await coupon.save();

      console.log('Coupon removed:', { code: coupon.code });
      return NextResponse.json({ message: 'Coupon removed successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing coupon:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
});