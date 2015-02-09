var gulp = require('gulp');
var config = require('../config').markupdist;

gulp.task('markup-dist', function() {
  return gulp.src(config.src)
    .pipe(gulp.dist(config.dist));
});
