var get = new GetJokes();
var ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    var jokes = get.getFromLocalStorage();
    if(jokes.values.length>0){
        for (let i = 0; i < jokes.values.length; i++) {
            ui.createJokeCards("80vw", jokes.values[i], jokes.keysToSend[i], false, true);
        }
        addLikeListener();
    } else{
        ui.noContentYet("You haven't liked any jokes yet.");
    }
  
});

function addLikeListener() {
    document.querySelectorAll('.like-box').forEach(item => {
        item.addEventListener('click', (e) => {
            let id = e.target.id;
            get.removeFromLocalStorage(id)
        });
    })
}
