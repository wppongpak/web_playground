/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

const config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            maxWidth: {
                'xs': '20rem',    // 320px
                'sm': '24rem',    // 384px
                'md': '28rem',    // 448px
                'lg': '32rem',    // 512px
                'xl': '36rem',    // 576px
                '2xl': '42rem',   // 672px
                '3xl': '48rem',   // 768px
                '4xl': '56rem',   // 896px
                '5xl': '64rem',   // 1024px
                '6xl': '72rem',   // 1152px
                '7xl': '80rem',   // 1280px
            }
        },
    },
	plugins: [daisyui],
    daisyui: {
        themes: [
            "light",
            "dark", 
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
        ],
        darkTheme: "dark",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: false,
        themeRoot: ":root",
    },
};

export default config;
