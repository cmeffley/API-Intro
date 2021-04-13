import getJoke from '../../data/jokeData';
import { jokeStart } from '../seeJokes';
import { lyricSearchCard } from '../lyricSearch';

const navEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('jokePage')) {
      getJoke().then((jokeArray) => {
        jokeStart(jokeArray);
      });
    }
    if (e.target.id.includes('lyricPage')) {
      lyricSearchCard();
    }
  });
};

export default navEvents;
