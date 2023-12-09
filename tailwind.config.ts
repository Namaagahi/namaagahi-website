import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    clipPath: {
      mypolygon: "polygon(0% 0%, 60% 0%, 100% 0%, 100% 50%, 100% 100%, 60% 100%, 0% 100%)",
    },
    extend: {
      fontFamily: {
        sahel: ['var(--font-sahel)'],
        roboto: ['var(--font-roboto)']
      },
    }
  },
  plugins: [ plugin(function({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            'bg-gradient': (angle: number) => ({
                'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
        },
        {
            values: Object.assign(
                theme('bgGradientDeg', {}),
                {
                    10: '10deg',
                    15: '15deg',
                    20: '20deg',
                    25: '25deg',
                    30: '30deg',
                    45: '45deg',
                    60: '60deg',
                    90: '90deg',
                    120: '120deg',
                    180: '180deg',
                }
            )
        }
    )
  }),
  require("tailwindcss-animate"),
  require('tailwind-clip-path')
]
}
export default config
