/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'orww-paper': '#FAF8F4',
        'orww-paper-soft': '#F1ECE0',
        'orww-navy': '#1A2A4F',
        'orww-navy-dark': '#0F1A33',
        'orww-oxblood': '#7A1F1F',
        'orww-forest': '#1F5D2C',
        'orww-ink': '#1A1A1A',
        'orww-ink-mute': '#4A4A4A',
        'orww-rule': '#D6CFC0',
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', 'Charter', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'measure': '38rem',
        'wide': '64rem',
      },
    },
  },
};
