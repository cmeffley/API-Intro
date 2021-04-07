import getJoke from '../../data/jokeData';
import { seeJokes } from '../seeJokes';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('pushForJoke')) {
      getJoke().then((jokeArray) => {
        seeJokes(jokeArray);
      });
    }
    if (e.target.id.includes('pushForJoke')) {
      document.querySelector('#jokeSetup').style.display = 'none';
      document.querySelector('#jokePunchLine').style.display = 'block';
    }
  });
};

export default domEvents;
