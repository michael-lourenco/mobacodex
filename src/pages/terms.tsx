import Head from 'next/head'

export default function Terms() {
  return(
    <>
      <Head>
        <title>MOBA CODEX API - Terms of Service</title>
      </Head>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">MOBA CODEX API - Terms of Service </h1>
        <div className='text-justify'>
          <h2 className='block text-2xl'>Last modified: May 31, 2022</h2>
          <p>Thank you for using MOBA CODEX's API. By accessing or using our API, you are agreeing to the terms below. If there is a conflict between these terms and additional terms applicable to a given API, the additional terms will control for that conflict. Collectively, we refer to the terms below, any additional terms, terms within the accompanying API documentation, and any applicable policies and guidelines as the "Terms." You agree to comply with the Terms and that the Terms control your relationship with us. So please read all the Terms carefully. If you use the API as an interface to, or in conjunction with other MOBA CODEX products or services, then the terms for those other products or services also apply.</p>
          <p>Under the Terms, "MOBA CODEX" means Michael Lourenço, with offices at 96 José Soares Hungria, Street, Jd Mesquita, São Paulo 18213-601, Brasil, unless set forth otherwise in additional terms applicable for a given API. We may refer to "MOBA CODEX" as "we", "our", or "us" in the Terms.</p>
          <p>MOBA CODEX API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
        </div>
        </div>
      </div>
    </>
  )
}
