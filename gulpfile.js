const {src, dest, watch }= require("gulp");
const sass= require("gulp-sass")(require("sass"));


function css(done){

    src('src/scss/app.scss') //identifica el archivo sass
    .pipe(sass()) //compila
    .pipe(dest('build/css')); //guarda en el disco duro

    done(); //callback avisa a gulp cuando llegamos al final 

}
function dev(done){
    watch('src/scss/app.scss', css)
    
    done();
}

exports.css= css;
exports.dev=dev;