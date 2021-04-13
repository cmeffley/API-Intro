const searchWeather = () => {
  document.querySelector('#jokes').innerHTML = '';
  document.querySelector('#lyrics').innerHTML = '';

  document.querySelector('#weather').innerHTML = `
  <div id="weatherAppearsHere"></div>
  <div class="card">
  <div class="card-body">
    <h4 class="card-title">Check the Weather</h4></br>
    <input type="text" placeholder="City, Zip Code, etc." id="searchWeather"></br></br>
    <button type="button" id="pushForWeather" class="btn btn-info">Submit</button>
  </div>
</div>`;
};

export default searchWeather;
