function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  mode: 'jit',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        background: withOpacityValue('--color-background'),
        foreground: withOpacityValue('--color-foreground'),
        primary: withOpacityValue('--color-primary'),
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

      typography: ({ theme }) => {
        console.log(theme);
        console.log(theme('colors'));
        console.log(theme('colors.foreground'));
        return {
          foreground: {
            css: {
              '--tw-prose-body': theme('colors.foreground'),
              '--tw-prose-headings': theme('colors.foreground'),
              '--tw-prose-lead': theme('colors.foreground'),
              '--tw-prose-links': theme('colors.foreground'),
              '--tw-prose-bold': theme('colors.foreground'),
              '--tw-prose-counters': theme('colors.foreground'),
              '--tw-prose-bullets': theme('colors.foreground'),
              '--tw-prose-hr': theme('colors.foreground'),
              '--tw-prose-quotes': theme('colors.foreground'),
              '--tw-prose-quote-borders': theme('colors.foreground'),
              '--tw-prose-captions': theme('colors.foreground'),
              '--tw-prose-code': theme('colors.foreground'),
              '--tw-prose-pre-code': theme('colors.foreground'),
              '--tw-prose-pre-bg': theme('colors.foreground'),
              '--tw-prose-th-borders': theme('colors.foreground'),
              '--tw-prose-td-borders': theme('colors.foreground'),
              '--tw-prose-invert-body': theme('colors.foreground'),
              '--tw-prose-invert-headings': theme('colors.white'),
              '--tw-prose-invert-lead': theme('colors.foreground'),
              '--tw-prose-invert-links': theme('colors.white'),
              '--tw-prose-invert-bold': theme('colors.white'),
              '--tw-prose-invert-counters': theme('colors.foreground'),
              '--tw-prose-invert-bullets': theme('colors.foreground'),
              '--tw-prose-invert-hr': theme('colors.foreground'),
              '--tw-prose-invert-quotes': theme('colors.foreground'),
              '--tw-prose-invert-quote-borders': theme('colors.foreground'),
              '--tw-prose-invert-captions': theme('colors.foreground'),
              '--tw-prose-invert-code': theme('colors.white'),
              '--tw-prose-invert-pre-code': theme('colors.foreground'),
              '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
              '--tw-prose-invert-th-borders': theme('colors.foreground'),
              '--tw-prose-invert-td-borders': theme('colors.foreground'),
            },
          },
        };
      },
    },
  },
};
