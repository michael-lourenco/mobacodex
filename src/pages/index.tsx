import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession();
  return(
    <>
      <Head>
        <title>Moba Codex API</title>
      </Head>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">MOBA CODEX</h1>
          </div>
        
          {session ? (  
            <>
              <h2 className='block text-center text-2xl'>{session?.user?.name}</h2>
              <div className="mt-8 space-y-6">
              <Link href="/doc-api" >
                  <a className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Go to API</a>
                </Link>
                <div>
                  <button onClick = {() => signOut()} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ):(
            <>
              <div className="mt-8 space-y-6">
                <div>
                  <button onClick = {() => signIn("github")} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                  </button>
                </div>
              </div>
            </>
          )}
          </div>
      </div>
    </>
  )
}