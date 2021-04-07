const jokeStart = () => {
  document.querySelector('#lyrics').innerHTML = '';
  document.querySelector('#jokes').innerHTML = `
  <div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Joke Generator</h5></br>
    <button type="button" id="pushForJoke" class="btn btn-dark">Get a Joke</button>
  </div>
</div>`;
};

const seeJokes = (chuckle) => {
  document.querySelector('#lyrics').innerHTML = '';
  document.querySelector('#jokes').innerHTML = `
      <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Joke Generator</h5></br>
          <div id="jokeSetup" class="card-text">${chuckle.setup}</div></br>
          <div id="jokePunchLine" class="card-text">${chuckle.punchline}</div>
          <hr>
          <button type="button" id="pushForJoke" class="btn btn-light">Get a Joke</button>
        </div>
      </div>`;
};

export { jokeStart, seeJokes };
