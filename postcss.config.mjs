const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: {
        content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [
          // require('@tailwindcss/typography'),
        ],
      }
    },
    autoprefixer: {},
  },
};

export default config;
