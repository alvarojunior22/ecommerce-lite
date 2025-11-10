'use client'

import ProductList from "../components/ProductList/ProductList"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SeccionProducts() {
  const router = useRouter()

  useEffect(() => {
    const isloggedIn = localStorage.getItem('isLoggedIn')
    if (!isloggedIn) {
      router.push('/login')
    }
  }, [router])

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="font-semibold text-2xl mb-6 text-center">Our Products</h1>
      <ProductList/>
    </main>
  )
}