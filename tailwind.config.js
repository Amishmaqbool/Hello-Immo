/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            sm: '1.375rem',
            medium: '1.75rem',
            large: '2.5rem',
            xlarge: '2.75rem',
            xxlarge: '3.5rem'
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
