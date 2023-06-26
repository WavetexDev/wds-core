const gulp = require('gulp');
const copy = require('gulp-copy');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
	return gulp
		.src([
			'src/**/*.ts',
			'src/**/*.tsx',
			'!src/**/*.d.ts',
			'!src/**/types.ts',
		])
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.js.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
	return gulp
		.src(
			[
				'src/**/*.json',
				'src/**/*.d.ts',
				'!src/**/*.d.ts',
				'!*.d.ts',
				'!src/**/types.ts',
			],
			{
				base: 'src',
			}
		)
		.pipe(gulp.dest('dist'));
});

gulp.task('copyTypeDeclarations', function () {
	return gulp
		.src(['./index.d.ts'], {
			base: './',
		})
		.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('compile', 'copy'));
