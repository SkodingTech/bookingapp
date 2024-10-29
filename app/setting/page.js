'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

function Setting() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/users')
    }
})

   // if (session?.user.role !== "admin"
//     && session?.user.role !== "manager") {
//     return <h1 className="text-5xl">Access Denied</h1>
// }



if (!session?.user) return

return (
    <section className="flex flex-col gap-6">
        <UserCard user={session?.user} pagetype={" Setting "} />
    </section>
)
}

export default Setting 