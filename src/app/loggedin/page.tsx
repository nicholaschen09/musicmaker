"use client"

import { useState } from "react"
import Balancer from "react-wrap-balancer"

export default function LoggedInHome() {
  const [prompt, setPrompt] = useState("")
  const [musicResult, setMusicResult] = useState("")

  const handlePromptSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedPrompt = prompt.trim()
    if (!trimmedPrompt) {
      setMusicResult("Please enter a valid prompt.")
      return
    }
    // Removed regex validation to allow all prompt formats.
    console.log("Sending prompt:", trimmedPrompt)
    try {
      // Call an AI API to generate music based on the prompt
      const response = await fetch("http://localhost:3000/api/generate-music", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-api-key": "eee6603c574a4eeca2b9c967047424f3"
        },
        body: JSON.stringify({ prompt: trimmedPrompt })
      })
      const data = await response.json()
      if (!response.ok) {
        console.error("Response data:", data)
        throw new Error(data.error || "Error generating music")
      }
      setMusicResult(data.music || "No music generated")
    } catch (error: any) {
      console.error("Error generating music:", error)
      setMusicResult(`Error generating music: ${error.message}`)
    }
    setPrompt("")
  }

  return (
    <div className="flex flex-col items-center">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Harmony
        </h1>
        <p className="text-center text-lg font-light text-foreground">
          <Balancer>
            A revolutionary AI music maker, blending technology and creativity to transform your musical ideas.
          </Balancer>
        </p>
      </section>
      <section className="w-full max-w-[850px] p-4">
        <form onSubmit={handlePromptSubmit} className="flex flex-col gap-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            placeholder="Enter your prompt..."
            className="w-full p-3 bg-background text-foreground border border-pink-300 rounded"
          />
          <button type="submit" className="py-2 px-4 bg-primary text-white rounded">
            Submit Prompt
          </button>
        </form>
        {musicResult && (
          <div className="mt-4 p-4 border border-pink-300 rounded">
            {musicResult.startsWith("Error") ? (
              <p className="text-lg">{musicResult}</p>
            ) : (
              <audio controls src={musicResult} className="w-full" />
            )}
          </div>
        )}
      </section>
    </div>
  )
}
