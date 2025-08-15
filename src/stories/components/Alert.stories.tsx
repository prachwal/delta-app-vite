import type { Meta, StoryObj } from '@storybook/preact';
import { Alert } from './Alert.tsx';
import type { AlertProps } from './Alert.tsx';

const meta: Meta<AlertProps> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Profesjonalny komponent Alert z obsługą różnych typów i możliwością zamknięcia.',
            },
        },
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
            description: 'Typ powiadomienia',
        },
        closable: {
            control: 'boolean',
            description: 'Czy Alert można zamknąć',
        },
        children: {
            control: 'text',
            description: 'Treść wiadomości',
        },
        icon: {
            control: false,
            description: 'Niestandardowa ikona',
        },
    },
};

export default meta;
type Story = StoryObj<AlertProps>;

export const InfoAlert: Story = {
    args: {
        children: 'To jest informacyjny Alert. Użyj go do przekazywania ważnych informacji użytkownikom.',
    },
};

export const SuccessAlert: Story = {
    args: {
        type: 'success',
        children: 'Operacja zakończyła się sukcesem! Twoje dane zostały zapisane poprawnie.',
    },
};

export const WarningAlert: Story = {
    args: {
        type: 'warning',
        children: 'Uwaga: Ta akcja może mieć nieodwracalne skutki. Upewnij się przed kontynuacją.',
    },
};

export const ErrorAlert: Story = {
    args: {
        type: 'error',
        children: 'Wystąpił błąd podczas przetwarzania żądania. Spróbuj ponownie później.',
    },
};

export const ClosableAlert: Story = {
    args: {
        type: 'info',
        closable: true,
        children: 'Ten Alert można zamknąć klikając w ikonę X po prawej stronie.',
    },
};

export const CustomIcon: Story = {
    args: {
        type: 'info',
        children: 'Alert z niestandardową ikoną.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
};