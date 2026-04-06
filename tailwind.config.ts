import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2FA4D7',
        secondary: '#E76F2E',
        accent: '#E76F2E',
        dark: '#3E2C23',
        light: '#F5E9D8',
        muted: '#94A3B8',
        surface: '#FFFFFF',
        border: '#E2E8F0',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.12)',
        card: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.05), transparent 30%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.05), transparent 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
