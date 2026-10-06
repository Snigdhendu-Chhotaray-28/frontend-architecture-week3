/**
 * Theme configuration for TaskFlow Design System.
 * Implemented using styled-components ThemeProvider.
 * Provides design tokens for colors, typography, spacing, breakpoints, shadows, and transitions.
 */

export const theme = {
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5', // Primary brand color
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    
    // Secondary / Accent Colors
    accent: {
      purple: '#8b5cf6',
      pink: '#ec4899',
      teal: '#14b8a6',
      cyan: '#06b6d4',
      amber: '#f59e0b',
    },

    // Status Colors
    status: {
      success: '#10b981',
      successLight: '#ecfdf5',
      successBorder: '#a7f3d0',
      warning: '#f59e0b',
      warningLight: '#fffbeb',
      warningBorder: '#fde68a',
      danger: '#ef4444',
      dangerLight: '#fef2f2',
      dangerBorder: '#fecaca',
      info: '#3b82f6',
      infoLight: '#eff6ff',
      infoBorder: '#bfdbfe',
    },

    // Priority Badges
    priority: {
      low: {
        bg: '#ecfdf5',
        text: '#047857',
        border: '#a7f3d0',
        dot: '#10b981',
      },
      medium: {
        bg: '#fffbeb',
        text: '#b45309',
        border: '#fde68a',
        dot: '#f59e0b',
      },
      high: {
        bg: '#fef2f2',
        text: '#b91c1c',
        border: '#fecaca',
        dot: '#ef4444',
      },
    },

    // Category Badges
    category: {
      Work: { bg: '#eef2ff', text: '#4338ca', border: '#c7d2fe' },
      Personal: { bg: '#fdf4ff', text: '#86198f', border: '#f5d0fe' },
      Learning: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
      Health: { bg: '#fff7ed', text: '#c2410c', border: '#ffedd5' },
      Finance: { bg: '#ecfeff', text: '#0e7490', border: '#cffafe' },
      General: { bg: '#f8fafc', text: '#334155', border: '#e2e8f0' },
    },

    // Neutral Grayscale & Surface colors
    surface: {
      body: '#f8fafc',
      card: '#ffffff',
      sidebar: '#ffffff',
      header: '#ffffff',
      modal: '#ffffff',
      subtle: '#f1f5f9',
      border: '#e2e8f0',
      borderLight: '#f1f5f9',
      borderDark: '#cbd5e1',
    },

    // Text hierarchy
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#64748b',
      light: '#94a3b8',
      white: '#ffffff',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      heading: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing Scale
  spacing: {
    1: '0.25rem', // 4px
    2: '0.5rem',  // 8px
    3: '0.75rem', // 12px
    4: '1rem',    // 16px
    5: '1.25rem', // 20px
    6: '1.5rem',  // 24px
    8: '2rem',    // 32px
    10: '2.5rem', // 40px
    12: '3rem',   // 48px
    16: '4rem',   // 64px
  },

  // Border Radii
  radii: {
    none: '0',
    sm: '0.375rem', // 6px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    '2xl': '1.25rem', // 20px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
    cardHover: '0 10px 25px -5px rgba(79, 70, 229, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)',
    modal: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    primaryGlow: '0 0 20px -3px rgba(79, 70, 229, 0.4)',
  },

  // Transitions
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.25s ease-in-out',
    slow: 'all 0.4s ease-in-out',
    bounce: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    wide: '1536px',
  },

  // Media Query Helper functions for styled-components
  media: {
    mobile: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px)',
    laptop: '@media (max-width: 1024px)',
    desktop: '@media (min-width: 1025px)',
    mobileAbove: '@media (min-width: 481px)',
    tabletAbove: '@media (min-width: 769px)',
  },

  // Z-indices
  zIndices: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};
