const gulp = require('gulp');
const webpack = require('webpack-stream');
const R = require('ramda');
const nodemon = require("gulp-nodemon");

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

gulp.task('fe-build', function () {
  return gulp.src('app.js')
    .pipe(webpack(webpackBuildOptions))
    .pipe(gulp.dest('public/'));
});

gulp.task('fe-watch', function () {
  return gulp.src('resources/js/app.js')
    .pipe(webpack(R.merge(webpackBuildOptions, {watch: true})))
    .pipe(gulp.dest('public/'));
});

gulp.task('express-watch', function () {
  nodemon({
    script: 'server.js',
    ext: 'js handlebars',
    ignore: ["/resources/*", "/public/*"]
  });
});

gulp.task('build', ["fe-build"]);
gulp.task('dev', ["fe-watch", "express-watch"]);
