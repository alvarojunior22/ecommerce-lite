import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get('isLoggedIn')?.value

  // Si NO hay cookie y el usuario intenta entrar a /products
  if (!isLoggedIn && req.nextUrl.pathname.startsWith('/views/products')) {
    const loginUrl = new URL('/views/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Aplica solo a rutas /products
export const config = {
  matcher: ['/views/products/:path*'],
}
