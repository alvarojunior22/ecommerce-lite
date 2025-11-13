import { authenticate } from "@/utils/auth";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

function isAuthError (user: unknown): user is {error: string} {
  return typeof user === 'object' && user !== null && 'error' in user
} 

export async function POST(req:Request) {
  try {
    const { username, password } = await req.json()

    const user = await authenticate(username, password)

    if ((isAuthError)(user)) {
      return NextResponse.json({
        error: user.error
      }, {status: 401})
    }

    const cookieStore = await cookies()
    cookieStore.set('isLoggedIn', 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60
    })

    cookieStore.set("userRole", user.role, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
    });

    return NextResponse.json({
      message: 'successful login',
      user: {id:user.id, username: user.fullName, rol: user.role}
    })
  } catch (error) {
    console.error('server error', error)
    return NextResponse.json({
      message:'server error'
    }, {status:500})
  }
}