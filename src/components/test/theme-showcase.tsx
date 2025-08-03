'use client';

import React from 'react';
import { buttonStyles, cardStyles } from '@/lib/theme-config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'error'
        | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const classes = [
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        className,
    ].join(' ');

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

interface CardProps {
    children: React.ReactNode;
    padding?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    padding = 'md',
    className = '',
}) => {
    const classes = [
        cardStyles.base,
        cardStyles.padding[padding],
        className,
    ].join(' ');

    return <div className={classes}>{children}</div>;
};

export const ThemeShowcase: React.FC = () => {
    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Theme Showcase
                </h2>
            </div>

            {/* Color Palette */}
            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Color Palette
                </h3>
                <div className="space-y-4">
                    {/* Primary Colors */}
                    <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Primary
                        </h4>
                        <div className="flex space-x-2">
                            {[
                                50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
                            ].map(shade => (
                                <div
                                    key={shade}
                                    className={`w-12 h-12 rounded-md bg-primary-${shade} flex items-center justify-center text-xs font-medium ${
                                        shade >= 500
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {shade}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Colors */}
                    <div>
                        <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Secondary
                        </h4>
                        <div className="flex space-x-2">
                            {[
                                50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
                            ].map(shade => (
                                <div
                                    key={shade}
                                    className={`w-12 h-12 rounded-md bg-secondary-${shade} flex items-center justify-center text-xs font-medium ${
                                        shade >= 500
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {shade}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Status Colors */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Success
                            </h4>
                            <div className="flex space-x-1">
                                {[400, 500, 600].map(shade => (
                                    <div
                                        key={shade}
                                        className={`w-8 h-8 rounded bg-success-${shade}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Warning
                            </h4>
                            <div className="flex space-x-1">
                                {[400, 500, 600].map(shade => (
                                    <div
                                        key={shade}
                                        className={`w-8 h-8 rounded bg-warning-${shade}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Error
                            </h4>
                            <div className="flex space-x-1">
                                {[400, 500, 600].map(shade => (
                                    <div
                                        key={shade}
                                        className={`w-8 h-8 rounded bg-error-${shade}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Button Variants */}
            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Button Variants
                </h3>
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="error">Error</Button>
                        <Button variant="outline">Outline</Button>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center">
                        <Button variant="primary" size="sm">
                            Small
                        </Button>
                        <Button variant="primary" size="md">
                            Medium
                        </Button>
                        <Button variant="primary" size="lg">
                            Large
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Typography */}
            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Typography Scale
                </h3>
                <div className="space-y-2">
                    <div className="text-6xl font-bold text-gray-900 dark:text-white">
                        Heading 1
                    </div>
                    <div className="text-5xl font-bold text-gray-900 dark:text-white">
                        Heading 2
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        Heading 3
                    </div>
                    <div className="text-3xl font-semibold text-gray-900 dark:text-white">
                        Heading 4
                    </div>
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Heading 5
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                        Heading 6
                    </div>
                    <div className="text-base text-gray-700 dark:text-gray-300">
                        Body text - Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Small text - Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                        Extra small text - Duis aute irure dolor in
                        reprehenderit.
                    </div>
                </div>
            </Card>

            {/* Shadows */}
            <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Shadow Examples
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                        Small
                    </div>
                    <div className="h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                        Medium
                    </div>
                    <div className="h-20 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                        Large
                    </div>
                    <div className="h-20 bg-white dark:bg-gray-700 rounded-lg shadow-xl flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                        Extra Large
                    </div>
                    <div className="h-20 bg-white dark:bg-gray-700 rounded-lg shadow-2xl flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                        2X Large
                    </div>
                </div>
            </Card>
        </div>
    );
};
