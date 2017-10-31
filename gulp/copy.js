const gulp = require('gulp');

const gulpCopy = require('gulp-copy');
const sourceFiles = ['/*', 'css/normalize.css'];
const destination = '/dist/';


gulp.task('copy-normalize-css', function() {
    return gulp.src('app/css/normalize.css')
    .pipe(gulp.dest('dist/css'));
  });

gulp.task('copy-ru-folder',  function() {
    return gulp.src('app/ru/*.html')
    .pipe(gulp.dest('dist/ru/'));
  });


  gulp.task('copy-fonts', function () {
    return gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
  });

gulp.task('copy', ['copy-normalize-css', 'copy-fonts'], function() {

  });