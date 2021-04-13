import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
};

export default startApp;
