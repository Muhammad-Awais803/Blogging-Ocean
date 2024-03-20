/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      green: '#04D8B0',
      theme: '#40ABBF',
      bglogin: '#9AF0CF',
      signupbutton: '#38BE8F',
      bgloginform: '#FFFFFF',
      parrotgreen: '#D4F6CE',
      
     } 
    },
  },
  plugins: [],
};

  // green color code which is used in our website  #04D8B0
  
  // parrot green color code used in the blogsPageCard component   D4F6CE