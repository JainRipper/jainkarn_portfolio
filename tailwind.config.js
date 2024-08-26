/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
				// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				// gray: colors.neutral,

        // Customer color
        'custom-green':'#C4D39C',
        'custom-blue':'#9BD3D0',
        'custom-red':'#FECCB5',
        // 'custom-green':'#C4D39C',
        // 'custom-blue':'#9BD3D0',
			}, 
      backgroundImage: {
        'fortfolio-project': "url('/images/project.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      // screens: { sm: "600px", md: "768px", lg: "976px", xl: "1440pd" },
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: '1rem',
        // default breakpoints but with 40px removed
        //
        // notice how the color changes at 768px but
        // the container size changes at 728px
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1280px',
          '2xl': '1496px',
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [backfaceVisibility],
}
