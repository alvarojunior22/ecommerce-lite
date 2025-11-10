import { Users } from "@/interfaces/users";
import { users as data } from "@/data/users.data";

export async function authenticate(
  username: string,
  password: string
): Promise<Users | null> {
  // esto simula una consulta asincrónica 
  await new Promise((res) => setTimeout(res, 300));

  const user = data.find(
    (u) => u.fullName === username && u.password === password
  );

  return user || null;
}