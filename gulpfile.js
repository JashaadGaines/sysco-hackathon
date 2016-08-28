var gulp = require('gulp');
var shell = require('gulp-shell');


var paths = {
    scripts: ['public/**/*.js']
};

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['webpack']);
});

gulp.task('webpack',shell.task([
    'webpack'
]));