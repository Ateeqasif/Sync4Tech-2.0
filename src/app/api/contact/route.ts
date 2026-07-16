import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TO = ['ateeqasif1168@gmail.com', 'hassan.ali02468@gmail.com']

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, company, size, industry, challenge, source } = body

    const html = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f8faff;border-radius:16px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#033a9d,#007cf4);padding:32px 40px;">
          <h1 style="color:white;margin:0;font-size:22px;font-weight:900;">New Contact Form Submission</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">via Sync4Tech.com${source ? ` · ${source}` : ''}</p>
        </div>
        <div style="padding:32px 40px;background:white;">
          <table style="width:100%;border-collapse:collapse;">
            ${[
              ['Name', name],
              ['Email', email],
              ['Company', company],
              ['Company Size', size || '—'],
              ['Industry', industry || '—'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f4ff;width:36%;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">${label}</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f4ff;color:#0f172a;font-size:14px;font-weight:600;">${value || '—'}</td>
              </tr>
            `).join('')}
          </table>
          ${challenge ? `
          <div style="margin-top:24px;background:#f8faff;border-left:3px solid #007cf4;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0 0 6px;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Challenge</p>
            <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;">${challenge}</p>
          </div>` : ''}
        </div>
        <div style="padding:20px 40px;background:#f8faff;border-top:1px solid #e2e8f0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Sync4Tech Forms <forms@sync4tech.com>',
      to: TO,
      replyTo: email,
      subject: `New enquiry from ${name} — ${company || 'Sync4Tech'}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
