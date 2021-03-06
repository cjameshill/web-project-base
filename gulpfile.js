var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync');


var paths = {
'bourbon': './node_modules/bourbon/app/assets/stylesheets/',
'susy': './bower_components/susy/sass/'
}


elixir(function (mix) {
    mix.sass('app.scss', './public/css/app.css', {includePaths: [paths.bourbon, paths.susy]})
        .styles(['normalize.css', 'app.css'], null, 'public/css')
        
        .browserSync({
            files: [
                'public/css/*.css',                     
                'resources/views/**/*.blade.php',       
                'app/**/*.php'                      
            ],
            proxy: 'sandbox.app',
            logPrefix: "Laravel Eixir BrowserSync",
            logConnections: false,
            reloadOnRestart: false,
            notify: false,
            open: false
        });
    mix.version('public/css/all.css');
});