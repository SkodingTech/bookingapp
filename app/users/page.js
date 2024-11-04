'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import UserCard from '../components/UserCard'
import UserTable from "../components/user_management/UserTable"
import { UserProvider } from '../context/UserContext';

function Users() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/users')
    }
})

if (!session?.user) return

return (

    
    <UserProvider>        
    <section className="flex flex-col gap-6">
        {/* <UserCard user={session?.user} pagetype={"Users"} /> */}
        <UserTable/>
        
    </section>

</UserProvider>
    

)
}

export default Users