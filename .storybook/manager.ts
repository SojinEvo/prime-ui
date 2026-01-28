import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const primeUiTheme = create({
  base: 'light',
  brandTitle: 'PrimeUI',
  brandUrl: '#',
  colorPrimary: '#6366f1',
  colorSecondary: '#4f46e5',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 6,
  textColor: '#1f2937',
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7280',
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  fontCode: 'monospace',
});

addons.setConfig({
  theme: primeUiTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  panelPosition: 'bottom',
  enableShortcuts: true,
});
