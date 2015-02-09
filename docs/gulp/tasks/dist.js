var gulp = require('gulp');

gulp.task('dist', ['browserify-dist', 'markup-dist', 'less-dist', 'fonts-dist', 'muiFonts-dist']);
