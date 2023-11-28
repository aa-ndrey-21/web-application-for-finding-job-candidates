import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                customColor: '#374151',
                customColor100: '#768bad',
                customColor700: '#1f252e',
                greenColor: '#445340',
                greenColor100: '#91b089',
                greenColor700: '#2a3327',
                
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },

    plugins: [forms],
};
