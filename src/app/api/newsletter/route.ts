import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TO = ['ateeqasif1168@gmail.com', 'hassan.ali02468@gmail.com']

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const html = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f8faff;border-radius:16px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#033a9d,#007cf4);padding:32px 40px;">
          <h1 style="color:white;margin:0;font-size:22px;font-weight:900;">New Newsletter Subscriber</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">via Sync4Tech.com footer</p>
        </div>
        <div style="padding:32px 40px;background:white;">
          <p style="margin:0 0 6px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Subscriber Email</p>
          <p style="margin:0;color:#0f172a;font-size:16px;font-weight:700;">${email}</p>
        </div>
        <div style="padding:20px 40px;background:#f8faff;border-top:1px solid #e2e8f0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">Add this email to your newsletter list.</p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Sync4Tech Forms <forms@sync4tech.co>',
      to: TO,
      subject: `New newsletter subscriber: ${email}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
