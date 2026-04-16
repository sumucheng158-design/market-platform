/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfaf5',
          100: '#faf4e8',
          200: '#f4e8d0',
          300: '#ead4b0',
          400: '#d9b88a',
          500: '#c89b64',
        },
        latte: {
          50: '#f7f3ee',
          100: '#ede4d8',
          200: '#dccbb5',
          300: '#c9ae8e',
          400: '#b5916a',
          500: '#9a7550',
          600: '#7d5e3f',
          700: '#604830',
          800: '#453323',
          900: '#2a1f15',
        },
        sage: {
          100: '#e8ede6',
          200: '#ccd8c8',
          300: '#a8bfa1',
          400: '#7fa276',
          500: '#5a8050',
        },
        ink: '#2c2420',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(168, 136, 100, 0.15)',
        'warm-lg': '0 8px 40px rgba(168, 136, 100, 0.2)',
        'card': '0 2px 16px rgba(44, 36, 32, 0.08)',
        'card-hover': '0 8px 32px rgba(44, 36, 32, 0.14)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
