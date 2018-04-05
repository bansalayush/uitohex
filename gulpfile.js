const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const PATHS = {
  css: './index.css',
  config: './tailwind.js',
  dist: './src',
};

gulp.task('css', () => {
  return gulp
    .src(PATHS.css)
    .pipe(postcss([tailwindcss(PATHS.config), require('autoprefixer')]))
    .pipe(gulp.dest(PATHS.dist));
});
