import React, { useState, useEffect } from 'react';

function ChuckNorrisJoke() {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random?Animal')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching Chuck Norris joke:', error));
    }, []);
    console.log(joke)
    return (
        <div>
            <h2>Chuck Norris Joke</h2>
            <p>{joke}</p>
        </div>
    );
}

export default ChuckNorrisJoke;
