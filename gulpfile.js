let argv = require('yargs').argv;
let gulp = require('gulp');
let requireDir = require('require-dir');

requireDir('./gulp-tasks');

gulp.task('build', function() {
  (argv.p) ? gulp.start('express') : gulp.start('server-dev');
  gulp.start('images');
  if (argv.w) {
    gulp.start('watch')
  }
});