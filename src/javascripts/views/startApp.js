import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import navBar from '../components/navBar';
// import searchWeather from '../components/weatherCard';
// import getWeather from '../data/weatherData';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  // searchWeather();
  // getWeather();
};

export default startApp;
