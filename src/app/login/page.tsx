"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For testing, redirect immediately to the logged in page.
    router.push("/loggedin")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <form onSubmit={handleSubmit} className="w-full max-w-xl p-8 bg-background border border-pink-300 rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
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
          Login
        </button>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <a 
            href="/register" 
            className="font-bold text-blue-500 hover:bg-green-500 hover:text-white px-2 py-1 rounded"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  )
}
