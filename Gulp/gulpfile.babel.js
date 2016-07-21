// import gulp from 'gulp';
// import concat from 'gulp-concat';
// import annotate from 'gulp-ng-annotate';
// import plumber from 'gulp-plumber';
// import uglify from 'gulp-uglify';
// import watch from 'gulp-watch';
// import sass from 'gulp-sass';
// import babel from 'gulp-babel';
//
// const paths = {
//   jsSource: ['./JS/**/*.js'],
//   sassSource: ['./CSS/*.scss']
// };
//
// gulp.task('js', () =>  {
//   return gulp.src(paths.jsSource)
//   .pipe(plumber())
//   .pipe(babel({
//     presets: ["es2015"]
//   }))
//   // .pipe(concat('bundle.js'))
//   // .pipe(annotate())
//   // .pipe(uglify())
//   .pipe(gulp.dest('dist/js'));
// });
//
//
// gulp.task('sass', () => {
//   return gulp.src(paths.sassSource)
//   .pipe(sass().on('error', sass.logError))
//   // .pipe(concat('style.css'))
//   .pipe(gulp.dest('dist/styles'));
// });
//
// gulp.task('watch', () =>  {
//   gulp.watch(paths.jsSource, ['js']);
//   gulp.watch(paths.sassSource, ['sass']);
// });
//
// gulp.task('default', ['js', 'sass', 'watch']);
