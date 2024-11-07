// app/components/clubs/EditClub.js


// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function EditClub() {
//   const router = useRouter();
//   const { clubId } = router.query;  // Get the dynamic clubId from the URL
//   const [club, setClub] = useState(null);

//   useEffect(() => {
//     if (clubId) {
//       // Replace this with actual data fetching logic if needed
//       const clubs = [
//         { id: 1, name: "Chess Club", location: "Building A", members: 25 },
//         { id: 2, name: "Robotics Club", location: "Building B", members: 15 },
//       ];

//       const foundClub = clubs.find((club) => club.id === parseInt(clubId));
//       setClub(foundClub);
//     }
//   }, [clubId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Saving club:", club);
//     router.push('/clubs');  // After saving, redirect to clubs list page
//   };

//   if (!club) return <p>Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-semibold mb-6">Edit Club</h1>
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//         <div className="mb-4">
//           <label className="block text-gray-700">Club Name</label>
//           <input
//             type="text"
//             value={club.name}
//             onChange={(e) => setClub({ ...club, name: e.target.value })}
//             className="w-full p-2 mt-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Location</label>
//           <input
//             type="text"
//             value={club.location}
//             onChange={(e) => setClub({ ...club, location: e.target.value })}
//             className="w-full p-2 mt-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Number of Members</label>
//           <input
//             type="number"
//             value={club.members}
//             onChange={(e) => setClub({ ...club, members: parseInt(e.target.value) })}
//             className="w-full p-2 mt-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }



import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EditClub({ club }) {
  const router = useRouter();
  const [editedClub, setEditedClub] = useState(club);

  useEffect(() => {
    if (club) {
      setEditedClub(club); // Initialize with the provided club data
    }
  }, [club]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Saving club:", editedClub);  // Normally you would update this on the server or in state
    router.push('/');  // Redirect back to the clubs list
  };

  if (!editedClub) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">Edit Club</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Club Name</label>
          <input
            type="text"
            value={editedClub.name}
            onChange={(e) => setEditedClub({ ...editedClub, name: e.target.value })}
            className="w-full p-2 mt-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={editedClub.location}
            onChange={(e) => setEditedClub({ ...editedClub, location: e.target.value })}
            className="w-full p-2 mt-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Members</label>
          <input
            type="number"
            value={editedClub.members}
            onChange={(e) => setEditedClub({ ...editedClub, members: parseInt(e.target.value) })}
            className="w-full p-2 mt-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
