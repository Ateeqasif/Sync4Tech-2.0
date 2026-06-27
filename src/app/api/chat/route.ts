import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import nodemailer from 'nodemailer'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the AI assistant for Sync4Tech, a UK-based data intelligence, automation, and consulting company. You are friendly, professional, and concise.

Your goal is to have a natural conversation to collect these four pieces of information from the visitor:
1. Full name
2. Email address
3. Phone number
4. What solution or help they are looking for

Rules:
- Keep responses SHORT — 1-2 sentences max
- Ask for one piece of information at a time, naturally woven into conversation
- Once you have all four pieces, respond with ONLY a valid JSON block in this exact format on its own line (no other text before or after):
{"name":"...","email":"...","phone":"...","message":"...","done":true}
- If someone asks about Sync4Tech services (data intelligence, automation, CRM, AI, consulting), give a very brief helpful answer then continue collecting their details
- Be warm and human — not robotic
- Do not mention that you are collecting information or that you will send an email`

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
        <tr><td><strong>Looking for</strong></td><td>${data.message}</td></tr>
      </table>
    `,
  })
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
  }

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    // Check if Claude has collected all fields
    const jsonMatch = text.match(/\{[^}]*"done"\s*:\s*true[^}]*\}/)
    if (jsonMatch) {
      try {
        const lead = JSON.parse(jsonMatch[0])
        // Fire and forget the email
        sendLeadEmail(lead).catch(console.error)
        return NextResponse.json({
          text: `Thanks ${lead.name}! I've passed your details to the Sync4Tech team. Someone will reach out to you at ${lead.email} very soon.`,
          done: true,
        })
      } catch {
        // JSON parse failed — just return the text
      }
    }

    return NextResponse.json({ text, done: false })
  } catch (err) {
    console.error('Claude API error:', err)
    return NextResponse.json({ error: 'AI unavailable' }, { status: 500 })
  }
}
