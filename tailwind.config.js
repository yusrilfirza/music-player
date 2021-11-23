// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        colors: {
            main: {
                dark_green: {
                    DEFAULT: '#033936',
                    half: '#049289',
                    soft: '#06CDC1',
                },
                bold_gray: {
                    DEFAULT: '#080F15',
                    half: '#0B161F',
                    soft: '#181E1D',
                    lite: '#BCBCBC',
                },
            },
            blue_main: '#06CDC1',
            current: 'currentColor',
            transparent: 'transparent',
            black: colors.black,
            white: {
                DEFAULT: colors.white,
                80: 'rgba(255,255,255,0.8)',
                50: 'rgba(255,255,255,0.5)',
                30: 'rgba(255,255,255,0.3)',
                10: 'rgba(255,255,255,0.1)',
            },
            blue: colors.blue,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            tooltip: '#313E4F',
        },
        boxShadow: {
            xs: '0px 6px 10px rgba(24, 50, 115, 0.06)',
            sm: '0px 6px 10px rgba(24, 50, 115, 0.1)',
            default: '0px 6px 10px rgba(24, 50, 115, 0.2)',
            md: '2px 8px 20px rgba(24, 50, 115, 0.1)',
            lg: '2px 8px 20px rgba(24, 50, 115, 0.2)',
            xl: '2px 8px 25px rgba(24, 50, 115, 0.1)',
            inner: 'inset 2px 8px 25px rgba(24, 50, 115, 0.1)',
            outline: '0 0 0 3px rgba(24, 50, 115, 0.5)',
            thinOutline: '0 0 0 1px rgba(4, 20, 41, 0.8)',
            thin: '0 0 0 1px rgba(24, 50, 115, 1)',
            none: 'none',
            whiteOutline: '0 0 0 2px rgba(255, 255, 255, 0.6)',
        },
        rotate: {
            '-180': '-180deg',
            '-135': '-135deg',
            '-120': '-120deg',
            '-90': '-90deg',
            '-45': '-45deg',
            0: '0',
            45: '45deg',
            90: '90deg',
            120: '120deg',
            135: '135deg',
            180: '180deg',
        },
        extend: {
            screens: {
                print: { raw: 'print' },
            },
            transitionProperty: {
                height: 'height',
                width: 'width',
            },
        },
    },
    variants: {
        extend: {
            scale: ['active', 'group-hover'],
        },
    },
    plugins: [],
};
