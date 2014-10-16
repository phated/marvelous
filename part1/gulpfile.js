'use strict';

var fs = require('fs');

var browserify = require('browserify');

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');

function templates(){
  return gulp.src('./templates/partials/*.hbs')
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('build/templates'));
}

function bundle(){
  return browserify('./client')
    .bundle()
    .pipe(fs.createWriteStream('./build/client.js'));
}

function watch(){
  gulp.watch(['**/*', '!build/**', '!node_modules/**'], ['default']);
}

gulp.task(templates);
gulp.task(bundle);
gulp.task(watch);

gulp.task('default', gulp.series('templates', 'bundle'));
