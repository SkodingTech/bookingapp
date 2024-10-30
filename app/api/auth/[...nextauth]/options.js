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
          { id: "1", name: "admin", password: "nextauth", role: "admin" },
          { id: "2", name: "user", password: "user", role: "user" },
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
