import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
// import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
        
      )} */}
    <h1 className="text-5xl">Public Home Page</h1>
      </main>
    </div>
    </>
   
  );
}
