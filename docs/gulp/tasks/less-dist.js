var gulp = require('gulp'),
  less = require('gulp-less'),
//  sourcemaps = require('gulp-sourcemaps'),
  minifyCSS =require('gulp-minify-css'),
  handleErrors = require('../util/handleErrors'),
  autoprefixer = require('gulp-autoprefixer'),
  config = require('../config').lessdist;

gulp.task('less-dist', function() {
  return gulp.src(config.src)
    //.pipe(sourcemaps.init())
    .pipe(less())
    .on('error', handleErrors)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    //.pipe(sourcemaps.write())
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dist(config.dist));
});
