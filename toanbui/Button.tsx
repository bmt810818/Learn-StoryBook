// Button.tsx
import React from 'react';

type ButtonProps = {
    primary?: boolean;
    label: string;
};

export const Button: React.FC<ButtonProps> = ({ primary = false, label }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button className={`button ${mode}`}>
            {label}
        </button>
    );
};
