const get = new GetJokes();
const ui = new UI();

let moreButtn = document.querySelector('.btn-more');
let category = "Any";
let flags = "&blacklistFlags=nsfw,racist,sexist"


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

//Add Like Listener function
function addLikeListener() {
    document.querySelectorAll('.like-box').forEach(item => {
        item.addEventListener('click', (e) => {
            let id = e.target.id;
            if (e.target.checked) {
                console.log(e.target.checked)
                get.saveJokesToLocalStorage(id, document.getElementById(`${id}-phar`).textContent);
            } else{
                get.removeFromLocalStorage(id)
            }
        });
    })
}

//Loading the categories, jokes, and pictures
document.addEventListener('DOMContentLoaded', () => {
    get.getCategories().then((resp) => ui.displayCategs(resp.categories.categories));
    get.getJokes(category, 3, flags).then((resp) => {
        var keys = Object.keys(localStorage);
        let liked;
        //ui.removeLoading();
        resp.jokes.jokes.forEach(joke => {
            liked = keys.includes(joke.id.toString());
            let jokeToDisplay = Util.checkJokeParts(joke);
            ui.createJokeCards("70vw", jokeToDisplay, joke.id, true, liked);
        });
        addLikeListener();
    });

    //Loading pictures to be implemented
});

document.querySelector('.drop-cats').addEventListener('click', function (e) {
    category = e.target.textContent;
    ui.clearCards();
    ui.addHeader(e.target.textContent);
    var keys = Object.keys(localStorage);
    let liked;
    get.getJokes(category, 3, flags).then((resp) => {
        resp.jokes.jokes.forEach(joke => {
            liked = keys.includes(joke.id.toString());
            let jokeToDisplay = Util.checkJokeParts(joke);
            ui.createJokeCards("70vw", jokeToDisplay, joke.id,true,liked);
        });
      //  addButtonListener();
        addLikeListener();
    });
});


