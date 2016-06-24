var gulp = require('gulp'),
    rename = require('gulp-rename'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver');

// run init tasks
gulp.task('default', ['dependencies', 'js', 'jade', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// jade templates
gulp.task('jade', () => {
  const jade = require('gulp-jade');

  return gulp.src('src/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('dest'))
});

// serve the dest dir
gulp.task('serve', function () {
  gulp.src('dest')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.jade', ['jade']);
  gulp.watch('src/**/*.css', ['css']);
});

// move dependencies into dest dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/bundles/angular2.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/es6-shim/es6-shim.map',
  ])
    .pipe(gulp.dest('dest/lib'));
});

// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: '',
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true,
    }))
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest('dest'));
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dest'));
});
