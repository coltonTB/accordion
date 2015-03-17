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
    .pipe(gulp.dest('.'))
});

gulp.task('templates', function() {
  gulp.src('./templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(fileName.split('.')[0]);
        }
      }
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  gulp.watch('./stylesheets/*.styl', ['stylus']);
  gulp.watch('./templates/*.hbs', ['templates']);
});


gulp.task('default', ['stylus', 'templates', 'watch']);