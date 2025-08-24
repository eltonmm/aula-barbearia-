/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Sistema de cores para barbearia
        primary: {
          50: '#faf9f7',   // Creme muito claro
          100: '#f5f2ed',  // Creme claro
          200: '#e8e0d4',  // Bege claro
          300: '#d4c4b0',  // Bege
          400: '#b8a082',  // Marrom claro
          500: '#8b6f47',  // Marrom médio (cor principal)
          600: '#6b5435',  // Marrom escuro
          700: '#4a3a26',  // Marrom muito escuro
          800: '#2d2318',  // Quase preto marrom
          900: '#1a140f',  // Preto marrom
        },
        
        // Tons de dourado/ouro
        gold: {
          50: '#fffdf7',   // Dourado muito claro
          100: '#fffaeb',  // Dourado claro
          200: '#fef3c7',  // Dourado suave
          300: '#fde68a',  // Dourado médio claro
          400: '#fcd34d',  // Dourado médio
          500: '#f59e0b',  // Dourado principal
          600: '#d97706',  // Dourado escuro
          700: '#b45309',  // Dourado muito escuro
          800: '#92400e',  // Bronze
          900: '#78350f',  // Bronze escuro
        },

        // Tons neutros (preto, cinza, branco)
        neutral: {
          50: '#fafafa',   // Branco quase puro
          100: '#f5f5f5',  // Cinza muito claro
          200: '#e5e5e5',  // Cinza claro
          300: '#d4d4d4',  // Cinza médio claro
          400: '#a3a3a3',  // Cinza médio
          500: '#737373',  // Cinza
          600: '#525252',  // Cinza escuro
          700: '#404040',  // Cinza muito escuro
          800: '#262626',  // Quase preto
          900: '#171717',  // Preto
        },

        // Cores semânticas
        background: {
          primary: '#fafafa',    // Branco principal
          secondary: '#f5f2ed',  // Creme claro
          dark: '#171717',       // Preto para seções escuras
          accent: '#8b6f47',     // Marrom para destaques
        },

        text: {
          primary: '#171717',    // Texto principal (preto)
          secondary: '#525252',  // Texto secundário (cinza escuro)
          muted: '#737373',      // Texto suave (cinza)
          inverse: '#fafafa',    // Texto em fundos escuros (branco)
          accent: '#8b6f47',     // Texto de destaque (marrom)
        },

        border: {
          light: '#e5e5e5',      // Bordas claras
          medium: '#d4d4d4',     // Bordas médias
          dark: '#525252',       // Bordas escuras
          accent: '#8b6f47',     // Bordas de destaque
        },

        button: {
          primary: '#8b6f47',      // Botão principal (marrom)
          'primary-hover': '#6b5435', // Hover do botão principal
          secondary: '#f59e0b',    // Botão secundário (dourado)
          'secondary-hover': '#d97706', // Hover do botão secundário
          outline: '#8b6f47',      // Botão outline
          ghost: 'transparent',    // Botão fantasma
        },

        card: {
          background: '#fafafa',   // Fundo dos cards
          border: '#e5e5e5',      // Borda dos cards
          shadow: 'rgba(23, 23, 23, 0.1)', // Sombra dos cards
        },

        // Estados de interação
        hover: {
          light: '#f5f5f5',       // Hover claro
          medium: '#e5e5e5',      // Hover médio
          accent: '#6b5435',      // Hover de destaque
        },

        // Cores de status (se necessário)
        success: '#059669',       // Verde para sucesso
        warning: '#d97706',       // Dourado para avisos
        error: '#dc2626',         // Vermelho para erros
        info: '#0284c7',          // Azul para informações
      },

      fontFamily: {
        'display': ['Playfair Display', 'serif'], // Para títulos elegantes
        'body': ['Inter', 'sans-serif'],          // Para texto do corpo
      },

      boxShadow: {
        'barbershop': '0 4px 6px -1px rgba(23, 23, 23, 0.1), 0 2px 4px -1px rgba(23, 23, 23, 0.06)',
        'barbershop-lg': '0 10px 15px -3px rgba(23, 23, 23, 0.1), 0 4px 6px -2px rgba(23, 23, 23, 0.05)',
        'gold': '0 4px 6px -1px rgba(245, 158, 11, 0.2), 0 2px 4px -1px rgba(245, 158, 11, 0.1)',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      borderRadius: {
        'barbershop': '0.75rem',
      }
    },
  },
  plugins: [],
}
