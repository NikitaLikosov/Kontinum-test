const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('sass-compaile', function () {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compaile'))
})
