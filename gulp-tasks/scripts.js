let argv = require('yargs').argv;
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let gulp = require('gulp');
let gulpif = require('gulp-if');
let uglify = require('gulp-uglifyjs');

gulp.task('scripts', ['react'], function() {
  return gulp.src('public/*.js')
  .pipe(concat('app.js'))
  .pipe(gulpif(argv.p, uglify() )).on('error', function(error) {
    console.error(error.message);
    console.log('------------------------------------------- \n \n');
    this.emit('end');
  })
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts-vendor', function() {
  return gulp.src('src/scripts/vendor/*.js')
  .pipe(concat('vendor.js'))
  .pipe(gulpif(argv.p, uglify() )).on('error', function(error) {
    console.error(error.message);
    console.log('------------------------------------------- \n \n');
    this.emit('end');
  })
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({stream: true}));
});