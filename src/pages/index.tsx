import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return(
    <>
      <Head>
        <title>Moba Codex API</title>
      </Head>

      <h1>MOBA CODEX</h1>
      <p>
        {session ? (
          <>
            <h1>{session?.user?.name}</h1>
            <button onClick = {() => signOut()}>
              Sign out
            </button>
          </>
        ):(
        <button onClick = {() => signIn("github")}>
          Sign in
        </button>
        )}

      </p>
    </>
  )
}