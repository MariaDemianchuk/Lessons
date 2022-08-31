const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgMin(){
    return gulp.src('./assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/images_gulp'))
  };

exports.imgMin = imgMin