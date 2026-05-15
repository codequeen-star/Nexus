/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Color system: semantic color palette
      colors: {
        // Primary brand color - Blue
        primary: {
          25: '#F8FAFC',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Secondary brand color - Teal
        secondary: {
          25: '#F0FDFA',
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        // Accent color - Amber
        accent: {
          25: '#FFFBEB',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        // Semantic colors
        success: {
          25: '#F0FDF4',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#145231',
        },
        warning: {
          25: '#FFFBEB',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        error: {
          25: '#FEF2F2',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Neutral grayscale
        neutral: {
          25: '#FAFAFA',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      // Typography system
      fontSize: {
        // Display sizes for headings
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        // Heading sizes
        'heading-lg': ['2rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-xs': ['1.125rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0' }],
        // Body text sizes
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0' }],
        // Label sizes
        'label-lg': ['1rem', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0' }],
        'label-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0' }],
        'label-sm': ['0.75rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.5px' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        'extra-tight': '1.1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      fontFamily: {
        sans: ['Inter', 'Inter var', 'sans-serif'],
      },
      // Spacing scale
      spacing: {
        0: '0px',
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        7: '1.75rem', // 28px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        14: '3.5rem', // 56px
        16: '4rem', // 64px
        20: '5rem', // 80px
        24: '6rem', // 96px
        28: '7rem', // 112px
        32: '8rem', // 128px
      },
      // Responsive grid
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
        'layout-2': '1fr 2fr',
        'layout-3': '1fr 1fr 1fr',
        'sidebar': '16rem 1fr',
        'sidebar-lg': '20rem 1fr',
      },
      gridAutoRows: {
        'auto': 'auto',
        'dense': 'auto',
      },
      // Shadow system
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      // Border radius
      borderRadius: {
        none: '0',
        xs: '0.25rem',
        sm: '0.375rem',
        base: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      // Transitions
      transitionDuration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-out',
        'bounce-light': 'bounceLight 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      // Custom utilities for responsive typography
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, theme }) {
      // Typography variants
      addBase({
        '@layer components': {
          '.text-display-lg': {
            '@apply text-display-lg': {},
          },
          '.text-display-md': {
            '@apply text-display-md': {},
          },
          '.text-display-sm': {
            '@apply text-display-sm': {},
          },
          '.text-heading-lg': {
            '@apply text-heading-lg': {},
          },
          '.text-heading-md': {
            '@apply text-heading-md': {},
          },
          '.text-heading-sm': {
            '@apply text-heading-sm': {},
          },
          '.text-heading-xs': {
            '@apply text-heading-xs': {},
          },
          '.text-body-lg': {
            '@apply text-body-lg': {},
          },
          '.text-body-md': {
            '@apply text-body-md': {},
          },
          '.text-body-sm': {
            '@apply text-body-sm': {},
          },
          '.text-body-xs': {
            '@apply text-body-xs': {},
          },
          '.text-label-lg': {
            '@apply text-label-lg': {},
          },
          '.text-label-md': {
            '@apply text-label-md': {},
          },
          '.text-label-sm': {
            '@apply text-label-sm': {},
          },
        },
      });
    },
  ],
};