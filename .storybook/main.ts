// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx|mdx)',  // Finds all story files
  ],
  addons: [
    '@storybook/addon-essentials',      // Includes actions, controls, docs, viewport, etc.
    '@storybook/addon-a11y',            // Accessibility testing
    '@storybook/addon-interactions',    // For user-event simulations
    '@storybook/addon-themes',          // Theme switching
    '@storybook/addon-mdx-gfm'          // GitHub-flavored MDX support
  ],
  staticDirs: ['../public'], // Makes public assets available to Storybook
  docs: {
    autodocs: 'tag',
  }
};

export default config;
