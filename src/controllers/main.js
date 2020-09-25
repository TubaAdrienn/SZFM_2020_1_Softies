

//Add Button Listener function
function addButtonListener() {
    moreButtn = document.querySelector('.btn-more');
    moreButtn.addEventListener("click", () => {
        var keys = Object.keys(localStorage);
        let liked;
        get.getJokes(category, 3, flags).then((resp) => {
            resp.jokes.jokes.forEach(joke => {
                liked = keys.includes(joke.id.toString());
                let jokeToDisplay = Util.checkJokeParts(joke);
                ui.createJokeCards("70vw", jokeToDisplay, joke.id, true, liked);
                addLikeListener();
            });
        });
    })
}
