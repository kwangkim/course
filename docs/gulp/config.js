var
  dist= './dist',
  dest = './build',
  src = './src',
  mui = '../src';


module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**',
      mui + '/less/**'
    ],
    dest: dest
  },
  lessdist: {
    src: src + '/less/main.less',
    dist: dist
  },
  markupdist: {
    src: src + "/www/**",
    dist: dist
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  fonts: {
    src: mui + '/less/material-design-fonticons/fonts/**',
    dest: dest + '/fonts/mdfonticon'
  },
  fontsdist: {
    src: mui + '/less/material-design-fonticons/fonts/**',
    dist: dist + '/fonts/mdfonticon'
  },
  muiFonts: {
    src: mui + '/less/material-ui-icons/fonts/**',
    dest: dest + '/fonts'
  },
  muiFontsdist: {
    src: mui + '/less/material-ui-icons/fonts/**',
    dist: dist + '/fonts'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
  browserifydist: {
    // Enable source maps
    debug: false,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dist: dist,
      outputName: 'app.js'
    }]
  }
};
