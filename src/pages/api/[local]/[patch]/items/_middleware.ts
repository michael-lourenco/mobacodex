import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest ) {
  const session = await getToken({
    req,
    secret: process.env.SECRET,
  })

  if(!session) {
    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic realm='Secure Area'",
      },
    })
  }

  return NextResponse.next()
}
