const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

// Configure TypeScript compiler
const tsProject = ts.createProject('tsconfig.json');

// Define the task to compile TypeScript files
gulp.task('compile', function () {
	return gulp
		.src([
			'src/**/*.ts',
			'src/**/*.tsx',
			'!src/**/*.d.ts',
			'!src/**/*.props.ts',
		])
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.js.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

// gulp.task('compile', function () {
// 	return tsProject
// 		.src()
// 		.pipe(sourcemaps.init())
// 		.pipe(tsProject())
// 		.js.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('dist'));
// });

gulp.task('copy', function () {
	return gulp
		.src(
			[
				'src/**/*.json',
				'src/**/*.d.ts',
				'!src/**/*.d.ts',
				'!*.d.ts',
				'!src/**/*.props.ts',
			],
			{
				base: 'src',
			}
		)
		.pipe(gulp.dest('dist'));
});

// Define the default task
gulp.task('default', gulp.series('compile', 'copy'));
