import { sessionState } from "./utils/session";
import {sessionRole } from './utils/role'
import { NextResponse } from "next/server";

// Middleware function to handle session-based authentication and authorization
export default function middleware(req: any) {
  // Manual session state check (no token usage)
  if (sessionState) {
    const pathname = req.nextUrl.pathname;

    // Define user permissions (assuming a simple role system here)
    const userRole = sessionRole.role; // Assuming `sessionState` contains role info

    // Find a matching path with dynamic path handling
    const path = paths.find((p) => {
      if (p.path.includes("[id]")) {
        // Replace '[id]' with a regex pattern and test the pathname
        const regex = new RegExp(`^${p.path.replace("[id]", "\\w+")}$`);
        return regex.test(pathname);
      }
      return p.path === pathname;
    });

    if (!path) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Check if the user has permission to access the path
    const hasPermission = path.roles.includes(userRole);

    if (!hasPermission) {
      return NextResponse.redirect(new URL("/access-denied", req.url));
    }

    return NextResponse.next();
  } else {
    // Redirect to home if sessionState is not active
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth/|access-denied).*)",
  ],
};

// Define paths and permissions (admin-only for clubs)
const paths = [
  {
    path: "/",
    roles: ["user", "admin"], // Accessible by both users and admins
  },
  {
    path: "/dashboard",
    roles: ["user", "admin"], // Accessible by both
  },
  {
    path: "/events",
    roles: ["user", "admin"], // Accessible by both
  },
  {
    path: "/settings",
    roles: ["user", "admin"], // Accessible by both
  },
  {
    path: "/users",
    roles: ["user", "admin"], // Accessible by both
  },
  {
    path: "/notifications",
    roles: ["user", "admin"], // Accessible by both
  },
  {
    path: "/clubs",
    roles: ["admin"], // Admin-only access
  },
];


















// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   console.log("middleware")
//   // return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/dashboard',
// }







// import { sessionState } from "./utils/session";
// import { NextRequest,NextResponse } from "next/server";

// const protectedRoutes = [
//             '/dashboard'
       
//             ]

//           //   '  /events',
//           //   '/reservations', 
//           // '  /notification',
//           //   '/users',
//           //  ' /setting',
//           //   '/logout',

// export default function middleware(req: any){
//     if(!sessionState && protectedRoutes.includes(req.nextUrl.pathname)){
//         const absoluteURL = new URL("/" , req.nextUrl.origin);
//         return NextResponse.redirect(absoluteURL.toString());
//     }

// }