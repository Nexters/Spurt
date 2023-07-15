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
                  fontSize: 700,
               },
            ],
            title2: [
               '26px',
               {
                  lineHeight: '145%',
                  fontSize: 700,
               },
            ],
            title3: [
               '24px',
               {
                  lineHeight: '145%',
                  fontSize: 700,
               },
            ],
            title4: [
               '20px',
               {
                  lineHeight: '145%',
                  fontSize: 700,
               },
            ],
         },
      },
   },
   plugins: [],
};
