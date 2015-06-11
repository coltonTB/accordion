var gulp       = require('gulp'),
    stylus     = require('gulp-stylus'),
    rename     = require('gulp-rename'),
    handlebars = require('gulp-handlebars'),
    wrap       = require('gulp-wrap'),
    declare    = require('gulp-declare'),
    concat     = require('gulp-concat');

gulp.task('stylus', function () {
  return gulp.src('./stylesheets/index.styl')
    .pipe(stylus())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./build'))
});

gulp.task('watch', function(){
  gulp.watch('./stylesheets/*.styl', ['stylus']);
});


gulp.task('default', ['stylus']);