// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html =  '<div class="day first"><p>'+weather.city+', '+weather.region+' - '+weather.updated+'</p>';
      html += '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<h3>'+weather.text+'</h3>';
      html += '<ul><li class="high"> High: '+weather.high+'&deg;'+weather.units.temp+'</li>';
      html += '<li class="low"> Low: '+weather.low+'&deg;'+weather.units.temp+'</li></ul>';
      html += '<p>Wind Chill: '+weather.wind.chill+'&deg;'+weather.units.temp+' - Heat Index: '+weather.heatindex+'&deg;'+weather.units.temp+'</p>';
      html += '<p>Wind: '+weather.wind.speed+ ' mph ' +weather.wind.direction+'</p>';
      html += '<p>Humidity: '+weather.humidity+'% Barometric Pressure: '+weather.pressure+' in </p>';

      html +=  '<div class="day"><p>'+weather.forecast[1].day+', '+weather.forecast[1].date+'</p>';
      html += '<h2><i class="icon-'+weather.forecast[1].code+'"></i></h2>';
      html += '<h3>'+weather.forecast[1].text+'</h3>';
      html += '<ul><li class="high"> High: '+weather.forecast[1].high+'&deg;'+weather.units.temp+'</li>';
      html += '<li class="low"> Low: '+weather.forecast[1].low+'&deg;'+weather.units.temp+'</li></ul></div>';

      html +=  '<div class="day last"><p>'+weather.forecast[2].day+', '+weather.forecast[2].date+'</p>';
      html += '<h2><i class="icon-'+weather.forecast[2].code+'"></i></h2>';
      html += '<h3>'+weather.forecast[2].text+'</h3>';
      html += '<ul><li class="high"> High: '+weather.forecast[2].high+'&deg;'+weather.units.temp+'</li>';
      html += '<li class="low"> Low: '+weather.forecast[2].low+'&deg;'+weather.units.temp+'</li></ul></div>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
