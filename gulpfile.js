var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

var tests = './test/*.js';

gulp.task('test', function () {
    gulp.src(tests)
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', gutil.log);
});

gulp.task('watch', function() {
    gulp.watch('index.js', ['test']);
});

gulp.task('default', ['test', 'watch']);
