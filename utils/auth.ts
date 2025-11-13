import { Users } from "@/interfaces/users";
import {  data } from "@/data/users.data";


type AuthError = {
  error: string

}

export async function authenticate(
  username: string,
  password: string
): Promise<Users | AuthError> {
  // esto simula una consulta asincrónica 
  await new Promise((res) => setTimeout(res, 300));

  const user = data.find(
    (u) => u.fullName === username 
  );
  if(!user) return {error: 'invalid username' }

  if(user?.password !== password) return {error: 'invalid password'}

  return user 
}