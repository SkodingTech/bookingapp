"use client"
// import withAuth from '../component/withAuth'

import { useRouter } from 'next/navigation';
import { sessionState } from "../utils/session";
import {sessionRole } from '../utils/role'

import PermissionCheck from "../permission-check";
import React, { useEffect } from "react";

function Dashboard() {

  const router = useRouter();

  useEffect(() => {
    // Check if the user is an admin and has access to "products.create"
    if (sessionRole.role === "admin") {
      // Automatically navigate to "/products/create" if the user is an admin
      router.push("/products/create");
    }
  }, [router]);
  
  return (

    <div>
       <PermissionCheck permission="products.create">
          
            clubs
          
        </PermissionCheck>
    </div>
  )
}

export default Dashboard


