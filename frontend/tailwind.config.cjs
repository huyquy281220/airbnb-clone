/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                avatar: "0 2px 4px rgba(0,0,0,0.18)",
            },
        },
    },
    plugins: [],
};
