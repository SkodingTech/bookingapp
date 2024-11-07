'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddNewClubPage() {
  const [clubData, setClubData] = useState({
    name: '',
    location: '',
    members: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!clubData.name || !clubData.location || !clubData.members) {
      setError('All fields are required!');
      return;
    }
    // If no errors, reset error and submit data (e.g., add to state or API)
    setError('');
    // Simulate submitting the form (e.g., add to the clubs list or API)
    console.log('Club added:', clubData);
    alert('Club added successfully!');
    router.push('/clubs');  // Navigate to clubs list page after successful submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add New Club</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Club Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={clubData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter club name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={clubData.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="members" className="block text-sm font-medium text-gray-700">
              Members
            </label>
            <input
              type="number"
              id="members"
              name="members"
              value={clubData.members}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of members"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Add Club
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
