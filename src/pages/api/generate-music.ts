import type { NextApiRequest, NextApiResponse } from 'next'

// New helper: simulate music generation by returning a valid audio URL without additional validation.
async function generateMusic(prompt: string): Promise<string> {
  console.log("Inside generateMusic. Received prompt:", prompt);
  // For testing, simply return a static valid audio URL.
  return "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
}

// ...existing code...
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request received. Method:", req.method);
  console.log("Full request body:", req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  console.log("Received prompt:", prompt);

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid prompt provided.' });
  }
  
  try {
    console.log("Generating music with prompt:", prompt);
    const music = await generateMusic(prompt);
    console.log("Generated music URL:", music);
    return res.status(200).json({ music });
  } catch (error: any) {
    console.error("Error in music generation:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
