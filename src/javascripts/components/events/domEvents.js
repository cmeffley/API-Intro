import getJoke from '../../data/jokeData';
import seeJokes from '../seeJokes';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('pushForJoke')) {
      getJoke().then((jokeArray) => {
        seeJokes(jokeArray);
      });
    }
  });
};

export default domEvents;
