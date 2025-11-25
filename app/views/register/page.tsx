'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useStore } from '@/utils/useStore'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fieldError, setFieldError] = useState<{fullName?: string, email?: string, password?: string, confirmPassword?: string}>({})
  const router = useRouter()
  const store = new useStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFieldError({})

    const errors: typeof fieldError = {}
    if(!fullName) errors.fullName = 'Full name is required'
    if(!email) errors.email = 'Email is required'
    if(!password) errors.password = 'Password is required'
    if(password !== confirmPassword) errors.confirmPassword = 'Passwords do not match'

    if(Object.keys(errors).length > 0){
      setFieldError(errors)
      return
    }

    
    store.create({ fullName, email, password })

    document.cookie = "isLoggedIn=true; path=/; max-age=86400; sameSite=strict"
    router.push('/views/products')
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
            Create your account on <span className="text-blue-600">Ecommerce-lite</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Sign up to start shopping
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                fieldError.fullName ? 'border-red-500 focus:ring-red-400' : 'border-gray-400 focus:ring-blue-500'
              }`}
              placeholder="Enter your full name"
            />
            {fieldError.fullName && (
              <p className="text-red-500 text-xs mt-1">{fieldError.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                fieldError.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-400 focus:ring-blue-500'
              }`}
              placeholder="Enter your email"
            />
            {fieldError.email && (
              <p className="text-red-500 text-xs mt-1">{fieldError.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                fieldError.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-400 focus:ring-blue-500'
              }`}
              placeholder="Enter your password"
            />
            {fieldError.password && (
              <p className="text-red-500 text-xs mt-1">{fieldError.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                fieldError.confirmPassword ? 'border-red-500 focus:ring-red-400' : 'border-gray-400 focus:ring-blue-500'
              }`}
              placeholder="Confirm your password"
            />
            {fieldError.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{fieldError.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Ecommerce-lite. All rights reserved.
        </p>
      </div>
    </div>
  )
}
