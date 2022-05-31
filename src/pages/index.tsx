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
      <div className='bg-gray'>
        <h1>MOBA CODEX</h1>
        <div>
          {session ? (
            <>
              <h1>{session?.user?.name}</h1>
              <button onClick = {() => signOut()}>
                Sign out
              </button>
              <Link href="/doc-api">
                <a>Go to API</a>
              </Link>
            </>
          ):(
            <button 
            onClick = {() => signIn("github")}
            className = {`
            sm:flex
            items-center
            cursor-pointer
            bg-gradient-to-r
            from-yellow-300
            to-yellow-600
            w-14
            lg:w-24
            h-8
            p-1
            rounded-full
          `}
            >
              Sign in
            </button>
          )}

        </div>
      </div>
    </>
  )
}