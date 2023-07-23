/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         fontSize: {
            title1: [
               '28px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            title2: [
               '26px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            title3: [
               '24px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            title4: [
               '24px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
            title5: [
               '26px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            title6: [
               '24px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
            title7: [
               '24px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            title8: [
               '20px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            heading1: [
               '20px',
               {
                  lineHeight: '145%',
                  fontWeight: '600',
               },
            ],
            heading2: [
               '20px',
               {
                  lineHeight: '145%',
                  fontWeight: '500',
               },
            ],
            heading3: [
               '20px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
            body1: [
               '18px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            body2: [
               '18px',
               {
                  lineHeight: '145%',
                  fontWeight: '500',
               },
            ],
            body3: [
               '18px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
            body4: [
               '16px',
               {
                  lineHeight: '140%',
                  fontWeight: '700',
               },
            ],
            body5: [
               '16px',
               {
                  lineHeight: '140%',
                  fontWeight: '600',
               },
            ],
            body6: [
               '16px',
               {
                  lineHeight: '140%',
                  fontWeight: '500',
               },
            ],
            body7: [
               '16px',
               {
                  lineHeight: '140%',
                  fontWeight: '400',
               },
            ],
            caption1: [
               '14px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            caption2: [
               '14px',
               {
                  lineHeight: '145%',
                  fontWeight: '500',
               },
            ],
            caption3: [
               '14px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
            caption4: [
               '12px',
               {
                  lineHeight: '145%',
                  fontWeight: '700',
               },
            ],
            caption5: [
               '12px',
               {
                  lineHeight: '145%',
                  fontWeight: '500',
               },
            ],
            caption6: [
               '12px',
               {
                  lineHeight: '145%',
                  fontWeight: '400',
               },
            ],
         },
         colors: {
            white: '#ffffff',
            gray: {
               100: '#f8f8f8',
               200: '#e9e9e9',
               300: '#d3d3d3',
               400: '#a7a7a7',
               500: '#7a7a7a',
               600: '#4b4a4a',
               700: '#302e2e',
            },
            main: {
               100: '#fff4ce',
               200: '#ffe5a3',
               300: '#ffd66c',
               400: '#fec20c',
            },
            red: '#fe7448',
            gray_line: '#00000017',
         },
      },
   },
   plugins: [],
};
