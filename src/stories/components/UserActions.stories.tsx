import type { Meta, StoryObj } from '@storybook/preact';
import type { UserActionsProps } from './UserActions';
import { UserActions } from './UserActions';

const meta: Meta<typeof UserActions> = {
    title: 'Components/UserActions',
    component: UserActions,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        user: {
            control: 'object',
            description: 'User object or null if not logged in',
        },
        onLogin: { action: 'login clicked' },
        onLogout: { action: 'logout clicked' },
        onCreateAccount: { action: 'create account clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof UserActions>;

export const LoggedOut: Story = {
    args: {
        user: null,
    } as Partial<UserActionsProps>,
};

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'John Doe',
        },
    } as Partial<UserActionsProps>,
};

export const WithCustomUser: Story = {
    args: {
        user: {
            name: 'Alice Smith',
        },
    } as Partial<UserActionsProps>,
};

export const Interactive: Story = {
    args: {
        user: null,
    } as Partial<UserActionsProps>,
    parameters: {
        docs: {
            description: {
                story: 'Interactive UserActions component - click the buttons to see actions logged',
            },
        },
    },
};