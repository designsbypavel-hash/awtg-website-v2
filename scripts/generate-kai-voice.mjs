import { mkdir, writeFile } from 'node:fs/promises'

const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY. Set it before running this script.')
  process.exit(1)
}

const clips = [
  {
    file: 'kai-voice-greeting.mp3',
    input: 'Hi there. How can I help you today?',
  },
  {
    file: 'kai-voice-delivery.mp3',
    input: 'Found it. Order number 48291 is out for delivery, arriving today before six P M.',
  },
  {
    file: 'kai-voice-distance.mp3',
    input: "Just two point four miles away. They'll be with you before six P M.",
  },
  {
    file: 'kai-voice-address.mp3',
    input: "Yes. I've updated the address. You'll receive a confirmation shortly.",
  },
]

const outputDir = new URL('../public/audio/', import.meta.url)
await mkdir(outputDir, { recursive: true })

for (const clip of clips) {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice: 'nova',
      response_format: 'mp3',
      input: clip.input,
      instructions: 'Speak as a warm, calm UK customer support assistant. Natural pacing, friendly confidence, conversational and human-like, with no robotic tone.',
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Failed to generate ${clip.file}: ${response.status} ${body}`)
  }

  const bytes = Buffer.from(await response.arrayBuffer())
  await writeFile(new URL(clip.file, outputDir), bytes)
  console.log(`Generated public/audio/${clip.file}`)
}
