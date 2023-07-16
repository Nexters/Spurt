/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
     extend: {
       backgroundImage: {
         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         "gradient-conic":
           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       },
       fontSize: {
         title1: [
           "28px",
           {
             lineHeight: "145%",
             fontSize: 700,
           },
         ],
         title2: [
           "26px",
           {
             lineHeight: "145%",
             fontSize: 700,
           },
         ],
         title3: [
           "24px",
           {
             lineHeight: "145%",
             fontSize: 700,
           },
         ],
         title4: [
           "24px",
           {
             lineHeight: "145%",
             fontSize: 400,
           },
         ],
         title5: [
            "20px",
            {
              lineHeight: "145%",
              fontSize: 700,
            },
          ],
         heading1: [
           "20px",
           {
             lineHeight: "145%",
             fontSize: 600,
           },
         ],
         heading2: [
           "20px",
           {
             lineHeight: "145%",
             fontSize: 500,
           },
         ],
         heading3: [
           "20px",
           {
             lineHeight: "145%",
             fontSize: 400,
           },
         ],
         body1: [
           "18px",
           {
             lineHeight: "145%",
             fontSize: 700,
           },
         ],
         body2: [
           "18px",
           {
             lineHeight: "145%",
             fontSize: 500,
           },
         ],
         body3: [
           "18px",
           {
             lineHeight: "145%",
             fontSize: 400,
           },
         ],
         body4: [
           "16px",
           {
             lineHeight: "140%",
             fontSize: 700,
           },
         ],
         body5: [
           "16px",
           {
             lineHeight: "140%",
             fontSize: 600,
           },
         ],
         body6: [
           "16px",
           {
             lineHeight: "140%",
             fontSize: 500,
           },
         ],
         body7: [
           "16px",
           {
             lineHeight: "140%",
             fontSize: 400,
           },
         ],
         caption1: [
           "14px",
           {
             lineHeight: "145%",
             fontSize: 700,
           },
         ],
         caption2: [
           "14px",
           {
             lineHeight: "145%",
             fontSize: 500,
           },
         ],
         caption3: [
           "14px",
           {
             lineHeight: "145%",
             fontSize: 400,
           },
         ],
       },
     },
   },
   plugins: [],
 };
 