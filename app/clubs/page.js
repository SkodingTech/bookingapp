// 'use client'

// import React from 'react'
// import { useSession } from 'next-auth/react'
// import { redirect } from 'next/navigation'
// import UserCard from '../components/UserCard'
// import ClubManagement from '../components/clubs/ClubManagement'

// // import ClubForm from "../components/superadmin/clubs/ClubForm"

// function ClubsPage() {
//     const { data: session } = useSession({
//         required: true,
//         onUnauthenticated() {
//             redirect('/api/auth/signin?callbackUrl=/clubs')
//         }
//     })

//     const [editingClubId, setEditingClubId] = useState(null);

//     const handleEdit = (id) => {
//       setEditingClubId(id);
//     };

//     // if (session?.user.role !== "admin") {
//     //     return <h1 className="text-5xl">
//     //         <Denied/>
//     //     </h1>
//     // }

//     if (!session?.user) return

//     return (
//         <section className="flex flex-col gap-6">
//             <UserCard user={session?.user} pagetype={"Clubs"} />
//             {/* <ClubForm/> */}
//             <ClubManagement/>
//         </section>
//     )
// }

// export default ClubsPage

// app/clubs/page.js


// 'use client'

// import { useRouter } from 'next/navigation';
// import ClubManagement from '../components/clubs/ClubManagement';

// export default function ClubsPage() {
//   const router = useRouter();

//   const clubs = [
//     { id: 1, name: "Chess Club", location: "Building A", members: 25 },
//     { id: 2, name: "Robotics Club", location: "Building B", members: 15 },
//   ];

//   const handleEdit = (id) => {
//     // Navigate to the edit page for the selected club
//     router.push(`/clubs/edit/${id}`);
//   };

//   return (
//     <div>
//       <ClubManagement clubs={clubs} onEdit={handleEdit} />
//     </div>
//   );
// }


'use client'

import { useState } from 'react';
import ClubManagement from '../components/clubs/ClubManagement';
import EditClub from '../components/clubs/EditClub';

export default function ClubsPage() {
  const [editingClubId, setEditingClubId] = useState(null);

  const [clubs, setClubs] = useState([
    { id: 1, name: 'Coding Club', location: 'New York', members: 20 },
    { id: 2, name: 'Art Club', location: 'Los Angeles', members: 15 },
    { id: 3, name: 'Music Club', location: 'Chicago', members: 10 },
  ]);

  const handleEdit = (id) => {
    setEditingClubId(id);
  };

    // Handle deleting a club
    const handleDeleteClub = (clubId) => {
      setClubs(clubs.filter(club => club.id !== clubId));
    };

  const getClubById = (id) => {
    return clubs.find(club => club.id === id);
  };

  return (
    <div>
      {editingClubId ? (
        // Pass the selected club directly to EditClub
        <EditClub club={getClubById(editingClubId)} />
      ) : (
        <ClubManagement clubs={clubs} onEdit={handleEdit} onDelete={handleDeleteClub} />
      )}
    </div>
  );
}





















