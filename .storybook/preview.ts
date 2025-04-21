import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';
import { withThemes } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    options: {
      storySort: {
        order: ['Introduction', 'Tokens', 'Typography', 'Components', 'Feedback'],
      },
    },
    docs: {
      theme: undefined,
    },
    accessibility: {
      element: '#root',
    },
  },

  decorators: [
    withThemes,
    (Story) => (
      <div className="p-4 font-sans bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all duration-300 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default preview;
