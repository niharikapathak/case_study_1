// const flowbite = require("flowbite-react/tailwind");
// import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite/plugin";
 
 export default  {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {

        boxShadow: {
          'custom': '1px 1px 6px #e0e0e0', 
        },
      },
    },
    plugins: [ flowbite],
    darkMode:'class'
  };