import type { Config } from "tailwindcss"

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {

    fontFamily:{
      oswald : ["Oswald", "sans-serif"],
      kanit : ["Kanit", "sans-serif"],
    },

    fontSize: {
      '12xl': ['10rem', {
        lineHeight: '2.25rem',
        letterSpacing: '0.03em',
        fontWeight: '700',
      }],
      '15xl': ['20rem', {
        lineHeight: '2.25rem',
        letterSpacing: '0.03em',
        fontWeight: '700',
      }],
      '18xl': ['6rem', {
        lineHeight: '2.25rem',
        letterSpacing: '0.0em',
        fontWeight: '700',
      }],

      'ldescription': ['1.8rem', {
        lineHeight: '5rem',
        letterSpacing: '0.0em',
        fontWeight: '200',
      }],

      'page2head': ['2.5rem', {
        lineHeight: '2.5rem',
        letterSpacing: '0.0em',
        fontWeight: '200',
      }],
      'ultimateproject': ['4.5rem', {
        lineHeight: '1',
        letterSpacing: '0.0em',
        fontWeight: '200',
      }],
    },
    
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },

      gradientColorStops: {
        'futuristic-start': '95.96% 37.93% 233.14% 11.27%',
        'futuristic-end': '16.67% 89.69%  61.62%  45.98%',
      },
      colors: {
        'futuristic-blue': 'rgba(48, 79, 255, 0.6)',
      },

      
      width: {
        '130': '120rem',
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;