// app/api/login/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// Importar la data de usuarios simulada
import { data as UsersDB } from "@/data/users.data"; // Asegúrate de ajustar la ruta de importación si es diferente

export async function POST(req: Request) {
  try {
    // Asumimos que el cliente envía el 'username' que es en realidad el 'email'
    const { username, password } = await req.json();

    // --- 1. Lógica de Autenticación de Credenciales ---

    // 1a. Buscar el usuario en la DB simulada usando el email (que es el 'username' en el payload)
    const userFound = UsersDB.find(
      (u) => u.fullName.toLowerCase() === username.toLowerCase()
    );

    
    if (!userFound || !userFound.isActive) {
      
      return NextResponse.json({ error: "invalid username" }, { status: 401 });
    }

   
    if (userFound.password !== password) {
      
      return NextResponse.json({ error: "invalid password" }, { status: 401 });
    }

   
    const cookieStore = await cookies();

    cookieStore.set("session_token", `AUTH_${userFound.id}_${Date.now()}`, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60, // 1 hora
      sameSite: "strict",
    });

    // 3. Respuesta de éxito
    return NextResponse.json({ ok: true, message: "Login successful" });
  } catch (error) {
    console.error("Login API Error:", error);

    // Error interno del servidor
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
