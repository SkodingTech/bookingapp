// app/components/clubs/ClubManagement.js

import Link from 'next/link';

export default function ClubManagement({ clubs = [], onEdit, onDelete }) {
  // Handle deleting a club
  const handleDelete = (clubId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this club?');
    if (confirmDelete) {
      onDelete(clubId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">Club Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Clubs List</h2>
          <Link href="/clubs/add-club">
          <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            + Add New Club
          </button>
          </Link>
          
        </div>

        {/* Table for Clubs */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-2">#</th>
                <th className="p-2">Club Name</th>
                <th className="p-2">Location</th>
                <th className="p-2">Members</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clubs.map((club, index) => (
                <tr key={club.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{club.name}</td>
                  <td className="p-2">{club.location}</td>
                  <td className="p-2">{club.members}</td>
                  <td className="p-2">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                     {/* <Link href= "/clubs/edit"> */}
                     <button
                        onClick={() => onEdit(club.id)}
                        className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-400"
                      >
                        Edit
                      </button>
                     
                     {/* </Link> */}
                      <button
                        onClick={() => handleDelete(club.id)} // Trigger delete function
                        className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// import { useRouter } from 'next/navigation';

// export default function ClubManagement({ clubs = [], onEdit }) {
//   const router = useRouter();

//   const handleEditClick = (clubId) => {
//     // Navigate to the dynamic club edit page
//     router.push(`/clubs/edit/${clubId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-semibold mb-6">Club Management</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//           <h2 className="text-xl font-medium">Clubs List</h2>
//           <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
//             + Add New Club
//           </button>
//         </div>

//         {/* Table for Clubs */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b bg-gray-50">
//                 <th className="p-2">#</th>
//                 <th className="p-2">Club Name</th>
//                 <th className="p-2">Location</th>
//                 <th className="p-2">Members</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clubs.map((club, index) => (
//                 <tr key={club.id} className="border-b hover:bg-gray-50">
//                   <td className="p-2">{index + 1}</td>
//                   <td className="p-2">{club.name}</td>
//                   <td className="p-2">{club.location}</td>
//                   <td className="p-2">{club.members}</td>
//                   <td className="p-2">
//                     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
//                       <button
//                         onClick={() => handleEditClick(club.id)} // Use this function to navigate
//                         className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-400"
//                       >
//                         Edit
//                       </button>
//                       <button className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-400">
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }





// export default function ClubManagement({ clubs = [], onEdit }) {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-semibold mb-6">Club Management</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//           <h2 className="text-xl font-medium">Clubs List</h2>
//           <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
//             + Add New Club
//           </button>
//         </div>

//         {/* Table for Clubs */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b bg-gray-50">
//                 <th className="p-2">#</th>
//                 <th className="p-2">Club Name</th>
//                 <th className="p-2">Location</th>
//                 <th className="p-2">Members</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clubs.map((club, index) => (
//                 <tr key={club.id} className="border-b hover:bg-gray-50">
//                   <td className="p-2">{index + 1}</td>
//                   <td className="p-2">{club.name}</td>
//                   <td className="p-2">{club.location}</td>
//                   <td className="p-2">{club.members}</td>
//                   <td className="p-2">
//                     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
//                       <button
//                         onClick={() => onEdit(club.id)}
//                         className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-400"
//                       >
//                         Edit
//                       </button>
//                       <button className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-400">
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
