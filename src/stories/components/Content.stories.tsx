import type { Meta, StoryObj } from '@storybook/preact';
import { Content } from './Content';
import type { ContentProps } from './Content';
const meta: Meta<ContentProps> = {
    title: 'Components/Content',
    component: Content,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply to the content section',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Content>;

export const Default: Story = {
    args: {},
};

export const WithCustomClass: Story = {
    args: {
        className: 'custom-content-class',
    },
};

export const Centered: Story = {
    args: {
        className: 'centered-content',
    },
    parameters: {
        docs: {
            description: {
                story: 'Content component with centered styling applied via className prop',
            },
        },
    },
};