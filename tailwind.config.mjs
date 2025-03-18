/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          BASE: '#FFFFFF',
          50: '#E0E0E0',
        },
        black: {
          BASE: '#000000',
          50: '#0E0E0E',
          100: '#4E4E4E'
        },
        gray: {
          BASE: '#D4D4D4',
          50: '#888888',
          100: '#A4A4A4'
        },
        orange:{
          50: '#FF9900',
        }
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        s1: '42px',
        s2: '38px',
        h3: '32px',
        r1: '28px',
        h4: '20px',
        p1: '22px',
        p2: '18px',
        p3: '14px',
        p4: '12px',
      },
      // fontSize: {
      //   base: 'var(--text-base-size)',
      //   small: 'var(--text-small-size)',
      // },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
