class GetJokes {

    constructor() {
    }

    async getJokes(cat, flags) {

        const response = await fetch(`https://jokeapi-v2.p.rapidapi.com/joke/${cat}?format=json${flags}`, {
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

}
