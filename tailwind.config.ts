import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Inclui todos os arquivos no diretório "src"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
