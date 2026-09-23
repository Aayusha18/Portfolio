
export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        // Light surfaces use Palladian; "white" text on dark reads as warm cream
        white: '#EEE9DF',
        // Warm-to-cool ramp: Palladian → Oatmeal → Blue Fantastic → Abyssal Anchorfish Blue
        neutral: {
          50: '#E7E1D5',
          100: '#DFD8CA',
          200: '#D4CCBC',
          300: '#C9C1B1', // Oatmeal
          400: '#A7A193',
          500: '#6B7383',
          600: '#4B586B',
          700: '#3A4A5E',
          800: '#2C3B4D', // Blue Fantastic
          900: '#223040',
          950: '#1B2632', // Abyssal Anchorfish Blue
        },
        palladian: '#EEE9DF',
        oatmeal: '#C9C1B1',
        flame: '#FFB162', // Burning Flame
        truffle: '#A35139', // Truffle Trouble
        fantastic: '#2C3B4D',
        abyssal: '#1B2632',
      },
    },
  },
  plugins: [],
}
