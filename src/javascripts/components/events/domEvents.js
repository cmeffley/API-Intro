import getJoke from '../../data/jokeData';
import getLyrics from '../../data/lyricData';
import { seeLyrics } from '../lyricSearch';
import { seeJokes } from '../seeJokes';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('pushForJoke')) {
      getJoke().then((jokeArray) => {
        seeJokes(jokeArray);
      });
    }
    if (e.target.id.includes('getPunchLine')) {
      document.querySelector('#jokePunchLine').style.display = 'block';
      document.querySelector('#getPunchLine').style.display = 'none';
      document.querySelector('#getNewJoke').style.display = 'block';
    }
    if (e.target.id.includes('getNewJoke')) {
      getJoke().then((jokeArray) => {
        seeJokes(jokeArray);
      });
    }
    if (e.target.id.includes('pushForLyrics')) {
      e.preventDefault();
      const artist = document.querySelector('#artistName').value;
      const songTitle = document.querySelector('#songTitle').value;
      getLyrics(artist, songTitle).then((response) => seeLyrics(response));
    }
  });
};

export default domEvents;
