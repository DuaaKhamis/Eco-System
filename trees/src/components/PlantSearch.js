import React, { useState } from 'react';
import { Search } from 'lucide-react';

const PlantSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-300"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-green-500 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default PlantSearch;