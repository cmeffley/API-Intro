const jokeStart = () => {
  document.querySelector('#lyrics').innerHTML = '';
  document.querySelector('#jokes').innerHTML = `
  <div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Joke Generator</h4></br>
    <button type="button" id="pushForJoke" class="btn btn-dark">Get a Joke</button>
  </div>
</div>`;
};

const seeJokes = (chuckle) => {
  document.querySelector('#lyrics').innerHTML = '';
  document.querySelector('#jokes').innerHTML = `
      <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">Joke Generator</h4></br>
          <div id="jokeSetup" class="card-text">${chuckle.setup}</div></br>
          <div id="jokePunchLine" class="card-text" style="display: none">${chuckle.punchline}</div>
          <hr>
          <button type="button" id="getPunchLine" class="btn btn-dark">Get Punchline</button>
          <button type="button" id="getNewJoke" class="btn btn-dark" style="margin: 0 auto; display: none">Get New Joke</button>
        </div>
      </div>`;
};

export { jokeStart, seeJokes };
