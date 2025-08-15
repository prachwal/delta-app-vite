import { useState } from 'preact/hooks';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Content } from './components/Content';
import { Header } from './Header';
import './styles/index.css';

/** Simple page component */
export const Page = () => {
    const [user, setUser] = useState<{ name: string } | undefined>();

    return (
        <ThemeProvider>
            <article>
                <Header
                    user={user}
                    onLogin={() => setUser({ name: 'Jane Doe' })}
                    onLogout={() => setUser(undefined)}
                    onCreateAccount={() => setUser({ name: 'Jane Doe' })}
                />

                <div style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <ThemeToggle />
                </div>

                <Content className="storybook-page" />
            </article>
        </ThemeProvider>
    );
};