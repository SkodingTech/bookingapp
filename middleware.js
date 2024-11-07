
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    console.log("Requested Path:", request.nextUrl.pathname);
    console.log("User Token:", request.nextauth.token);

    const role = request.nextauth.token?.role;

    // if (request.nextUrl.pathname.startsWith("/clubs") && role !== "superadmin") {
    //   return NextResponse.rewrite(new URL("/denied", request.url));
    // }

  
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Ensure the user is authenticated
    },
  }
);

export const config = { matcher: ["/clubs/:path*", "/"] };





// // Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage

// // export { default } from "next-auth/middleware"

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(

//   //`withAuth` augments your `Request` with the user's token.
//   function middleware(request) {
//     console.log(request.nextUrl.pathname);
//     console.log(request.nextauth.token);

//     if (
//       request.nextUrl.pathname.startsWith("/clubs") &&
//       request.nextauth.token?.role !== "superadmin"
//     ) {
//       return NextResponse.rewrite(new URL("/denied", request.url));
//     }
//     if (
//       request.nextUrl.pathname.startsWith("/") &&
//       request.nextauth.token?.role !== "superadmin" && request.nextauth.token?.role !== "admin"
//     ) {
//       return NextResponse.rewrite(new URL("/login", request.url));
//     }


//   },
//   {
//     secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }

// );

// // Applies next-auth only to matching routes - can be regex
// // Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// // export const config = { matcher: [ "/clubs", "/"] };

// export const config = { matcher: ["/clubs/:path*"] };