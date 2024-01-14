import type { Theme } from '@staticcms/core';

export const DARK_THEME: Theme = {
  name: 'Dark',
  common: {
    gray: '#737373',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    main: '#262626',
    light: '#404040',
    dark: '#171717',
    divider: '#525252',
  },
  scrollbar: {
    main: '#1e293b',
    light: '#2c3b55',
  },
  primary: {
    main: '#2563eb',
    light: '#262626',
    dark: '#1d4ed8',
    contrastColor: '#e5e5e5',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastColor: '#450a0a',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastColor: '#451a03',
  },
  info: {
    main: '#262626',
    light: '#525252',
    dark: '#262626',
    contrastColor: '#737373',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastColor: '#052e16',
  },
  codemirror: {
    theme: 'dark',
  },
};

export const LIGHT_THEME: Theme = {
  name: 'Light',
  common: {
    gray: '#d1d5db',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#f8fafc',
    divider: '#94a3b8',
  },
  scrollbar: {
    main: 'rgba(100, 116, 139, .25)',
    light: 'rgba(100, 116, 139, .25)',
  },
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastColor: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastColor: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastColor: '#ffffff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastColor: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastColor: '#ffffff',
  },
  codemirror: {
    theme: 'light',
  },
};

export const DEFAULT_THEMES: Theme[] = [DARK_THEME, LIGHT_THEME];
