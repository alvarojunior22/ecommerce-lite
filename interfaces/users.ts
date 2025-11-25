export interface Users {
  id: number
  fullName: string
  email: string
  password:string
  isActive?: boolean
  role?: string
  address?: string
  createdAt?: Date
}