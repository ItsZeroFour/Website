// gulp и его переменные
const { src, dest, watch, parallel, series }  = require('gulp');  //  Gulp

// подключения
const concat        = require('gulp-concat');                     //  Конкатенация
const browserSync   = require('browser-sync').create();           //  LiveServer
const scss          = require('gulp-sass')(require('sass'));      //  scss
const uglify        = require('gulp-uglify-es').default;          //  Сжатие файлов
const autoprefixer  = require('gulp-autoprefixer');               //  Добавляет стили в css для старых браузеров
const del           = require('del')

// liveserver
function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
}

// Очистка dist'a
function  cleanDist() {
  return del('dist')
}

// Перекидование картинок в папку dist
function images() {
  return src('app/images/**/*')
    .pipe(dest('dist/images'))
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',       //  Путь к фалу jQuery
    'app/js/main.js'                            //  Путь к файлу js
  ])
    .pipe(concat('main.min.js'))                //  Конкатенауия файла js (уменьшение размера)
    .pipe(uglify())                             //  Сжатие файлов
    .pipe(dest('app/js'))                       //  После сжатия будет кидать в папку js
    .pipe(browserSync.stream())                 //  Автоматическое обнавление
}

// Консертауия scss в css
function styles() {
  return src('app/scss/style.scss')             //  Путь scss
    .pipe(scss({outputStyle: 'compressed'}))    //  Миницифируем файл
    .pipe(concat('style.min.css'))              //  Переиминование файла в *.min.css (конкатенация)
    .pipe(autoprefixer({                        //  Отслеживание на 10 версий браузера назад
      overrideBrowserslist: ['last 10 version']
    }))
    .pipe(dest('app/css'))                      //  Создаем папку с css
    .pipe(browserSync.stream())                 //  Автоматическое обнавление
}

// Сборка проекта
function build() {
  return src([
    'app/css/style.min.css',
    'app/fonts/**/*',
    'app/js/main.min.js',
    'app/*.html'
  ], {base: 'app'})
    .pipe(dest('dist'))
}

// Просмотр изменений в файлах
function watching() {
  watch(['app/scss/**/*.scss'], styles)                         //  Путь ко всем файлам и папкам в папке scss и запускает функцию styles
  watch(['app/js/**/*.js' ,'!app/js/main.min.js'], scripts)     //  Путь ко main.min.js и запуск функции scripts
  watch(['app/*.html']).on('change', browserSync.reload)
}

// Exports
exports.styles      = styles;
exports.watching    = watching;
exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.images      = images;
exports.cleanDist   = cleanDist

exports.build   = series(cleanDist, images, build)
exports.default = parallel(styles ,scripts, browsersync, watching);