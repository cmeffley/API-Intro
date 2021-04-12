import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import lyricSearchCard from '../components/lyricSearch';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  lyricSearchCard();
};

export default startApp;
