import { data } from "@/data/users.data";
import { Users } from "@/interfaces/users";


const InicialUser = data


export class useStore {
  private user: Users[]
  private nexId: number

  constructor() {
    this.user = [...InicialUser]
    //Here we simulate the increase of the id
    this.nexId = this.user.length > 0 ? Math.max(...this.user.map(u => u.id)) +1 : 1
  }
  
  public list():Users[] {
    if(this.user.length > 0){
      console.log('✅ 200 GET')
    } else if (this.user.length === 0) {
      console.log('❓ 404 Not found')
    } else {
      console.log('❌ 500 Server error')
    }
    return this.user
  }

  public findByname(name: string): Users[] {
    const searchName = name.toLowerCase(); 

    const results = this.user.filter((user) => {
      
      return user.fullName.toLowerCase().includes(searchName);
    });

   
    if (results.length > 0) {
      console.log('✅ 200 GET: Búsqueda exitosa.');
    } else {
      console.log('❓ 404 Not found: No se encontraron usuarios con ese nombre.');
    }

    return results;
  }

  public create (newUser: Omit<Users, 'id'>): Users {
    const userToadd: Users = {
      id: this.nexId,
      ...newUser
    }
    this.user.push(userToadd)
    this.nexId++
    console.log("✅ 201 Created: New user add")
    return userToadd
  }

  public update(id: number, update: Partial<Omit<Users, 'id'>>): Users | undefined {
    console.log('✅ 200 PATCH')

    const index = this.user.findIndex((i) => i.id === id)

    if (index === -1) {
      console.warn(`Usuario with ID ${id} not found.`);
      return undefined;
    }

    this.user[index] = {
      ...this.user[index],
      ...update
    }

    return this.user[index]
    
  }

  public remove(id: number): boolean {
    
    console.log('✅ 200 DELETE');

    const initialLength = this.user.length;

    
    this.user = this.user.filter(f => f.id !== id);

    const removed = this.user.length < initialLength;

    if (removed) {
      console.log(`✅ 200 DELETE Successfuly: ${id}.`);
    } else {
      console.log(`❓ 404 Not found: ${id}.`);
    }

    return removed;
  }
}