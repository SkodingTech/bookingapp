// import  { User } from "next-auth"

// type Props = {
//     user: User,
//     pagetype: string,
// }

// export default function Card({ user, pagetype }: Props) {

//     //console.log(user)

//     const greeting = user?.name ? (
//         <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
//             Hello {user?.name}!
//         </div>
//     ) : null

//     // const emailDisplay = user?.email ? (
//     //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
//     //         {user?.email}
//     //     </div>
//     // ) : null

 

//     return (
//         <section className="flex flex-col gap-4">
//             {greeting}
//             <p className="text-2xl text-center">{pagetype} Page!</p>
//             <p className="text-2xl text-center">Role: {user?.role}</p>
//         </section>
//     )
// }

import { User } from "next-auth/react"; // Import the User type for reference (if needed)

export default function Card({ user, pagetype }) {
    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user.name}!
        </div>
    ) : null;

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            <p className="text-2xl text-center">{pagetype} Page!</p>
            <p className="text-2xl text-center">Role: {user?.role}</p>
        </section>
    );
}