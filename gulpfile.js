var gulp = require('gulp');
var g = require('gulp-load-plugins')();

var optimize = (g.util.env.optimize ? true : false);
var config = require('./package.json')
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var pxtorem = require('gulp-pxtorem');

gulp.task('js', function () {
  return gulp.src(config.compile.js.src)
    .pipe(g.include())
    .on('error', g.util.log)
    .pipe(g.if(optimize, g.uglify({
      mangle: false,
    })))
    .on('error', g.util.log)
    .pipe(g.size())
    .pipe(gulp.dest(config.compile.js.dest))
});

gulp.task('css', function() {

  return gulp
   .src(config.compile.css.src)
    .pipe(sourcemaps.init())
     // Sass
    .pipe(sass({outputStyle: optimize ? 'compressed' : 'expanded',
        includePaths: config.compile.css.paths
    }))
    .on('error', g.util.log)
    // Autoprefixer
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
     // PX to REM
    .pipe(pxtorem())
    .pipe(g.size())
    // SCSS Source Maps
    .pipe(sourcemaps.write('./scss/maps'))
    // CSS output folder
    .pipe(gulp.dest(config.compile.css.dest))

});

gulp.task('build',['css','js'],function(){
});

gulp.task('watch', function() {
  gulp.watch(config.compile.css.watch, ['css']);
  gulp.watch(config.compile.js.watch, ['js']);
});
