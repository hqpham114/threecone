// move my html
//compile the JS using webpack
//watch
//default task (gulp)

const {  series, src, dest, watch} = require('gulp');

//bowser refesh
var browserSync = require('browser-sync').create();

const webpack = require('webpack-stream');

function html(cb){
    src("src/index.html")
    .pipe(dest("dist"))
    cb();
  }


function js(cb){
    src("src/js/*.js")
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      output:{
        filename:"app.js"
      }
    }))
    .pipe(dest("dist/js"))
    cb();
  }


  function watcher(cb){
    watch("src/*.html").on('change', series(html, browserSync.reload));
    watch("src/js/*.js").on('change', series(js, browserSync.reload));

    cb();
  }

  function server(cb){
    browserSync.init({
     server:{
      baseDir: "dist"
     } 
    })
    cb();
  }
  


exports.default = series(html,js, watcher,server);
