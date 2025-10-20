/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                modalBG: "#192222",
                mainBG: "#3E4B4D",
                playerBG: "#0F1818",
                customGray:"#27383A",
                highlights: "#00E1FF"
            }
        },
    },
    plugins: [],
}
