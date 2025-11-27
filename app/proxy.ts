import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

  const path = request.nextUrl.pathname;

  // Rutas protegidas
  const protectedRoutes = ["/views/products"];

  const isProtected = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  // Si intenta entrar a una ruta protegida SIN login
  if (isProtected && !isLoggedIn) {
    const loginURL = new URL("/views/login", request.url);
    return NextResponse.redirect(loginURL);
  }

  // Si todo está bien, deja pasar
  return NextResponse.next();
}

export const config = {
  matcher: ["/views/products/:path*"],
};
