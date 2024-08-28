/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // HTML file in the root directory of the project
    './src/**/*.{js,ts,jsx,tsx}', // All JavaScript, TypeScript and JSX/TSX files in the src directory
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // - PRİMARY - Purple Color Palette
        purple: {
          lightest: '#EAE2F8', // Moon Raker
          lighter: '#C4B5FD', // Melrose
          light: '#A78BFA', // Heliotrope
          DEFAULT: '#7C3AED', // Electric Violet
          dark: '#6D28D9', // Purple Heart
          darker: '#5B21B6', // Purple Heart Dark
          darkest: '#4C1D95', // Daisy Bush
        },

        // Blue Color Palette
        blue: {
          lightest: '#E0F2FE', // Pattens Blue
          lighter: '#BAE6FD', // French Pass
          light: '#7DD3FC', // Malibu
          DEFAULT: '#38BDF8', // Picton Blue
          dark: '#0EA5E9', // Cerulean
          darker: '#0284C7', // Lochmara
          darkest: '#0369A1', // Bahama Blue
        },

        // Pink Color Palette
        pink: {
          lightest: '#FCE7F3', // Wisp Pink
          lighter: '#FBCFE8', // Classic Rose
          light: '#F9A8D4', // Lavender Pink
          DEFAULT: '#F472B6', // Persian Pink
          dark: '#EC4899', // French Rose
          darker: '#DB2777', // Cerise
          darkest: '#BE185D', // Maroon Flush
        },

        // White Color Palette
        white: {
          DEFAULT: '#FFFFFF', // White
          dark: '#F0F0F0', // Gallery
          darker: '#D9D9D9', // Alto
          darkest: '#BFBFBF', // Silver
        },

        // Black Color Palette
        black: {
          lightest: '#666666', // Dove Gray
          lighter: '#4D4D4D', // Tundora
          light: '#2b2b2b', // Mine Shaft
          DEFAULT: '#000000', // Black
        },

        // Notification and warning colors palette
        green: {
          light: '#D1FAE5', // Scandal
          dark: '#047857', // Watercourse
        },
        orange: {
          light: '#FDE68A', // Sweet Corn
          dark: '#D97706', // Tahiti Gold
        },
        blueInfo: {
          light: '#BFDBFE', // French Pass
          dark: '#1E40AF', // Persian Blue
        },
        red: {
          light: '#FECACA', // Your Pink
          dark: '#B91C1C', // Thunderbird
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
