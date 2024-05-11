import jokesView from '/js/view/jokesView.js';
import jokeServices from '/js/service/jokeServices.js';

async function init(){
    let data = await jokeServices.getJoke();
    jokesView.render(data);
    console.log(data);
};

export default { init };