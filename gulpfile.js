var gulp       = require('gulp'),
    stylus     = require('gulp-stylus'),
    rename     = require('gulp-rename');

gulp.task('stylus', function () {
  return gulp.src('./stylesheets/index.styl')
    .pipe(stylus())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function(){
  gulp.watch('./stylesheets/*.styl', ['stylus']);
});


gulp.task('default', ['stylus', 'watch']);