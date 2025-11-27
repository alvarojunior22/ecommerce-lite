import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();

  const user = {
    role: body.role, // el rol que obtienes de tu lógica
  };

  if (!user.role) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const cookieStore = await cookies();

  cookieStore.set("userRole", user.role, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
  });

  return NextResponse.json({ ok: true });
}
