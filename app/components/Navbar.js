import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <Link href="/clubs">
          <li>Clubs</li>{" "}
        </Link>
        <Link href="/events">         
          <li>Events</li>{" "}
        </Link>
        <Link href="/reservation">        
          <li>Reservation</li>{" "}
        </Link>
        <Link href="/notification">         
          <li>Notification</li>{" "}
        </Link>
        <Link href="/users">
          <li>Users</li>{" "}
        </Link>
        <Link href="/setting">         
          <li>Setting</li>{" "}
        </Link>
        <li>
          <Link href="/api/auth/signout">Log Out</Link>
        </li>

        {/* <li><Link href="/api/auth/signin">Sign In</Link></li> */}
        {/* <li><Link href="/server">Server</Link></li> */}
        {/* <li><Link href="/client">Client</Link></li> */}
        {/* <li><Link href="/extra">Extra</Link></li> */}
      </ul>
    </nav>
  );
}
