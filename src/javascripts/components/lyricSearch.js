const lyricSearchCard = () => {
  document.querySelector('#jokes').innerHTML = '';
  document.querySelector('#lyrics').innerHTML = `
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Song Lyric Search Form</h4></br>
      <p class="card-text">Artist:</p>
      <input type="text" placeholder="Artist" id="artistName">
      <p class="card-text">Song Title:</p>
      <input type="text" placeholder="Song Title" id="songTitle"></br></br>
      <button type="button" id="pushForLyrics" class="btn btn-success">Search for Lyrics</button>
    </div>
</div>`;
};

// const searchLyrics = () => {
//   document.querySelector('#pushForLyrics').addEventListener('click', (e) => {
//     if (e.target.id.includes('artistName') && e.target.id.includes('songTitle')) {

//     }
//   })
// }

export default lyricSearchCard;
