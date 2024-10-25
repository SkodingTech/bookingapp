// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Authenticate user here and return user object with role
        const user = { id: 1, role: 'admin', name: 'John Doe' };

        if (user) {
          return user; // Return user object if authenticated
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Include user role in session
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      // Save user role in JWT token
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
});
