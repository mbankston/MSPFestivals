var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = {
    assets: "server/public/assets/",
    vendors: "server/public/vendors/"
};
var vendorSources = [
    "node_modules/angular/angular.min.js",
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css"

    //"node_modules/angular-route/angular-route.min.js"
];



var viewSources = [
    "client/views/**/*"
];

gulp.task('scripts', function() {
    return gulp.src('client/scripts/app.js')
        //.pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest("server/public/assets/scripts"))

});

gulp.task('sass', function(){
    return gulp.src('client/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('server/public/assets/styles'))
});

gulp.task('assets', function() {
    return gulp.src(viewSources, {base: "client/"})
        .pipe(gulp.dest(path.assets))
});

gulp.task('vendors', function() {
    return gulp.src(vendorSources, {base: "node_modules/"})
        .pipe(gulp.dest(path.vendors));
});

gulp.task('default', ['scripts', 'sass', 'assets', 'vendors']);
