import type { StoryObj } from '@storybook/preact';
import { userEvent, within } from 'storybook/test';

import { Page } from './Page';
import './styles/index.css';

export default {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', {
            name: /Log in/i,
        });
        await userEvent.click(loginButton);
    },
};