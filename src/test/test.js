var getter = new GetJokes();

// Test 1
getter.getJokes("Dark", 2, "&blacklistFlags=nsfw").then(resp => {
    console.log(resp.jokes.error == false);
    console.log(resp.jokes.jokes.length == 2);
    console.log(resp.jokes.jokes[0].category == "Dark");
    console.log(resp.jokes.jokes[1].category == "Dark");
    console.log(resp.jokes.jokes[0].flags["nsfw"] == false);
    console.log(resp.jokes.jokes[1].flags["nsfw"] == false);
});

// Test 2
getter.getJokes("Dark", 3, "").then(resp => {
    console.log(resp.jokes.error == false);
    console.log(resp.jokes.jokes.length == 3);
    console.log(resp.jokes.jokes[0].category == "Dark");
    console.log(resp.jokes.jokes[1].category == "Dark");
});

// Test 3
getter.getCategories().then(resp => {
    console.log(resp.categories.categories.length == 5);
    console.log(resp.categories.error == false);
});

// Test 4
getter.getJokesBySearch("hobbit").then(resp => {
    console.log(resp.jokes.error == false);
    console.log(resp.jokes.jokes.length == 1)
});

// Test 5
getter.fetchImgsSrc().then(resp => {
    console.log(resp);
});

//Test 6
var lStrLength=Object.keys(localStorage).length;

getter.saveJokesToLocalStorage('id', 'string');
getter.saveJokesToLocalStorage('id2', 'string2');

var lStr = getter.getFromLocalStorage();
console.log(lStr.keysToSend.includes('id2'))
console.log(lStr.keysToSend.includes('id'))
console.log(Object.keys(localStorage).length==lStrLength+2);

getter.removeFromLocalStorage('id');
getter.removeFromLocalStorage('id2');
console.log(Object.keys(localStorage).length==lStrLength);