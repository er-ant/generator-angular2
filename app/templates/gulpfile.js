const gulp       = require('gulp');
const del        = require('del');
const webserver  = require('gulp-webserver');
const plumber    = require('gulp-plumber');

const jade       = require('gulp-jade');
const source     = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify   = require('babelify');
const eslint     = require('gulp-eslint');

const postcss    = require('gulp-postcss');
const concat     = require('gulp-concat');

// run init tasks
gulp.task('default', ['build']);
gulp.task('start', ['build', 'watch', 'serve']);
gulp.task('build', ['js', 'jade', 'css', 'static']);

// clean dist dir
gulp.task('clean', del.bind(null, ['./dist/**/*']));

// serve the dist dir
gulp.task('serve', () =>
  gulp
    .src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
);

// watch for changes and run the relevant task
gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.jade', ['jade']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/static/**/*', ['static']);
});

// transpile & move js
gulp.task('js', ['lint'], () =>
  browserify('src/index.js', {
    debug: false
  })
  .transform(babelify)
  .bundle()
  .on('error', onError)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
);

gulp.task('lint', () =>
  gulp
    .src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
);

// work with stylesheets
gulp.task('css', () =>
  gulp
    .src(['src/index.css', 'src/**/*.css'])
    .pipe(postcss([
      require('stylelint')(),
      require('autoprefixer')('last 2 version'),
      require('postcss-import'),
      require('postcss-css-variables'),
      require('postcss-calc'),
      require('cssnano')()
    ]))
    .on('error', onError)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist'))
);

// jade templates
gulp.task('jade', () =>
  gulp
    .src('src/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('dist'))
);

// move static files
gulp.task('static', () =>
  gulp
    .src('./src/static/**')
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
);

// onError
function onError(error) {
  console.error(error.message);
  this.emit('end');
}