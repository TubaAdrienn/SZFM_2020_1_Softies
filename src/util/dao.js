class GetJokes {

    constructor() {
    }

    async getJokes(cat, amount, flags) {

        const response = await fetch(`https://jokeapi-v2.p.rapidapi.com/joke/${cat}?format=json&amount=${amount}&${flags}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
            }
        });

        const jokes = await response.json();

        return {
            jokes
        }
    }

    async getCategories() {
        const response = await fetch("https://jokeapi-v2.p.rapidapi.com/categories?format=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
            }
        });

        const categories = await response.json();

        return {
            categories
        }
    }

    async getJokesBySearch(word, flags) {
        const response = await fetch(`https://jokeapi-v2.p.rapidapi.com/joke/Any?contains=${word}&format=json&amount=3&${flags}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
            }
        });

        const jokes = await response.json();

        return {
            jokes
        }
    }

    async fetchImgsSrc() {
        const response = await fetch("../resources/imgsrc.txt");
        const lines = await response.text()

        return {
            lines
        }
    }

    saveJokesToLocalStorage(id, joke) {
        localStorage.setItem(id, joke);
    }

    getFromLocalStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length,
            keysToSend=[];
        while (i--) {
            values.push(localStorage.getItem(keys[i]));
            keysToSend.push(keys[i]);
        }
        
        return {
            values,
            keysToSend
        }
    }

    removeFromLocalStorage(id) {
        localStorage.removeItem(id);
    }
}

