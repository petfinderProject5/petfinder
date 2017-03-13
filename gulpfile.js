const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', () => {
    browserSync.init({
        server: './public',
        "https": true
    })
});

gulp.task('styles', () => {
    return gulp.src('./dev/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/assets/styles/'))
    .pipe(reload({stream: true}));
});

gulp.task('javascript', () => {
    return gulp.src('./dev/assets/scripts/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./public/assets/scripts/'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('./dev/assets/styles/**/*.scss', ['styles']);
    gulp.watch('./dev/assets/scripts/main.js', ['javascript']);
    gulp.watch('./public/*.html', reload);
});

gulp.task('build', ['styles', 'javascript']);

gulp.task('default', ['browser-sync', 'styles', 'javascript', 'watch']);
