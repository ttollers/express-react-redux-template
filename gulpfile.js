const gulp = require('gulp');
const webpack = require('webpack-stream');
const R = require('ramda');

const webpackBuildOptions = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    filename: "bundle.js"
  }
};

gulp.task('webpack-build', function () {
  return gulp.src('app.js')
    .pipe(webpack(webpackBuildOptions))
    .pipe(gulp.dest('public/'));
});

gulp.task('webpack-watch', function () {
  return gulp.src('resources/js/app.js')
    .pipe(webpack(R.merge(webpackBuildOptions, {watch: true})))
    .pipe(gulp.dest('public/'));
});

gulp.task('build', ['webpack-build']);
gulp.task('dev', ['webpack-watch']);
