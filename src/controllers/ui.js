//Class UI:
//Styles should be set according to bootstrap classes

//DisplayCategs(categories) -> Get the dropdown menu from the html page,
//                             for each category, create a new 'a' dropdown item
//                             with the text-content of the current category

//clearCards() -> remove html from joke container

//removeLoading() -> remove loading gif from html

//addHeader (category) -> create an element of h2 header with the category name and append it to the joke-container

//createJokeCards(width, joke, id, addbutton, liked) - > 
//  create elements part: need a two divs, a label, an input, another div for the card-body and a p element
//  set the card body first: the pharagraphs ID should be ${id}-phar, use the ES6 JS, texcontent is the joke, append it to card-body, set cardbody class
//  set label and input: new input class, type, id(parameter) should be set, if input is liked(parameter), the checked should be true
//  set the label classname, style and append it together
//  set divs: div head is card-header class, set style and text-content to "Like"
//            simple div class: card border-primary mb-3, stlye: `width:${width};`
//	      append it together, then append it to container

//setMemeOfTheDay(img) -> get the img container, create a new img element, set the attributes, style: width: 220px; display: block; margin-left: auto; margin-right: auto; margin-top:35px;, then append it

//setGalleryPictures(src) -> do the same just with an array