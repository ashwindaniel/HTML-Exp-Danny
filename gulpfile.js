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
    // .pipe(jshint.reporter('fail'));
    console.log(js);
    // if (js.jshint.success) {
    //     gulp.src('Source/js/**/*.js')
    //         .pipe(gulp.dest('Final/js'));
    // }
    // else {
    //     console.log("Error in js files");
    // }
    return js;
});

gulp.task('jscopy', function () {
    gulp.src('Source/js/**/*.js')
        .pipe(gulp.dest('Final/js'))
});

gulp.task('default', ['sass', 'jshint', 'jscopy'], function () {
    console.log("Starting build!");
});