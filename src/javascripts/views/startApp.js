import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import seeJokes from '../components/seeJokes';
import getJoke from '../data/jokeData';

const startApp = () => {
  domBuilder();
  getJoke().then((response) => {
    seeJokes(response);
  });
  domEvents();
};

export default startApp;
