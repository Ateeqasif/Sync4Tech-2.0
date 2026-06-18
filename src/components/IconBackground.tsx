'use client'

// Sync4Tech icon reproduced from the two clip-path polygons in logo.svg
// Original viewBox 1000×1000 with matrix(1,0,0,-1,0,1000) → y' = 1000-y
const PATH_A = "M174.627,418.223 L238.381,417.821 L238.795,483.419 L206.039,483.625 L205.831,450.743 L193.745,450.819 L174.945,483.821 L206.039,483.625 L206.246,516.341 L137.328,516.775 L127.769,500.477 L137.121,484.06 Z"
const PATH_B = "M270.245,581.776 L206.659,582.179 L206.247,516.341 L238.821,516.133 L239.031,549.058 L251.202,548.981 L270.136,515.746 L238.821,515.943 L238.615,483.623 L307.557,483.189 L317.119,499.493 L307.763,515.916 Z"

// Icon in a normalised 0 0 200 180 space (offset so bounding box starts at 0,0)
const ICON_VIEWBOX = "117 408 210 184"

const COLS = 8
const ROWS = 7

const columns = Array.from({ length: COLS }, (_, i) => i)
const rows = Array.from({ length: ROWS }, (_, i) => i)

export default function IconBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="absolute inset-0 flex justify-around">
        {columns.map(col => {
          const delay = col * 0.9          // stagger each column
          const dur   = 18 + col * 1.4    // slightly different speed per column
          return (
            <div
              key={col}
              className="flex flex-col gap-10 items-center"
              style={{
                animation: `iconDrift ${dur}s ${delay}s linear infinite`,
                willChange: 'transform',
              }}
            >
              {rows.map(row => (
                <svg
                  key={row}
                  viewBox={ICON_VIEWBOX}
                  width="56"
                  height="50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.06 + (((col + row) % 3) * 0.02) }}
                >
                  <path d={PATH_A} fill="#007cf4" />
                  <path d={PATH_B} fill="#36c5f0" />
                </svg>
              ))}
              {/* Duplicate set so the loop is seamless */}
              {rows.map(row => (
                <svg
                  key={`r2-${row}`}
                  viewBox={ICON_VIEWBOX}
                  width="56"
                  height="50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.06 + (((col + row) % 3) * 0.02) }}
                >
                  <path d={PATH_A} fill="#007cf4" />
                  <path d={PATH_B} fill="#36c5f0" />
                </svg>
              ))}
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes iconDrift {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  )
}
