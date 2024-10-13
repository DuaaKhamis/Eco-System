import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Users from '../../../models/users';
import jwt from 'jsonwebtoken';

export async function GET(req) {
    try {
        await connectDB();
        const users = await Users.find({})
            .select('name points eventsParticipated')
            .sort({ points: -1 });

        let loggedInUserId = null;
        const authHeader = req.headers.get('Authorization');

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.substring(7);
            try {
                const sec = process.env.JWT_SECRET;
                const decoded = jwt.verify(token, sec);
                loggedInUserId = decoded.userId;
            } catch (error) {
                console.error('Token verification failed:', error);
            }
        }

        return NextResponse.json({ users, loggedInUserId });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return NextResponse.json({ message: 'Error fetching leaderboard' }, { status: 500 });
    }
}