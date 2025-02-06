"use client"

import { useState } from "react"
import Link from "next/link"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registered, setRegistered] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: implement actual registration logic
    console.log("Registering", { name, email, password })
    setRegistered(true) // Indicate success instead of redirecting immediately
  }

  if (registered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="p-8 bg-background border border-pink-300 rounded shadow-md text-center">
          <h2 className="mb-4 text-2xl font-bold">Registration Successful</h2>
          <p className="mb-4">You have registered successfully. Please proceed to <Link href="/login" className="text-primary underline">login</Link>.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-8 bg-background border border-pink-300 rounded shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-background border border-pink-300 rounded"
          />
        </label>
        <label className="block mb-2">
          <span className="block text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-background border border-pink-300 rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-background border border-pink-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 font-bold text-white bg-primary rounded hover:bg-green-500"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link href="/login" className="font-bold text-blue-500 underline hover:bg-green-500 hover:text-white px-2 py-1 rounded">
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}
