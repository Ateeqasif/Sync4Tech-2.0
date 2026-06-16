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
        accent: '#D87307',
        'accent-secondary': '#BD7841',
        'accent-light': '#F59E0B',
      },
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        'display-lg': ['96px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        'display-md': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'heading-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-md': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['22px', { lineHeight: '1.6' }],
        'body-md': ['18px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        section: '180px',
        'section-sm': '140px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
