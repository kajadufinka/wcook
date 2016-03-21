var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

livereload({ start: true });

gulp.task('default', function() {
   gulp.src('./css/styles.less')
      .pipe(watch('less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});