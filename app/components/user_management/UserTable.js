// import { useState } from 'react';
// import Link from 'next/link';


// import React from 'react'

// function UserTable() {
//   const initialUsers = [
//     {
//        id: 1,
//        name: 'Alice', 
//        email: "alice@gmail.com",
//        date: "23/04/18",
//        role: 'viewer'
//        },
//     { 
//       id: 2,
//        name: 'Bob', 
//        role: 'editor' ,
//        email: "bob@gmail.com",
//        date: "23/04/18",
//       },
//     { 
//       id: 3, 
//       name: 'Charlie', 
//       role: 'guest',
//       email: "charlie@gmail.com",
//       date: "23/04/18", },
//        {
//           id:4,
//           name: "John Michael",
//           email: "john@gmail.com",
//           date: "23/04/18",
//           role: 'viewer'
//         },
//         {
//          id:5,
//           name: "Alexa Liras",
//           email: "alexa@gmail.com",
//           date: "23/04/18",
//           role: 'viewer'
//         },
//         {
//           id:6,
//           name: "Laurent Perrier",
//           email: "laurent@gmail.com",
//           date: "19/09/17",
//           role: 'viewer'
//         },
//         {
//           id:7,
//           name: "Michael Levi",
//           email: "michael@gamil.com",
//           date: "24/12/08",
//           role: 'viewer'
//         },
//         {
//           id:8,
//           name: "Richard Gran",
//           email: "richard@gmail.com",
//           date: "04/10/21",
//           role: 'viewer'
//         },
    
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [newRole, setNewRole] = useState('');

  

//   const startEditing = (userId, currentRole) => {
//     setEditingUserId(userId);
//     setNewRole(currentRole);
//   };

//   const saveRole = () => {
//     setUsers(users.map(user =>
//       user.id === editingUserId ? { ...user, role: newRole } : user
//     ));
//     setEditingUserId(null);
//     setNewRole('');
//     alert('Role updated successfully!');
//   };

//   const cancelEdit = () => {
//     setEditingUserId(null);
//     setNewRole('');
//   };

//   const deleteConfirm = (userId) => {
//     if (window.confirm(`Are you sure you want to delete ${users.find(u => u.id === userId).name}?`)) {
//       setUsers(users.filter(user => user.id !== userId));
//       alert(`${users.find(u => u.id === userId).name} has been deleted.`);
//     }
//   };

//   const handleUserAdd = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   return (
//     <div>
//       <h1>User Management</h1>
//       <Link href="/add-user">
//         <button>Add User</button>
//       </Link>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Date</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.date}</td>
//               <td>
//                 {editingUserId === user.id ? (
//                   <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
//                     <option value="admin">Admin</option>
//                     <option value="editor">Editor</option>
//                     <option value="viewer">Viewer</option>
//                     <option value="guest">Guest</option>
//                   </select>
//                 ) : (
//                   user.role
//                 )}
//               </td>
//               <td>
//                 {editingUserId === user.id ? (
//                   <>
//                     <button onClick={saveRole}>Save</button>
//                     <button onClick={cancelEdit}>Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                   <button onClick={() => startEditing(user.id, user.role)}>Edit</button>
//                   <button onClick={() => deleteConfirm(user.id)}>Delete</button>
//                 </>
                  
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default UserTable

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/UserContext'


import React from 'react'

function UserTable() {
  const { users, setUsers } = useUser();
  const [editingUserId, setEditingUserId] = useState(null);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    console.log('Users changed:', users);
    // Any side effects here
  }, [users]);


  const startEditing = (userId, currentRole) => {
    setEditingUserId(userId);
    setNewRole(currentRole);
  };

  const saveRole = () => {
    setUsers(users.map(user =>
      user.id === editingUserId ? { ...user, role: newRole } : user
    ));
    setEditingUserId(null);
    setNewRole('');
    alert('Role updated successfully!');
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setNewRole('');
  };

  const deleteConfirm = (userId) => {
    if (window.confirm(`Are you sure you want to delete ${users.find(u => u.id === userId).name}?`)) {
      setUsers(users.filter(user => user.id !== userId));
      alert(`${users.find(u => u.id === userId).name} has been deleted.`);
    }
  };


  return (

  <div className="p-20 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">User Management</h1>
      <Link href="/users/add-user" className="flex justify-end mb-4">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Add User
        </button>
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Email</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Date</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Role</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-300">{user.id}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.name}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.email}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.date}</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {editingUserId === user.id ? (
                    <select
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="User">User</option>
                      <option value="guest">Guest</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {editingUserId === user.id ? (
                    <>
                      <button
                        className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                        onClick={saveRole}
                      >
                        Save
                      </button>
                      <button
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                        onClick={() => startEditing(user.id, user.role)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => deleteConfirm(user.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable