var gulp = require('gulp');
var gulputil = require('gulp-util');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('jshint', function() {
    console.log("Start linting");
    var js = gulp.src('Source/js/controller/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
    console.log("End linting");
    return js;
});

gulp.task('jscopy', function() {
    console.log("Start copying javascripts");
    var js = gulp.src('Source/js/controller/*.js')
        .pipe(concat('myapp.js'))
        .pipe(minify({
            ext: {
                src: '-src.js',
                min: '-min.js'
            }
        }))
        .pipe(gulp.dest('Source/js/min'));
    js = gulp.src('Source/js/min/myapp-min.js')
        .pipe(uglify())
        .pipe(gulp.dest('Final/js'));
    console.log("End copying javascripts");
    return js;
});


gulp.task('sass', function() {
    console.log("Converting scss to css");
    var css = gulp.src('Source/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('Source/css/custom'))
        .pipe(browserSync.stream());
    console.log("Conversion complete");
    return css;
});

gulp.task('csscopy', function() {
    console.log("Copying css start");
    var css = gulp.src('Source/css/custom/**/*.css')
        .pipe(concat('mystyle.css'))
        .pipe(gulp.dest('Source/css/min'));
    css = gulp.src('Source/css/min/mystyle.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('Final/css'));
    console.log("Copying css end");
    return css;
});


gulp.task('watching', function() {

    gulp.watch('Final/**/*').on('change', browserSync.reload);

    gulp.watch('Source/js/controller/**/*.js', ['jshint', 'jscopy']);

    gulp.watch('Source/scss/*.scss', ['sass', 'csscopy']);

    gulp.watch('Source/index.html', function() {
        console.log("Index.html updated");
        gulp.src('Source/index.html')
            .pipe(gulp.dest('Final'));
    });

    gulp.watch('Source/js/dependencies/**/*', function() {
        console.log("JS Dependencies updated");
        gulp.src('Source/js/dependencies/**/*')
            .pipe(gulp.dest('Final/js/dependencies'));
    });

    gulp.watch('Source/css/dependencies/**/*', function() {
        console.log("CSS Dependencies updated");
        gulp.src('Source/css/dependencies/**/*')
            .pipe(gulp.dest('Final/css/dependencies'));
    });

    gulp.watch('Source/img/**/*', function() {
        console.log("Images folder updated");
        gulp.src('Source/img/**/*')
            .pipe(gulp.dest('Final/img'));
    });

    gulp.watch('Source/pages/**/*', function() {
        console.log("HTML Pages updated");
        gulp.src('Source/pages/**/*')
            .pipe(gulp.dest('Final/pages'));
    });


});

gulp.task('build', ['jscopy', 'csscopy'], function() {
    console.log("Init Browser-sync");
    browserSync.init({
        server: "./Final"
    });

    console.log("Starting initial setup");

    gulp.src('Source/index.html')
        .pipe(gulp.dest('Final'));

    gulp.src('Source/js/dependencies/**/*')
        .pipe(gulp.dest('Final/js/dependencies'));

    gulp.src('Source/css/dependencies/**/*')
        .pipe(gulp.dest('Final/css/dependencies'));

    gulp.src('Source/img/**/*')
        .pipe(gulp.dest('Final/img'));

    gulp.src('Source/pages/**/*')
        .pipe(gulp.dest('Final/pages'));

    console.log("Initial setup completed");
});

gulp.task('default', ['build', 'watching'], function() {});