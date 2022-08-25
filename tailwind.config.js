// tailwind.config.js
module.exports = {
    content: [
      "./screens/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              lightishPink: '#fbe4e5',
              darkRed: '#de1f27',
              dark: '#616161',
            }
          },
    }
    // ...
  };