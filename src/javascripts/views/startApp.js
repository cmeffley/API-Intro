import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import navBar from '../components/navBar';
import searchWeather from '../components/weatherCard';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  searchWeather();
};

export default startApp;
