// const flowbite = require("flowbite-react/tailwind");
// import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite/plugin";
 
 export default  {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {},
    },
    plugins: [ flowbite],
    darkMode:'class'
  };