var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    ftp = require('gulp-ftp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
    rename = require("gulp-rename");

gulp.task('default', function() {
 
});

gulp.task('css', function () {
    return gulp.src('assets/sass/*.scss')
        
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4',
          'opera 12'],
            cascade: false
        }))        
        .pipe(sourcemaps.write('.'))        
        .pipe(plumber())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('cssmin', function() {
  return gulp.src('dist/css/main.css')    
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))    
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
 
  gulp.watch('assets/sass/*.*', ['viewSeq']); 
  
});

gulp.task('viewSeq', function(callback) {
  gulpSequence('css')(callback)  
});
