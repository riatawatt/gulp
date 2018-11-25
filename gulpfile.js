var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
// var concatCSS = require('gulp-concat-css');

var concatJS = require('gulp-concat');
var rename = require('gulp-rename');
var uglifyJS = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('mytask', function () {
    return gulp.src('css/*.css')
    	.pipe(cleanCSS())
    	.pipe(concatCSS('style.min.css'))
    	.pipe(gulp.dest('dist/css'))
});



gulp.task('jstask', function () {
	var js_files = [
		'js/script1.js',
		'js/script2.js'
		]
	;
    return gulp.src(js_files)
    	.pipe(concatJS('script.js'))
    	.pipe(gulp.dest('dist/js'))
    	.pipe(rename('scripts.min.js'))
    	.pipe(uglifyJS())
    	.pipe(gulp.dest('dist/js'))
});

gulp.task('javascript', function() {
	return gulp.src('js/*.js')
	  .pipe(sourcemaps.init())
		.pipe(concatJS('js/all.js'))
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest('dist'));
  });

  var css_files = [
	'css/style1.css',
	'css/style2.css'
	]
;

  gulp.task('css', function() {
	// return gulp.src('css/*.css')
	return gulp.src(css_files)
	  .pipe(sourcemaps.init())
		.pipe(concatJS('css/all.css'))
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest('dist'));
  });

  gulp.task('csstask', function () {
	return gulp.src(css_files)
		.pipe(sourcemaps.init())
			.pipe(concatJS('css/style.css'))  
			.pipe(gulp.dest('dist'))
			.pipe(cleanCSS()) 
    	.pipe(rename('css/style.min.css'))	
			.pipe(sourcemaps.write())
    	.pipe(gulp.dest('dist'));
});

// gulp.watch('css/*.css', ['csstask']);
// gulp.watch('js/*.js', ['jstask']);

gulp.task('build', function(callback) {
	runSequence('csstask',
				'jstask',
				callback);
  });
