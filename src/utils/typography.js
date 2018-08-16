import Typography from 'typography';

require('typeface-roboto-mono');
require('typeface-ibm-plex-sans');

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Roboto Mono',
    'monospace',
  ],
  bodyFontFamily: [
    'IBM Plex Sans',
    'sans-serif',
  ],
});

export default typography;
