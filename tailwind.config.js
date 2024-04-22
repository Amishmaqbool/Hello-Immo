/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            xs: '1.125rem',
            xsm: '1.25rem',
            sm: '1.375rem',
            base: '1.5rem',
            medium: '1.75rem',
            lg: '2.25rem',
            xl: '2.5rem',
            '2xl': '2.75rem',
            '3xl': '3.5rem'
        },
        extend: {
            colors: {
                primary: '#F4F4F4',
                blue: '#034465',
                red: '#D10909',
                darkblue: '#023047',
                SteelBlueGray: '#7b96a7',
                SilverSmoke: '#e1e5e7',
                SlateGray: '#7f939e',
                BlueStone: '#80939f'
            }
        }
    },
    plugins: []
};
