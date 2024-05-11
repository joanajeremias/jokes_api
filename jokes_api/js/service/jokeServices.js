async function getJoke() {


    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    console.log("hello");
    return await response.json();
  }

  export default { getJoke };

 