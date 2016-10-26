var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('css', function() {
	return gulp.src('./public/stylesheets/*.css')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(rename(function(path) {
			path.extname = ".min.css"
		}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
	return gulp.src('./public/images/*/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('js', function (cb) {
  pump([
        gulp.src('./public/javascripts/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('moving', function(){
	gulp.src('./public/fonts/*')
	.pipe(gulp.dest('dist/fonts'));
	gulp.src('./public/font-awesome/*/*')
	.pipe(gulp.dest('dist/font-awesome'));
})