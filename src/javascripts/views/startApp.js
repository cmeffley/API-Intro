import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import { jokeStart } from '../components/seeJokes';

const startApp = () => {
  domBuilder();
  jokeStart();
  domEvents();
};

export default startApp;
