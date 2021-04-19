const searchWeather = () => {
  document.querySelector('#jokes').innerHTML = '';
  document.querySelector('#lyrics').innerHTML = '';

  document.querySelector('#weather').innerHTML = `
  <div id="weatherAppearsHere"></div>
  <div class="card">
  <div class="card-body">
    <h4 class="card-title">Check the Weather</h4></br>
    <input type="text" placeholder="City" id="searchWeather"></br></br>
    <button type="button" id="pushForWeather" class="btn btn-info">Submit</button>
  </div>
  <div id="showWeather"></div>
</div>`;
};

const seeWeather = (weather) => {
  document.querySelector('#showWeather').innerHTML = `${weather.list[0].weather.main}
  http://openweathermap.org/img/wn/${weather.list[0].weather.icon}@2x.png`;
};

export { searchWeather, seeWeather };
