// // pages/api/auth/[...nextauth].js
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// export default NextAuth({
//   secret: process.env.NEXTAUTH_SECRET, // This must be defined
//   providers: [
//     // CredentialsProvider({
//     //   name: 'Credentials',
//     //   credentials: {
//     //     username: { label: 'Username', type: 'text' },
//     //     password: { label: 'Password', type: 'password' },
//     //   },
//     //   async authorize(credentials) {
//     //     // Authenticate user here and return user object with role
//     //     // const user = { id: 1, role: 'admin', name: 'John Doe',  };
//     //     const user = { id: "42", name: "Dave", password: "nextauth", role: "admin" }

//     //     if (user) {
//     //       return user; // Return user object if authenticated
//     //     } else {
//     //       return null;
//     //     }
//     //   },
//     // }), 
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//           username: {
//               label: "Username:",
//               type: "text",
//               placeholder: "your-cool-username"
//           },
//           password: {
//               label: "Password:",
//               type: "password",
//               placeholder: "your-awesome-password"
//           }
//       },
//       async authorize(credentials) {
//           // This is where you need to retrieve user data 
//           // to verify with credentials
//           // Docs: https://next-auth.js.org/configuration/providers/credentials
//           const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

//           if (credentials?.username === user.name && credentials?.password === user.password) {
//               return user
//           } else {
//               return null
//           }
//       }
//   })
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       // Include user role in session
//       session.user.role = token.role;
//       return session;
//     },
//     async jwt({ token, user }) {
//       // Save user role in JWT token
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
// });


// import type { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export const options: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//     providers: [
      
//     CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Username:",
//                     type: "text",
//                     placeholder: "your-cool-username"
//                 },
//                 password: {
//                     label: "Password:",
//                     type: "password",
//                     placeholder: "your-awesome-password"
//                 }
//             },
//             async authorize(credentials) {
//                 // This is where you need to retrieve user data 
//                 // to verify with credentials
//                 // Docs: https://next-auth.js.org/configuration/providers/credentials

//                 // const user = { id: "45", name: "kavya", password: "nextauth", role: "superadmin" }

//                 // if (credentials?.username === user.name && credentials?.password === user.password) {
//                 //     return user
//                 // } else {
//                 //     return null
//                 // }

//           // This is where you need to retrieve user data 
//           // to verify with credentials
          
//           const users = [
//             { id: "45", name: "kavya", password: "nextauth", role: "superadmin" },
//             { id: "48", name: "kavyakc", password: "kc", role: "admin" },
//             // Add more users here...
//           ];

//           for (const user of users) {
//             if (
//               credentials?.username.toLowerCase() === user.name.toLowerCase() &&
//               credentials?.password.toLowerCase() === user.password.toLowerCase()
//             ) {
//               return user;
//             }
//           }

//           return null;
//         }

//         })
//     ],
//     callbacks: {
//         // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
//         async jwt({ token, user }) {
//             if (user) token.role = user.role
//             return token
//         },
//         // If you want to use the role in client components
//         async session({ session, token }) {
//             if (session?.user) session.user.role = token.role
//             return session
//         },
//     }
// }

import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data 
        // to verify with credentials

        const users = [
          { id: "45", name: "kavya", password: "nextauth", role: "superadmin" },
          { id: "48", name: "kavyakc", password: "kc", role: "admin" },
          // Add more users here...
        ];

        for (const user of users) {
          if (
            credentials?.username.toLowerCase() === user.name.toLowerCase() &&
            credentials?.password.toLowerCase() === user.password.toLowerCase()
          ) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
