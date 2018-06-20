var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');

var concatJS = require('gulp-concat');
var rename = require('gulp-rename');
var uglifyJS = require('gulp-uglify');

gulp.task('mytask', function () {
    return gulp.src('css/*.css')
    	.pipe(cleanCSS())
    	.pipe(concatCSS('style.min.css'))
    	.pipe(gulp.dest('dist/css'))
});

gulp.task('csstask', function () {
	var css_files = [
		'css/style1.css',
		'css/style2.css'
		]
	;
    return gulp.src(css_files)
    	.pipe(concatCSS('style.css'))
    	.pipe(gulp.dest('dist/css'))
    	.pipe(rename('style.min.css'))
    	.pipe(cleanCSS())
    	.pipe(gulp.dest('dist/css'))
});

gulp.task('jstask', function () {
    return gulp.src('js/*.js')
    	.pipe(concatJS('script.js'))
    	.pipe(gulp.dest('dist/js'))
    	.pipe(rename('scripts.min.js'))
    	.pipe(uglifyJS())
    	.pipe(gulp.dest('dist/js'))
});

gulp.watch('css/*.css', ['csstask']);
gulp.watch('js/*.js', ['jstask']);
