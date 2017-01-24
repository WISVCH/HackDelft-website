import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import eventStream from 'event-stream'

import browserify from 'browserify'

import gulp       from 'gulp'
import babel      from 'gulp-babel'
import sass       from 'gulp-sass'
import gutil      from 'gulp-util'
import uglify     from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'

const es6Source    = 'src/js/**/*.js'
const sassSource   = 'src/scss/**/*.scss'
const imageSource = 'src/images/**'

gulp.task('es6', () => {
	const entries = [
		'index.js'
	]

	// map them to our stream function
	const tasks = entries.map(entry => (
		browserify({
			entries: ['src/js/' + entry]
		})
			.transform('babelify', {
				presets : ['es2015']
			})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('./' + entry))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps : true }))
				.pipe(babel())
				.pipe(uglify())
				.on('error', gutil.log)
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('build/js'))
		)
   )
	// create a merged stream
	return eventStream.merge.apply(null, tasks)
})

gulp.task('sass', () =>
	gulp.src(sassSource)
		.pipe(sourcemaps.init({ loadMaps : true }))
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'))
)

gulp.task('images', () =>
	gulp.src(imageSource)
		.pipe(gulp.dest('build/images'))
)

gulp.task('sass:watch', () => gulp.watch(sassSource, ['sass']))
gulp.task('es6:watch', () => gulp.watch(es6Source, ['es6']))
gulp.task('images:watch', () => gulp.watch(imageSource, ['images']))

gulp.task('watch', ['images:watch', 'es6:watch', 'sass:watch'])
gulp.task('build', ['images', 'es6', 'sass'])
gulp.task('default', ['build', 'watch'])