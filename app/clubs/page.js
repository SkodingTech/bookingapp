'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

function ClubsPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/clubs')
        }
    })

    if (session?.user.role !== "admin") {
        return <h1 className="text-5xl">Access Denied</h1>
    }

    if (!session?.user) return

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Clubs"} />
        </section>
    )
}

export default ClubsPage