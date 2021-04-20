const searchWeather = () => {
  document.querySelector('#jokes').innerHTML = '';
  document.querySelector('#lyrics').innerHTML = '';

  document.querySelector('#weather').innerHTML = `
  <div class="card">
  <div class="card-body">
    <h4 class="card-title">Check the Weather</h4></br>
    <input type="text" class="form-control" placeholder="City" id="forecastSearch"></br></br>
    <button type="button" id="pushForWeather" class="btn btn-info">Submit</button>
  </div>
  <div id="weatherAppearsHere"></div>
</div>`;
};

const seeWeather = (weatherObject) => {
  document.querySelector('#weatherAppearsHere').innerHTML = `
  <div class="card" style="width: 15rem">
    <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png" alt="Weather Icon">
  <div class="card-body">
    <h5>${weatherObject.name}</h5>
    <p>${weatherObject.weather[0].main} | ${weatherObject.weather[0].description}</p>
  </div>
  </div>`;
};

export { searchWeather, seeWeather };
