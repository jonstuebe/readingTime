var gulp = require('gulp'),
	notify = require('gulp-notify'),
	compass = require('gulp-compass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('styles', function(){

	gulp.src('assets/sass/screen.scss')
	.pipe(compass({
		css: 'assets/css',
		sass: 'assets/sass',
		image: 'assets/images'
	}))
	.pipe(gulp.dest('assets/css'))
	.pipe(notify({ message: 'sass compiled' }));

});

gulp.task('js', function(){

	gulp.src('jquery.readingTime.js')
	.pipe(uglify())
	.pipe(concat('jquery.readingTime.min.js'))
	.pipe(gulp.dest('./'))
	.pipe(notify({ message: 'js minified' }));

});

gulp.task('default', ['styles','js']);