let browserSync = require('browser-sync');
let nodemon = require('gulp-nodemon');
let gulp = require('gulp');

gulp.task('server-dev', ['linters', 'express'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:5000',
    baseDir: 'public',
    port: 3000,
    notify: false,
  });
});

gulp.task('express', ['removePublic', 'fonts', 'scripts', 'styles', 'views'], (cb) => { 
  let started = false;
  
  return nodemon({
    script: 'app/index.js',
    watch: 'app/'
  })
    .on('start', function () {
      if (!started) {
        cb();
        started = true; 
      } 
    });
});