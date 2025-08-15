import type { Meta, StoryObj } from '@storybook/preact';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ padding: '20px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        showCurrent: {
            control: 'boolean',
            description: 'Whether to show the current theme name',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
    args: {
        showCurrent: false,
    },
};

export const WithCurrentTheme: Story = {
    args: {
        showCurrent: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Theme toggle with current theme display enabled',
            },
        },
    },
};

export const Interactive: Story = {
    args: {
        showCurrent: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive theme toggle - click the buttons to change themes',
            },
        },
    },
};