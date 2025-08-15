import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/stories/styles/index.css';

const preview = {
  parameters: {
    backgrounds: {
      options: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;