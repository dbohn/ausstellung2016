var elixir = require('laravel-elixir');

config.assetsPath = 'assets';

elixir(function(mix) {
	mix.sass('app.scss');
});
