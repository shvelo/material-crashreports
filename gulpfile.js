var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('default', ['server']);

gulp.task('server', function () {
    return gulp.src('frontend')
        .pipe(webserver({
            open: false
        }));
});