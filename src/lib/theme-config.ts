// Custom theme utilities and component styles
// This file demonstrates how to use the custom theme variables

export const themeConfig = {
    colors: {
        primary: {
            50: 'rgb(var(--color-primary-50))',
            100: 'rgb(var(--color-primary-100))',
            200: 'rgb(var(--color-primary-200))',
            300: 'rgb(var(--color-primary-300))',
            400: 'rgb(var(--color-primary-400))',
            500: 'rgb(var(--color-primary-500))',
            600: 'rgb(var(--color-primary-600))',
            700: 'rgb(var(--color-primary-700))',
            800: 'rgb(var(--color-primary-800))',
            900: 'rgb(var(--color-primary-900))',
            DEFAULT: 'rgb(var(--color-primary))',
        },
        secondary: {
            50: 'rgb(var(--color-secondary-50))',
            100: 'rgb(var(--color-secondary-100))',
            200: 'rgb(var(--color-secondary-200))',
            300: 'rgb(var(--color-secondary-300))',
            400: 'rgb(var(--color-secondary-400))',
            500: 'rgb(var(--color-secondary-500))',
            600: 'rgb(var(--color-secondary-600))',
            700: 'rgb(var(--color-secondary-700))',
            800: 'rgb(var(--color-secondary-800))',
            900: 'rgb(var(--color-secondary-900))',
            DEFAULT: 'rgb(var(--color-secondary))',
        },
        success: {
            50: 'rgb(var(--color-success-50))',
            100: 'rgb(var(--color-success-100))',
            200: 'rgb(var(--color-success-200))',
            300: 'rgb(var(--color-success-300))',
            400: 'rgb(var(--color-success-400))',
            500: 'rgb(var(--color-success-500))',
            600: 'rgb(var(--color-success-600))',
            700: 'rgb(var(--color-success-700))',
            800: 'rgb(var(--color-success-800))',
            900: 'rgb(var(--color-success-900))',
            DEFAULT: 'rgb(var(--color-success))',
        },
        warning: {
            50: 'rgb(var(--color-warning-50))',
            100: 'rgb(var(--color-warning-100))',
            200: 'rgb(var(--color-warning-200))',
            300: 'rgb(var(--color-warning-300))',
            400: 'rgb(var(--color-warning-400))',
            500: 'rgb(var(--color-warning-500))',
            600: 'rgb(var(--color-warning-600))',
            700: 'rgb(var(--color-warning-700))',
            800: 'rgb(var(--color-warning-800))',
            900: 'rgb(var(--color-warning-900))',
            DEFAULT: 'rgb(var(--color-warning))',
        },
        error: {
            50: 'rgb(var(--color-error-50))',
            100: 'rgb(var(--color-error-100))',
            200: 'rgb(var(--color-error-200))',
            300: 'rgb(var(--color-error-300))',
            400: 'rgb(var(--color-error-400))',
            500: 'rgb(var(--color-error-500))',
            600: 'rgb(var(--color-error-600))',
            700: 'rgb(var(--color-error-700))',
            800: 'rgb(var(--color-error-800))',
            900: 'rgb(var(--color-error-900))',
            DEFAULT: 'rgb(var(--color-error))',
        },
    },
    spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
    },
    borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
    },
    boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
    },
    fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
    },
    lineHeight: {
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
    },
    transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
    },
};

// Example component styles using the theme
export const buttonStyles = {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
        primary:
            'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary:
            'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus:ring-secondary-500',
        success:
            'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500',
        warning:
            'bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500',
        error: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500',
        outline:
            'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500',
    },
    sizes: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    },
};

export const cardStyles = {
    base: 'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700',
    padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    },
};

export const inputStyles = {
    base: 'block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500',
    sizes: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
    },
    states: {
        error: 'border-error-300 focus:border-error-500 focus:ring-error-500',
        success:
            'border-success-300 focus:border-success-500 focus:ring-success-500',
    },
};
