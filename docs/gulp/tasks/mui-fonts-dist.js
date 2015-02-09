var gulp = require('gulp');
var config = require('../config').muiFontsdist;

gulp.task('muiFonts-dist', function() {
  return gulp.src(config.src)
    .pipe(gulp.dist(config.dist));
});
