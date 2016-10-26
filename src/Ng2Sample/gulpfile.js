/// <binding AfterBuild='default' Clean='clean' BeforeBuild='tsconfig' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
del = require('del'),
webserver = require('gulp-webserver'),
watch = require('gulp-watch'),
gulpTsConfig = require('gulp-tsconfig');

var paths = {
    app: ['app/**/*.js', 'app/**/*.ts', 'app/**/*.map', 'app/**/*.css', 'app/**/*.html'],
    styles: ['styles/**/*', 'node_modules/bootstrap/dist/css/bootstrap.min.css'],
    libs: ['node_modules/@angular*/**/*.js',
    'node_modules/rxjs*/**/*.js',
    'node_modules/angular2-in-memory-web-api*/**/*.js',
    'node_modules/core-js*/**/*.js',
    'node_modules/zone.js*/**/*.js',
    'node_modules/reflect-metadata*/**/*.js',
    'node_modules/systemjs*/**/*.js',
    'node_modules/lodash/dist/lodash.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ]
};

gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
});

gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*', 'wwwroot/styles/**/*']);
});

gulp.task('default', ['lib'], function () {
    gulp.src(paths.app).pipe(gulp.dest('wwwroot/scripts'));
    gulp.src(paths.styles).pipe(gulp.dest('wwwroot/styles'));
});

gulp.task('stream', function () {
    return gulp.src(paths.app)
        .pipe(watch(paths.app))
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('webserver', function () {
    gulp.src('wwwroot')
      .pipe(webserver({
          livereload: true,
          fallback: 'index.html',
          open: true
      }));
});

gulp.task('tsconfig', function () {
    var tsConfig = gulpTsConfig({
        tsOrder: [
            '**/app.module.ts',
            '**/*.module.ts',
            '**/*.ts'],
        tsConfig: {
            "compilerOptions": {
                "noImplicitAny": false,
                "noEmitOnError": true,
                "sourceMap": true,
                "experimentalDecorators": true,
                "emitDecoratorMetadata": true,
                "target": "es5"
            },
            "compileOnSave": true

        }
    });

    return gulp.src(["app/**/*.ts", "typings/index.d.ts"])
        .pipe(tsConfig())
        .pipe(gulp.dest('.'));

    // --> result is a tsconfig.json file. 
});