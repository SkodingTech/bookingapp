"use client"

import React from 'react'
import Link from 'next/link'



function Navbar() {
  return (
    <ul>
        <Link href="/"> Home </Link>
        <Link href="/admin"> Admin </Link>
        <Link href="/dashboard"> <li>AdminDashboard</li> </Link>
        <Link href="/clubs"> <li>Clubs</li> </Link>
        <Link href="/events"> <li>Events</li>  </Link>
        <Link href="/reservation"> <li>Reservation</li>  </Link>
        <Link href="/notification"> <li>Notification</li>  </Link>
        <Link href="/users"><li>Users</li>  </Link>
        <Link href="/setting"> <li>Setting</li>  </Link>
        <Link href="/logout"> <li>LogOut</li> </Link>

    </ul>
  )
}

export default Navbar