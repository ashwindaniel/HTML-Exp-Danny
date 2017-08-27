var gulp = require('gulp');
var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('sass', function () {
    console.log("Converting scss to css");
    var css = gulp.src('Source/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('Source/css'));
    console.log("Conversion complete");
    return css;
});

gulp.task('jshint', function () {

    var js = gulp.src('Source/js/controller/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
    return js;
});

gulp.task('jscopy', function () {
    gulp.src('Source/js/**/*.js')
        .pipe(gulp.dest('Final/js'));
});

gulp.task('watching', function () {
    gulp.watch('Source/js/controller/**/*.js', ['jshint', 'jscopy']);
});

gulp.task('default', ['sass', 'watching'], function () {
});