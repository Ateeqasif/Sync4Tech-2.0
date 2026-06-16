import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#36c5f0',
          blue: '#007cf4',
          navy: '#033a9d',
          white: '#ffffff',
        },
        accent: '#007cf4',
        'accent-light': '#36c5f0',
        'accent-dark': '#033a9d',
      },
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: { container: '1440px' },
      spacing: { section: '160px', 'section-sm': '120px' },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #007cf4, #36c5f0)',
        'brand-gradient-dark': 'linear-gradient(135deg, #033a9d, #007cf4)',
        'hero-mesh': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(54,197,240,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,124,244,0.1) 0%, transparent 50%)',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        'spin-slow': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
