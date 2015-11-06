// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html =  '<p>'+weather.city+', '+weather.region+' - '+weather.updated+'</p>';
      html += '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li class="high">'+weather.high+'&deg;'+weather.units.temp+'</li>';
      html += '<li class="low">'+weather.low+'&deg;'+weather.units.temp+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
