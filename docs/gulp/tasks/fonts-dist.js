var gulp = require('gulp');
var config = require('../config').fontsdist;

gulp.task('fonts-dist', function() {
  return gulp.src(config.src)
    .pipe(gulp.dist(config.dist));
});
