import { Button } from '../Button';
import '../styles/user-actions.css';

export interface User {
    name: string;
}

export interface UserActionsProps {
    user?: User | null;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

const UserIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const LogoutIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);

const LoginIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
);

const SignupIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
);

export const UserActions = ({ user, onLogin, onLogout, onCreateAccount }: UserActionsProps) => {
    return (
        <div className="user-actions">
            {user ? (
                <div className="user-actions__logged-in">
                    <div className="user-actions__info">
                        <UserIcon />
                        <span className="user-actions__welcome">
                            Welcome, <b>{user.name}</b>!
                        </span>
                    </div>
                    <button
                        className="user-actions__button"
                        onClick={onLogout}
                        title="Log out"
                        aria-label="Log out current user"
                    >
                        <LogoutIcon />
                        <span>Log out</span>
                    </button>
                </div>
            ) : (
                <div className="user-actions__logged-out">
                    <button
                        className="user-actions__button user-actions__button--primary"
                        onClick={onCreateAccount}
                        title="Create new account"
                        aria-label="Create new account"
                    >
                        <SignupIcon />
                        <span>Sign up</span>
                    </button>
                    <button
                        className="user-actions__button"
                        onClick={onLogin}
                        title="Log in to existing account"
                        aria-label="Log in to existing account"
                    >
                        <LoginIcon />
                        <span>Log in</span>
                    </button>
                </div>
            )}
        </div>
    );
};
