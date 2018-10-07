const Typography = require('typography');

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'IBM Plex Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 1.75,
  headerFontFamily: [
    'Roboto Mono',
    'monospace',
  ],
  bodyFontFamily: [
    'IBM Plex Sans',
    'sans-serif',
  ],
});

module.exports = typography;
