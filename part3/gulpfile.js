'use strict';

var fs = require('fs');

var browserify = require('browserify');

var gulp = require('gulp');
var react = require('gulp-react');
var sourcemaps = require('gulp-sourcemaps');

function templates(){
  return gulp.src('./templates/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(react({ harmony: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./templates'));
}

function bundle(){
  return browserify('./client')
    .bundle()
    .pipe(fs.createWriteStream('./build/client.js'));
}

function watch(){
  gulp.watch([
    '**/*',
    '!templates/**/*.js',
    '!build/**',
    '!node_modules/**'
  ], ['default']);
}

gulp.task(templates);
gulp.task(bundle);
gulp.task(watch);

gulp.task('default', gulp.series('templates', 'bundle'));
