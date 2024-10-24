// // rbacMiddleware.js

// function rbacMiddleware(requiredRoles) {
//     return (req, res, next) => {
//       const userRole = req.session?.role || req.query.role; // Role from session or query parameter
      
//       if (!userRole) {
//         return res.status(403).json({ message: 'No role found, access denied' });
//       }
  
//       if (!requiredRoles.includes(userRole)) {
//         return res.status(403).json({ message: 'Insufficient permissions' });
//       }
  
//       next(); // User has required role, proceed to the next middleware
//     };
//   }
  
//   module.exports = rbacMiddleware;

  // /middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const role = req.cookies.get('role')?.value; // Get role from cookies

  const url = req.nextUrl.clone();

  // Protect /admin and /club routes
  if (url.pathname.startsWith('/admin') && role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/club') && role !== 'club_owner') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/club/:path*'], // Apply middleware to /admin and /club routes
};
