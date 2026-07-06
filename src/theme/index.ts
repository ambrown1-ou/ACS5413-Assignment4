// Design tokens for 2026 modern UI
// Light theme only; uses iOS-inspired soft grays and module-specific accent colors

export const colors = {
  // Backgrounds
  background: '#F2F2F7',      // Soft iOS gray
  surface: '#FFFFFF',         // Card/container backgrounds
  surfaceSecondary: '#F9F9FB', // Subtle secondary surfaces

  // Text
  text: {
    primary: '#000000',
    secondary: '#666666',
    tertiary: '#999999',
    inverse: '#FFFFFF',
  },

  // UI elements
  border: '#E0E0E0',
  divider: '#F0F0F0',
  shadow: 'rgba(0, 0, 0, 0.08)',

  // Module accents
  module: {
    Photos: '#6366F1',     // Indigo
    Music: '#EC4899',      // Pink
    Messages: '#10B981',   // Green
    Camera: '#64748B',     // Slate
    Calls: '#14B8A6',      // Teal
  },

  // Semantic
  inactive: '#D1D5DB',
  disabled: '#E5E7EB',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
};

export const typography = {
  h1: { fontSize: 32, fontWeight: '700' },
  h2: { fontSize: 28, fontWeight: '700' },
  h3: { fontSize: 24, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: '400' },
  bodyBold: { fontSize: 16, fontWeight: '600' },
  label: { fontSize: 14, fontWeight: '600' },
  caption: { fontSize: 12, fontWeight: '500' },
};
