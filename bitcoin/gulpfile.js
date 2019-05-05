var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    cleancss     = require('gulp-clean-css'),
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку src/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'build' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('common.js')) // Собираем их в кучу в новом файле libs.min.js
        //.pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js')); // Выгружаем в папку src/js
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'images'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass', browserSync.reload]); // Наблюдение за sass файлами в папке sass
    gulp.watch('src/img/**/*.*', browserSync.reload); // Наблюдение за sass файлами в папке sass
    gulp.watch('build/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/**/*.js', ['scripts', browserSync.reload]);   // Наблюдение за JS файлами в папке js
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
});

gulp.task('clean', function() {
    return del.sync('build'); // Удаляем папку build перед сборкой
});

gulp.task('build', ['clean', 'images', 'sass', 'scripts'], function() {

    var buildCss = gulp.src('src/css/*.css')
    .pipe(cleancss())
    .pipe(gulp.dest('build/css'))

    var buildImg = gulp.src('src/jpg/*.*')
    .pipe(gulp.dest('build/jpg'))

    var buildJs = gulp.src('src/js/*.js') // Переносим скрипты в продакшен
    .pipe(gulp.dest('build/js'))

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('default', ['watch']);