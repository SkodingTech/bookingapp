'use client'
import React from 'react'
import withAuth from '../component/withAuth'

function logout() {
  return (
    <div>logout</div>
  )
}

export default withAuth(logout) 