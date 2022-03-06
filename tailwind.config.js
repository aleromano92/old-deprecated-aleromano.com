// function withOpacityValue(variable) {
//   return ({ opacityValue }) => {
//     if (opacityValue === undefined) {
//       return `rgb(var(${variable}))`;
//     }
//     return `rgb(var(${variable}) / ${opacityValue})`;
//   };
// }

module.exports = {
  mode: 'jit',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        background: {
          50: '#EAE6F5',
          100: '#D8D0EC',
          200: '#B2A1D8',
          300: '#886FC3',
          400: '#6446A9',
          500: '#49337B',
          600: '#422E70',
          700: '#3C2A65',
          800: '#37275E',
          900: '#312253',
        },
        foreground: {
          50: '#FFF2B3',
          100: '#FFF1AD',
          200: '#FFF0A3',
          300: '#FFEF9E',
          400: '#FFED94',
          500: '#FFEB89',
          600: '#FFE45C',
          700: '#FFDB29',
          800: '#FAD000',
          900: '#C7A600',
        },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      typography: ({ theme }) => ({
        aleromano: {
          css: {
            '--tw-prose-body': theme('colors.background[500]'),
            '--tw-prose-headings': theme('colors.background[700]'),
            '--tw-prose-lead': theme('colors.background[600]'),
            '--tw-prose-links': theme('colors.background[600]'),
            '--tw-prose-bold': theme('colors.background[700]'),
            '--tw-prose-counters': theme('colors.background[600]'),
            '--tw-prose-bullets': theme('colors.background[400]'),
            '--tw-prose-hr': theme('colors.background[300]'),
            '--tw-prose-quotes': theme('colors.background[600]'),
            '--tw-prose-quote-borders': theme('colors.background[300]'),
            '--tw-prose-captions': theme('colors.background[700]'),
            '--tw-prose-code': theme('colors.background[800]'),
            '--tw-prose-pre-code': theme('colors.background[100]'),
            '--tw-prose-pre-bg': theme('colors.background[700]'),
            '--tw-prose-th-borders': theme('colors.background[300]'),
            '--tw-prose-td-borders': theme('colors.background[200]'),
            '--tw-prose-invert-body': theme('colors.foreground[500]'),
            '--tw-prose-invert-headings': theme('colors.foreground[700]'),
            '--tw-prose-invert-lead': theme('colors.foreground[600]'),
            '--tw-prose-invert-links': theme('colors.foreground[600]'),
            '--tw-prose-invert-bold': theme('colors.foreground[700]'),
            '--tw-prose-invert-counters': theme('colors.foreground[600]'),
            '--tw-prose-invert-bullets': theme('colors.foreground[400]'),
            '--tw-prose-invert-hr': theme('colors.foreground[300]'),
            '--tw-prose-invert-quotes': theme('colors.foreground[600]'),
            '--tw-prose-invert-quote-borders': theme('colors.foreground[300]'),
            '--tw-prose-invert-captions': theme('colors.foreground[700]'),
            '--tw-prose-invert-code': theme('colors.foreground[800]'),
            '--tw-prose-invert-pre-code': theme('colors.foreground[100]'),
            '--tw-prose-invert-pre-bg': theme('colors.foreground[700]'),
            '--tw-prose-invert-th-borders': theme('colors.foreground[300]'),
            '--tw-prose-invert-td-borders': theme('colors.foreground[200]'),
          },
        },
      }),
    },
  },
};
