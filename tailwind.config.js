/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         width: {
            560: '560px',
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
