// /app/api/set-role/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');

  if (!role) {
    return NextResponse.json({ message: 'Role not provided' }, { status: 400 });
  }

  const response = NextResponse.json({ message: `Role set to ${role}` });
  response.cookies.set('role', role, { path: '/' }); // Set role in cookies

  return response;
}
