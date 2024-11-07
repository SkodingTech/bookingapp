import CredentialsProvider from 'next-auth/providers/credentials'
const baseURL = 'https://430ayesddh.execute-api.ap-south-1.amazonaws.com/dev'; 


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
      // async authorize(credentials) {
      //   // This is where you need to retrieve user data 
      //   // to verify with credentials

      //   const users = [
      //     { id: "1", name: "admin", password: "nextauth", role: "admin" },
      //     { id: "2", name: "superadmin", password: "user", role: "superadmin" },
      //     // Add more users here...
      //   ];

      //   for (const user of users) {
      //     if (credentials.username === user.name && credentials.password === user.password) {
      //       return user;
      //     }
      //     {
      //       return user;
      //     }
      //   }

      //   return null;
      // },

      async authorize(credentials) {
        const tokenEndpoint = `${baseURL}/auth/token`;
      
        const data = {
          grant_type: 'password',
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          username: "testuser",
          password: "test1234",
        };
      
        try {
          const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            console.error('Authentication failed:', response.statusText);
            return null;
          }
      
          const tokenData = await response.json();
          return {
            id: tokenData.user_id, // Assuming your response includes user_id
            name: tokenData.username,
            role: tokenData.role, // Adjust if role data is included
          };
        } catch (error) {
          console.error('Error authorizing:', error);
          return null;
        }
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
  pages: {
    signIn : "/login"
  }
};




// import CredentialsProvider from 'next-auth/providers/credentials'


// export const options = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username:",
//           type: "text",
//           placeholder: "your-cool-username",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "your-awesome-password",
//         },
//       },
//       async authorize(credentials) {
//         // Sample user data for verification
//         const users = [
//           { id: "1", name: "admin", password: "nextauth", role: "admin" },
//           { id: "2", name: "superadmin", password: "user", role: "superadmin" },
//           // Add more users here...
//         ];
      
//         // Verify the provided credentials against the users array
//         for (const user of users) {
//           if (credentials.username === user.name && credentials.password === user.password) {
//             return user;
//           }
//         }
      
//         // If no matching user is found, return null
//         return null;
//       }
      
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.role = user.role;
//       return token;
//     },
//     async session({ session, token }) {
//       if (session?.user) session.user.role = token.role;
//       return session;
//     },
//   },
//   pages: {
//     signIn : "/login"
//   }
// };






// import CredentialsProvider from 'next-auth/providers/credentials';
// import { signIn } from 'next-auth/react';

// export const options = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username:",
//           type: "text",
//           placeholder: "your-cool-username",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "your-awesome-password",
//         },
//       },
//       async authorize(credentials) {
//         // This is where you need to retrieve user data 
//         // to verify with credentials

//         const users = [
//           { id: "1", name: "admin", password: "nextauth", role: "admin" },
//           { id: "2", name: "superadmin", password: "user", role: "superadmin" },
//           // Add more users here...
//         ];

//         for (const user of users) {
//           if (
//             credentials?.username.toLowerCase() === user.name.toLowerCase() &&
//             credentials?.password.toLowerCase() === user.password.toLowerCase()
//           ) {
//             return user;
//           }
//         }

//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.role = user.role;
//       return token;
//     },
//     async session({ session, token }) {
//       if (session?.user) session.user.role = token.role;
//       return session;
//     },
//   },
//   pages: {
//     signIn : "/login/page"
//   }
// };
