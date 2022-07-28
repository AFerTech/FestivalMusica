const {src, dest, watch, parallel }= require("gulp");

const sass= require("gulp-sass")(require("sass"));
const plumber= require("gulp-plumber");

const cache= require('gulp-cache');
const imagemin= require('gulp-imagemin');
const webp= require('gulp-webp');
const avif= require('gulp-avif');



function css(done){

    src('src/scss/**/*.scss') //identifica el archivo sass
    .pipe(plumber())
    .pipe(sass()) //compila
    .pipe(dest('build/css')); //guarda en el disco duro

    done(); //callback avisa a gulp cuando llegamos al final 

}

function imagenes(done){
    const opcs ={
        optimizationLevel: 3
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opcs)))
        .pipe(dest('build/img'));


    done();
}   

function versionWebp(done){

    const opcs ={
        quality:50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opcs))
    .pipe(dest('build/img'));


    done();
}
function versionAvif(done){

    const opcs ={
        quality:50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(avif(opcs))
    .pipe(dest('build/img'));


    done();
}
function dev(done){
    watch('src/scss/**/*.scss',css);
    
    done();
}

exports.css= css;
exports.imagenes= imagenes;
exports.versionWebp= versionWebp;
exports.versionAvif= versionAvif;
exports.dev=parallel (imagenes, versionWebp,versionAvif,dev);