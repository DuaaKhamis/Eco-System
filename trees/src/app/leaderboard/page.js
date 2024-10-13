'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { getToken } from '../../middlewares/auth';

const CrownIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
);

const Leaderboard = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    useEffect(() => {
        updateDisplayedUsers();
    }, [allUsers, limit, currentPage]);

    const fetchLeaderboard = async () => {
        try {
            setLoading(true);
            setError(null);
            const token = getToken();
            const headers = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await fetch('/api/leaderboard', {
                method: 'GET',
                headers: headers,
            });
            if (!response.ok) {
                throw new Error('Failed to fetch leaderboard');
            }
            const data = await response.json();
            setAllUsers(data.users);
            setTotalPages(Math.ceil(data.users.length / limit));

            if (data.loggedInUserId) {
                const userIndex = data.users.findIndex(user => user._id === data.loggedInUserId);
                if (userIndex !== -1) {
                    setLoggedInUser({
                        ...data.users[userIndex],
                        rank: userIndex + 1
                    });
                }
            } else {
                setLoggedInUser(null);
            }

            setLoading(false);
        } catch (err) {
            console.error('Error fetching leaderboard:', err);
            setError('Failed to fetch leaderboard. Please try again later.');
            setLoading(false);
        }
    };

    const updateDisplayedUsers = () => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        let users = allUsers.slice(startIndex, endIndex);

        if (loggedInUser && !users.some(user => user._id === loggedInUser._id)) {
            users.push(loggedInUser);
        }

        setDisplayedUsers(users);
        setTotalPages(Math.ceil(allUsers.length / limit));
    };

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
    );
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto mt-10 mb-10">
            <h2 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Eco-Champions Leaderboard</h2>
            {loggedInUser && (
                <div className="mb-8 p-6 bg-white rounded-lg text-center text-emerald-700 shadow-lg border border-emerald-200">
                    <p className="text-2xl font-semibold mb-2">Your Eco-Impact</p>
                    <div className="flex justify-center items-center space-x-8">
                        <div>
                            <p className="text-sm uppercase tracking-wide">Current Rank</p>
                            <p className="font-bold text-3xl text-emerald-600">{loggedInUser.rank}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-wide">Points</p>
                            <p className="font-bold text-3xl text-emerald-600">{loggedInUser.points}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <label htmlFor="limit" className="text-emerald-700 mr-2 font-medium">Display:</label>
                    <select
                        id="limit"
                        value={limit}
                        onChange={(e) => handleLimitChange(Number(e.target.value))}
                        className="bg-white border border-emerald-300 text-emerald-900 text-sm rounded-full focus:ring-emerald-500 focus:border-emerald-500 p-2.5"
                    >
                        {[10, 20, 50, 100].map((value) => (
                            <option key={value} value={value}>Top {value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-emerald-200">
                <table className="w-full text-sm text-left text-emerald-700">
                    <thead className="text-xs text-emerald-700 uppercase bg-emerald-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 rounded-tl-lg">Rank</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Points</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-lg">Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((user, index) => {
                            const globalRank = user.rank || (currentPage - 1) * limit + index + 1;
                            const isLoggedInUser = loggedInUser && user._id === loggedInUser._id;
                            return (
                                <tr
                                    key={user._id}
                                    className={`border-b transition duration-300 ease-in-out ${isLoggedInUser ? 'bg-emerald-100 hover:bg-emerald-200' : 'hover:bg-emerald-50'
                                        }`}
                                >
                                    <th scope="row" className="px-6 py-4 font-medium text-emerald-900 whitespace-nowrap flex items-center">
                                        {globalRank <= 3 && (
                                            <CrownIcon color={
                                                globalRank === 1 ? '#FFD700' :
                                                    globalRank === 2 ? '#C0C0C0' :
                                                        '#CD7F32'
                                            } />
                                        )}
                                        <span className={`ml-2 ${globalRank <= 3 ? 'font-bold' : ''}`}>{globalRank}</span>
                                    </th>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4 font-semibold">{user.points}</td>
                                    <td className="px-6 py-4">{user.eventsParticipated.length}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md border border-emerald-200">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative ml-3 inline-flex items-center rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-emerald-700">
                            Showing <span className="font-medium">{(currentPage - 1) * limit + 1}</span> to <span className="font-medium">{Math.min(currentPage * limit, allUsers.length)}</span> of{' '}
                            <span className="font-medium">{allUsers.length}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-emerald-400 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {[...Array(totalPages).keys()].map((page) => (
                                <button
                                    key={page + 1}
                                    onClick={() => handlePageChange(page + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page + 1
                                        ? 'z-10 bg-emerald-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
                                        : 'text-emerald-900 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 focus:z-20 focus:outline-offset-0'
                                        }`}
                                >
                                    {page + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-emerald-400 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Leaderboard;