import type { StoryObj } from '@storybook/preact';
import { fn } from 'storybook/test';

import { Header, type HeaderProps } from './Header';
import './styles/index.css';

export default {
    title: 'Example/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
};

type Story = StoryObj<HeaderProps>;

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};

export const LoggedOut: Story = {};