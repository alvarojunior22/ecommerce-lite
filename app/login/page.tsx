'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'


export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      await axios.post('/api/login', { username, password })
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/products')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) setError('Invalid credentials ❌')
        else setError('Server error ⚠️')
      } else {
        setError('Unexpected error')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-lineal-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.webp"
            alt="Ecommerce-lite logo"
            width={160}
            height={160}
            priority
            className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />

          <h1 className="text-2xl font-bold mt-4 text-gray-800 text-center">
            Welcome to <span className="text-blue-600">Ecommerce-lite</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Sign in to continue
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Ecommerce-lite. All rights reserved.
        </p>
      </div>
    </div>
  )
}
