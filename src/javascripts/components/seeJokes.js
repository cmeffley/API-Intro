const seeJokes = (chuckle) => {
  document.querySelector('#lyrics').innerHTML = '';
  document.querySelector('#jokes').innerHTML = `
      <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Joke Generator</h5>
          <p id="jokeSetup" class="card-text">${chuckle.setup}</p>
          <p id="jokePunchLine" clas="card-text">${chuckle.punchline}</p>
          <button type="button" id="pushForJoke" class="btn btn-light">Get a Joke</button>
        </div>
      </div>`;
};

export default seeJokes;
