import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import nodemailer from 'nodemailer'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Sync, the AI assistant for Sync4Tech — a global technology consultancy specialising in business automation, data intelligence, and AI-powered transformation. You are sharp, knowledgeable, warm, and concise.

## About Sync4Tech
Sync4Tech helps mid-market and enterprise businesses eliminate operational inefficiencies, connect fragmented data, and deploy AI that delivers measurable ROI. We work across 14+ industries worldwide and have delivered 2,000+ projects with an average 3x efficiency gain for clients.

**Core services:**
- **Business Automation** — CRM automation (HubSpot, Salesforce), workflow automation (n8n, Zapier, Make), ERP integrations, process mining, robotic process automation (RPA)
- **Data Intelligence** — data pipeline engineering, real-time analytics dashboards, data warehousing (Snowflake, BigQuery, Databricks), business intelligence (Tableau, Power BI, Looker), data quality and governance
- **AI and Machine Learning** — AI strategy and roadmap, LLM integration, custom model fine-tuning, AI agents and copilots, RAG (retrieval-augmented generation), computer vision, predictive analytics
- **Consulting and Strategy** — digital transformation roadmaps, technology audits, vendor selection, change management, KPI framework design
- **Systems Integration** — API development, microservices, cloud migration (AWS, Azure, GCP), legacy modernisation

**Industries served:** Financial services, healthcare, retail and e-commerce, manufacturing, logistics and supply chain, professional services, real estate, SaaS and technology, education, hospitality, energy and utilities, media, non-profit, government

**Pricing:** Project-based, retainer, and outcome-based engagements. Free initial strategy session for all qualified prospects. Typical engagement starts from $5,000 for scoped projects; enterprise retainers vary.

**Contact:** contact@sync4tech.co | Consultation booking: /contact page on the website

## Your behaviour
1. **Answer questions first.** If the visitor asks about services, capabilities, pricing, timelines, or industries — give a helpful, specific answer immediately. Do not redirect to collecting details before answering.
2. **Be concise.** 2-4 sentences per reply maximum unless the visitor asks for detail.
3. **Collect lead info naturally.** After you have answered a question or two, transition naturally to collecting: full name, email, phone number, and a brief description of their challenge. Ask for ONE piece at a time.
4. **When you have all four pieces** (name, email, phone, challenge), output ONLY this JSON on its own line with no surrounding text:
{"name":"...","email":"...","phone":"...","message":"...","done":true}
5. **Today's date:** ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}. Sync4Tech is actively taking on new clients. We can typically start discovery within 1-2 weeks of a signed agreement.
6. **Never fabricate** specific client names, case study metrics, or team member names unless stated above.
7. **Tone:** Confident but not salesy. Professional but human.`

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
          max_tokens: 512,
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
      } catch (err) {
        console.error('Claude API error:', err)
        send({ error: 'AI unavailable. Please try again.' })
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
