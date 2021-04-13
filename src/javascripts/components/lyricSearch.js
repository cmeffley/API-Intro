const lyricSearchCard = () => {
  document.querySelector('#jokes').innerHTML = '';
  document.querySelector('#lyrics').innerHTML = `
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Song Lyric Search Form</h4></br>
      <p class="card-text">Artist:</p>
      <input type="text" placeholder="Artist" id="artistName" required>
      <p class="card-text">Song Title:</p>
      <input type="text" placeholder="Song Title" id="songTitle" required></br></br>
      <button type="button" id="pushForLyrics" class="btn btn-success">Search for Lyrics</button>
    </div>
</div>
<div id="showLyrics"></div>`;
};

const seeLyrics = (sing) => {
  document.querySelector('#showLyrics').innerHTML = `<div id="showLyrics">${sing.lyrics}</div>`;
};

export { lyricSearchCard, seeLyrics };
