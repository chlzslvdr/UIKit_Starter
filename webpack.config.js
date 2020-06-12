const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@src': path.join(__dirname, '../src'),
      '@components': path.join(__dirname, '../src/components'),
      '@scss': path.join(__dirname, '../src/scss'),
      '@modules': path.join(__dirname, '../src/modules'),
    },
  },
};
