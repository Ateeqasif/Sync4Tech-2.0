import { NextResponse } from 'next/server'

const CG = 'https://api.coingecko.com/api/v3'

// Module-level cache — shared across warm serverless invocations
let _cache: { data: unknown; ts: number } | null = null
const TTL = 60_000  // 60 s

export async function GET() {
  if (_cache && Date.now() - _cache.ts < TTL) {
    return NextResponse.json(_cache.data)
  }

  try {
    const headers = { Accept: 'application/json' }
    const opts    = { headers, signal: AbortSignal.timeout(8000) }

    const [btcChart, ethChart, prices] = await Promise.all([
      fetch(`${CG}/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minutely`, opts).then(r => r.json()),
      fetch(`${CG}/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=minutely`, opts).then(r => r.json()),
      fetch(`${CG}/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true`, opts).then(r => r.json()),
    ])

    const btc        = (btcChart.prices  as [number, number][]).slice(-80).map(p => p[1])
    const eth        = (ethChart.prices  as [number, number][]).slice(-80).map(p => p[1])
    const timestamps = (btcChart.prices  as [number, number][]).slice(-80).map(p => p[0])

    const data = {
      btc,
      eth,
      timestamps,
      live: {
        btc:       prices.bitcoin?.usd               ?? btc.at(-1)  ?? 0,
        eth:       prices.ethereum?.usd              ?? eth.at(-1)  ?? 0,
        btcChange: prices.bitcoin?.usd_24h_change    ?? 0,
        ethChange: prices.ethereum?.usd_24h_change   ?? 0,
      },
    }
    _cache = { data, ts: Date.now() }
    return NextResponse.json(data)
  } catch {
    // Serve stale data rather than a hard error
    if (_cache) return NextResponse.json(_cache.data)
    return NextResponse.json({ error: 'Market data unavailable' }, { status: 503 })
  }
}
