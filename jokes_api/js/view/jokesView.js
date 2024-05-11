function render(jokes) {
    const container = document.querySelector('#container');
    container.innerHTML = '';

    const jokeElement = document.createElement('div');
    jokeElement.innerHTML = `<p>${jokes.setup}</p>`;
    container.appendChild(jokeElement);

    const punchlineButton = document.createElement('button');
    punchlineButton.textContent = "Get the punchline!";
    punchlineButton.addEventListener('click', () => {
        const punchlineElement = document.createElement('p');
        punchlineElement.textContent = jokes.punchline;
        container.appendChild(punchlineElement);
        punchlineButton.disabled = true;

       
        const nextJokeButton = document.createElement('button');
        nextJokeButton.textContent = "Next Joke, please!";
        nextJokeButton.addEventListener('click', () => {
            window.location.href = '/#/about'; 
            window.location.href = '/#/jokes'; 
        });
        container.appendChild(nextJokeButton);
    });
    container.appendChild(punchlineButton);
}

export default { render };
