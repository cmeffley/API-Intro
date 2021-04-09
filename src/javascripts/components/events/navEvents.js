import getJoke from '../../data/jokeData';
import { jokeStart } from '../seeJokes';

const navEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('jokePage')) {
      getJoke().then((jokeArray) => {
        jokeStart(jokeArray);
      });
    }
  });
};

export default navEvents;
