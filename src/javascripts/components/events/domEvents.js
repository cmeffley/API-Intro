import getJoke from '../../data/jokeData';
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
  });
};

export default domEvents;
