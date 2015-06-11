var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

var path = {
    LESS: 'src/*.less',
    OUT_CSS: 'rsa.min.css',
    DEST_CSS: './'
};

gulp.task('build-less', function() {
  return gulp.src(path.LESS)
    .pipe(less())
    .pipe(concat(path.OUT_CSS))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.DEST_CSS));    
});

gulp.task('default', ['build-less']);
