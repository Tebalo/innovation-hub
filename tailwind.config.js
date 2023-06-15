/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: ({ theme }) => ({
        orange: {
          css: {
            '--tw-prose-body': theme('colors.orange[500]'),
            '--tw-prose-headings': theme('colors.orange[900]'),
            '--tw-prose-lead': theme('colors.orange[500]'),
            '--tw-prose-links': theme('colors.orange[600]'),
            '--tw-prose-bold': theme('colors.orange[900]'),
            '--tw-prose-counters': theme('colors.orange[500]'),
            '--tw-prose-bullets': theme('colors.orange[500]'),
            '--tw-prose-hr': theme('colors.orange[200]'),
            '--tw-prose-quotes': theme('colors.orange[900]'),
            '--tw-prose-quote-borders': theme('colors.orange[300]'),
            '--tw-prose-captions': theme('colors.orange[700]'),
            '--tw-prose-code': theme('colors.orange[900]'),
            '--tw-prose-code-bg': theme('colors.orange[50]'),
            '--tw-prose-pre-code': theme('colors.orange[100]'),
            '--tw-prose-pre-bg': theme('colors.orange[900]'),
            '--tw-prose-th-borders': theme('colors.orange[300]'),
            '--tw-prose-td-borders': theme('colors.orange[200]'),
            '--tw-format-th-bg': theme('colors.orange[50]'),
            '--tw-prose-invert-body': theme('colors.orange[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.orange[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.orange[400]'),
            '--tw-prose-invert-bullets': theme('colors.orange[600]'),
            '--tw-prose-invert-hr': theme('colors.orange[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.orange[700]'),
            '--tw-prose-invert-captions': theme('colors.orange[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.orange[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.orange[600]'),
            '--tw-prose-invert-td-borders': theme('colors.orange[700]'),
            '--tw-format-invert-th-bg': theme('colors.orange[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
}
