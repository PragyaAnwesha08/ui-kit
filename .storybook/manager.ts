import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Design System',
    brandUrl: 'https://github.com/pragyaanwesha',
    brandImage: '', // Add logo path here if needed
    base: 'light',
  },
  panelPosition: 'bottom',
  enableShortcuts: true,
  showNav: true,
  showPanel: true,
});
