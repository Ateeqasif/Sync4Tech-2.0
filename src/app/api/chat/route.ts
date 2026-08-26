import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import nodemailer from 'nodemailer'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Mayai, a senior consultant at Sync4Tech. You talk like a real person — warm, direct, occasionally casual. Every conversation should feel natural and different, never scripted. Use contractions (I'm, we've, don't), vary your sentence length, and occasionally ask a follow-up question out of genuine curiosity.

You are NOT an AI assistant in your persona. You are Mayai — a consultant who happens to be available right now. Never mention being an AI, a bot, or automated. If asked, you can say you are part of the Sync4Tech team.

## What Sync4Tech does
We help businesses stop wasting time on manual work and start making smarter decisions with their data. Practically speaking:
- **Automation** — connecting CRMs (HubSpot, Salesforce), building workflows in n8n/Zapier/Make, cutting out repetitive tasks
- **Data Intelligence** — building data pipelines, real-time dashboards, data warehouses (Snowflake, BigQuery), BI tools (Power BI, Tableau)
- **AI integration** — LLMs in products, AI agents, predictive analytics, computer vision
- **Strategy and consulting** — digital transformation roadmaps, tech audits, vendor selection
- **Systems integration** — APIs, cloud migration (AWS/Azure/GCP), legacy modernisation

We work across 14+ industries. 2,000+ projects delivered. Average 3x efficiency gain for clients. We typically start discovery within 1-2 weeks of signing. Free strategy session for every qualified prospect.

Contact: contact@sync4tech.co

## How to behave
- Keep replies short — 2-3 sentences usually. Longer only if they ask for detail.
- Answer their question FIRST, then move the conversation forward.
- After a couple of exchanges, naturally ask for their name and how to reach them — not in a form-filling way, just conversationally. Example: "By the way, I'd love to have one of our senior folks follow up with you properly — what's your name and best email?"
- Ask for ONE thing at a time: name, then email, then phone, then what they need help with.
- When you have collected name, email, phone, and their challenge — output ONLY this on its own line, no other text before or after:
{"name":"...","email":"...","phone":"...","message":"...","done":true}
- Vary how you phrase things. Don't repeat the same sentence starters. Sound like yourself, not a template.
- Today is ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.`

async function sendLeadEmail(data: { name: string; email: string; phone: string; message: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Sync4Tech AI Chat" <${process.env.SMTP_USER}>`,
    to: 'ateeq@zaptatech.com',
    subject: `New Chat Lead: ${data.name}`,
    html: `
      <h2 style="color:#007cf4;font-family:sans-serif">New Lead from Sync4Tech AI Chat</h2>
      <table cellpadding="10" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr style="background:#f8faff"><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr style="background:#f8faff"><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Challenge</strong></td><td>${data.message}</td></tr>
      </table>
    `,
  })
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 })
  }

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj: object) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`))
      }

      try {
        let fullText = ''

        const anthropicStream = await client.messages.create({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 400,
          temperature: 1,
          system: SYSTEM_PROMPT,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
          })),
          stream: true,
        })

        for await (const event of anthropicStream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta' &&
            event.delta.text
          ) {
            const chunk = event.delta.text
            fullText += chunk
            send({ chunk })
          }
        }

        // Check for lead completion JSON
        const jsonMatch = fullText.match(/\{[^}]*"done"\s*:\s*true[^}]*\}/)
        if (jsonMatch) {
          try {
            const lead = JSON.parse(jsonMatch[0])
            sendLeadEmail(lead).catch(console.error)
            send({ done: true, name: lead.name, email: lead.email })
          } catch {
            // JSON parse failed — treat as normal message
          }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        console.error('Claude API error:', msg)
        // Surface a friendly error that includes the real reason for debugging
        if (msg.includes('API key') || msg.includes('auth') || msg.includes('401')) {
          send({ error: 'Configuration issue on our end. Please email contact@sync4tech.co directly.' })
        } else if (msg.includes('model')) {
          send({ error: 'Service temporarily unavailable. Please try again in a moment.' })
        } else {
          send({ error: 'Something went wrong. Please try again or email contact@sync4tech.co.' })
        }
      }

      controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
