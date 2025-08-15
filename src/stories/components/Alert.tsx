import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
    children?: ComponentChildren;
    type?: AlertType;
    closable?: boolean;
    onClose?: () => void;
    className?: string;
    icon?: ComponentChildren;
}

const defaultIcons: Record<AlertType, string> = {
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z',
    success: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2V7h2v7z',
    error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
};

export const Alert = ({
    children,
    type = 'info',
    closable = false,
    onClose,
    className = '',
    icon
}: AlertProps) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    const alertClasses = `alert alert--${type} ${className}`.trim();
    const iconContent = icon || (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="alert__icon"
        >
            <path d={defaultIcons[type]} />
        </svg>
    );

    return (
        <div className={alertClasses} role="alert">
            <div className="alert__content">
                <div className="alert__icon-wrapper">
                    {iconContent}
                </div>
                <div className="alert__message">
                    {children}
                </div>
                {closable && (
                    <button
                        className="alert__close"
                        onClick={handleClose}
                        aria-label="Zamknij powiadomienie"
                        type="button"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};