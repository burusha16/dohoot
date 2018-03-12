let argv = require('yargs').argv;
let babelify = require('babelify');
let browserify = require('browserify');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let del = require('del');
let eslint = require('gulp-eslint');
let gulp = require('gulp');
let source = require('vinyl-source-stream');

gulp.task('react', ['transformToJs'], () => {
  return del.sync('public/app.bundle.jsx');
});

gulp.task('transformToJs', ['jsx-lint'], () => {
  return browserify({entries: 'public/app.bundle.jsx', extensions: ['.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('jsx-lint', ['concatJsx'], () => {
  return gulp.src('app/**/*.jsx')
    .pipe(eslint({configFile: 'eslintrc.json', fix: true}) )
    .pipe(eslint.format())
    .pipe(eslint.result(result => {
    }));
});

gulp.task('concatJsx', () => {
  return gulp.src([
    'app/import.jsx',
    'app/components/**/*.jsx',
    'app/app.jsx'
  ])
  .pipe(concat('app.bundle.jsx'))
  .pipe(gulp.dest('public'));
});

