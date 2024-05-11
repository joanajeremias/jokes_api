import homeView from '/js/view/homeView.js';
import jokeServices from '/js/service/jokeServices.js';

function init() {
  homeView.render(jokeServices.getJokes);
};

export default { init };
