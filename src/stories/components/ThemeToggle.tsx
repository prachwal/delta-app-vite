import { useTheme } from '../contexts/ThemeContext';

const SunIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const SystemIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

export const ThemeToggle = ({ showCurrent = false }: { showCurrent?: boolean }) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    return (
        <div className="theme-toggle">
            <button
                className={`theme-toggle__button ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                title="Light theme"
                aria-label="Switch to light theme"
            >
                <SunIcon />
            </button>

            <button
                className={`theme-toggle__button ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                title="Dark theme"
                aria-label="Switch to dark theme"
            >
                <MoonIcon />
            </button>

            <button
                className={`theme-toggle__button ${theme === 'system' ? 'active' : ''}`}
                onClick={() => setTheme('system')}
                title="System theme"
                aria-label="Use system theme"
            >
                <SystemIcon />
            </button>

            {showCurrent && (
                <span className="theme-toggle__current">
                    {theme === 'system' ? `System (${resolvedTheme})` : theme}
                </span>
            )}
        </div>
    );
};