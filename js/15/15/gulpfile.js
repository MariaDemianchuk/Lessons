const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
console.log('scss')
return gulp.src('./*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./'));
};

function copyFile() {
return gulp.src('txt.txt').pipe(gulp.dest('new.txt'))
}

function watching() {
    return gulp.watch('./*scss', scss)
}

exports.scss = scss;
exports.watch = watching; 