// app/login/page.js
'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    console.log(result);
    if (result.error) {
      console.error('Authentication failed:', result.error);
      setError('Login failed. Please check your credentials.');
    } else {
      console.log('Login successful');
      router.push("/"); 
      // Optionally redirect to a protected page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-semibold text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Sign In
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
        {/* <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account? <a href="#" className="font-semibold text-indigo-600 hover:underline">Sign up</a>
          </p>
        </div> */}
      </div>
    </div>
  );
}




// 'use client'
// // app/login/page.js

// import React, { useState } from 'react';
// import { getAuthToken } from '../auth/django_auth'

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const [token, setToken] = useState(null);
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const tokenData = await getAuthToken(username, password);
//       console.log("Token obtained:", tokenData);
//       setToken(tokenData); 
//     } catch (err) {
//       console.error("Authentication failed:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-indigo-600">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="flex flex-col">
//             <label htmlFor="username" className="text-sm font-semibold text-gray-600">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don&apos;t have an account? <a href="#" className="font-semibold text-indigo-600 hover:underline">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
