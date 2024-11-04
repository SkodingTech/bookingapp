
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

export default function AddUser() {

  const { addUser } = useUser();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('user');
  const router = useRouter();

  const handleAddUser = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!userName || !userEmail) {
      alert('Name and Email are required');
      return;
    }

    const newUser = {
      id: Date.now(), // Unique ID for simplicity
      name: userName,
      email: userEmail,
      date: new Date().toLocaleDateString(), // Current date
      role: userRole,
    };

    // Call the addUser function from context
    addUser(newUser);

    // Redirect to the user table page after adding a user
    router.push('/users');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New User</h1>
      <form onSubmit={handleAddUser} className="space-y-4">
        <input
          type="text"
          placeholder="Enter user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          placeholder="Enter user email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        
        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="viewer">Viewer</option>
          <option value="guest">Guest</option>
        </select>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
