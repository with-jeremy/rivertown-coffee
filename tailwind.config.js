module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        'cup': '420px',
      },
      backgroundPosition: {
        'cup-left': 'left center',
      },
      colors: {
        primary: "#6B4F4F",
        secondary: "#C3A995",
        accent: "#D9CAB3",
        "bg-color": "#F5F5F5",
        "text-color-dark": "#333333",
        "text-color-light": "#dddddd",
        'bg-row1': '#dddddd',
        'bg-row2': '#C3A995',
        'bg-row3': '#684e3b',
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        'neumorphic': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'neumorphic-inset': 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  variants: {
    extend: {
      textColor: ['dark'],
      backgroundImage: ['responsive'],
      backgroundSize: ['responsive'],
      backgroundPosition: ['responsive'],
    },
  },
  plugins: [],
};
