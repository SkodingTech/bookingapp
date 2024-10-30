// components/ClubForm.js
import React from 'react';

export default function ClubForm() {

  return (
    <form className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="club-name" className="block mb-2">Club Name:</label>
          <input 
            id="club-name" 
            type="text" 
            placeholder="Enter club name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2">Location:</label>
          <input 
            id="location" 
            type="text" 
            placeholder="Enter location"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
        Add Club
      </button>
    </form>
  );
}
