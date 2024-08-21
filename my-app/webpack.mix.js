let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'js')
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .sass('resources/sass/app.scss', 'css');