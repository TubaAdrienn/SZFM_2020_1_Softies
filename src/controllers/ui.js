class UI {

    constructor() { }

    displayCategs(categories) {

        const drmenu = document.querySelector('.dropdown-menu');

        categories.forEach(cats => {
            let newItem = document.createElement('a');
            newItem.className = 'dropdown-item';
            newItem.setAttribute = ("href", "#");
            newItem.textContent = cats;
            drmenu.appendChild(newItem);
        });
    }

    clearCards() {
        document.getElementById("joke-container").innerHTML = "";
    }

    removeLoading(){
        document.getElementById('loading').remove();
    }

    addHeader(category) {
        let header = document.createElement('h2');
        header.textContent = category;
        header.style = "margin-top: 15px; margin-bottom: 40px;";
        document.getElementById("joke-container").appendChild(header);
    }

    createJokeCards(width, joke, id, addbutton, liked=true) {
        //Get joke container
        const cont = document.getElementById("joke-container");
        const button = document.querySelector('.btn-more')

        //CreateElements
        let newDiv = document.createElement('div');
        let newDivHead = document.createElement('div');
        let newLabel = document.createElement('label');
        let newInput = document.createElement('input');
        let newCardBody = document.createElement('div');
        let newPhar = document.createElement('p');

        //Set card-body
        newPhar.textContent = joke;
        newPhar.id = `${id}-phar`;
        newCardBody.appendChild(newPhar);
        newCardBody.className = "card-body";

        //Set label and input
        newInput.className = "form-check-input like-box";
        newInput.type = "checkbox";
        newInput.id = id;
        if(liked) newInput.checked=true;
        newLabel.className = "form-check-label";
        newLabel.style = "margin-left:25px;";
        newLabel.appendChild(newInput);

        //Set divs
        newDivHead.className = "card-header";
        newDivHead.style = "display: flex;";
        newDivHead.textContent = "Like";
        newDivHead.appendChild(newLabel);
        newDiv.className = "card border-primary mb-3";
        newDiv.style = `width:${width};`
        newDiv.appendChild(newDivHead);
        newDiv.appendChild(newCardBody);

    }

    setMemeOfTheDay(img) {
        const imgCont = document.querySelector('.img-container');
        let newImg = document.createElement('img');
        newImg.setAttribute('src', img);
        newImg.style = "width: 220px; display: block; margin-left: auto; margin-right: auto; margin-top:35px;"
        newImg.alt = "meme";
        imgCont.appendChild(newImg);

    }

    setGalleryPictures(src) {

        const imgCont = document.querySelector('.img-container');

        src.forEach(line => {
            let newImg = document.createElement('img');
            newImg.setAttribute('src', line);
            newImg.style = "margin-right: 10px; margin-left: 10px; width: 400px; margin-bottom: 30px"
            newImg.alt = "meme";
            imgCont.appendChild(newImg);
        });
    }



}