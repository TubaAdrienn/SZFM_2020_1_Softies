# Fetch Tests 
## Tested in Mozzilla, Chrome, Safari

### Test 1 - GetJokes with flags
	
* Call the function to get jokes from DAO, parameters: Dark, 2, "&blacklistFlags=nsfw"
    * **Expected**: An array that contains 2 jokes where the nsfw flag is false
    * **Result**: An array that contains 2 jokes object the nsfw flag is false

### Test 2 - GetJokes without flags

* Call the function to get jokes from DAO, parameters: Dark, 3, ""
    * **Expected**: An array that contains 3 jokes where flags might be true
    * **Result**: An array that contains 3 jokes where religious flag is true

### Test 3 - GetCategories
	
* Call the function to get categories
    * **Expected**: A response that contains an array of the categories
    * **Result**:  A response that contains an array of the categories

### Test 4 - GetJokesBySearch

* Call the function to get jokes by search, parameter: Hobbit
    * **Expected**: A response with a joke containing the word hobbit
    * **Result**: A response with a joke containing the word hobbit

### Test 5 - FetchImgSrc
	
* Call the function to get the imgsrc.txt file's content
    * **Expected**: The imgsrc.txt file's content in an object
    * **Result**: The imgsrc.txt file's content in an object

### Test 6 - SaveJokesToLocalStorage, GetFromLocalStorage, DAO RemoveFromLocalStorage

* Save to localstorage : id, string
* Save to localstorage: id2, string2
    * **Expected**: Localstorage length is bigger by two
    * **Result**: Localstorage length is bigger by two
* Call the function to get local storage content
    * **Expected:** Array containing the two previous element
    * **Result**: Array containing the two previous element
* Call the function to remove from local storage: id
* Call the function to remove from local storage: id2
    * **Expected**: Local storage length is the same as when started
    * **Result**: Local storage length is the same as when started

Tests can be found in the the test folder.
Tested By: Adrienn Tuba, 2020.09.27.

### Controller testing: yljokes.js, gallery.js, ui.js, main.js

### Test 7 - Add element to local storage (yljokes.js )

* Remove element from local storage by unchecking the like box, add element to local storage by checking the like box (in case the user changed its mind)
    * **Expected:** Add element to local storage after checking the like box.
    * **Result:** Element is not added to local storage.
* **Bugfix-0.6 executed**
* **New test:**
    * **Expected:** Add element to local storage after checking the like box.
    * **Result:** Element is added to local storage.

### Test 8 - addEventListener('DOMContentLoaded'...) - yljokes.js

* Trigger event to load DOM content.
    * **Expected:** Despite refreshing the page multiply times, the same content is loaded.
    * **Result:** Despite refreshing the page multiply times, the same content is loaded.

### Test 9 - addLikeListener() - yljokes.js

* Call function to remove joke from local storage trigerred by clicking.
    * **Expected:** Joke is removed from the local storage after clicking in the like box.
    * **Result:** Joke is removed from the local storage after clicking in the like box.


### Test 10 - addEventListener('DOMContentLoaded'...) - gallery.js

* Trigger event to load DOM content.
    * **Expected**: Meme pictures are loaded from imgsrc.txt and displayed to the page.
    * **Result**: Meme pictures are loaded from imgsrc.txt and displayed to the page.

### Test 11 - addImgListener() - gallery.js

* Call function to enlarge the size of the pictures.
    * **Expected:** Pictures are enlarged after clicking on them.
    * **Result:** Pictures are enlarged after clicking on them.

### Test 12 - setGalleryPictures() - ui.js

* Call method to create a new img element and set the attributes of it after getting a path as an input.
    * **Expected:** New img element created with attributes set to it.
    * **Result:** 'Uncaught (in promise) ReferenceError: img is not defined.
* **Bugfix-0.2 executed:**  "img" changed to "line"
* **New test:**
    * **Expected:** New img element created with attributes set to it.
    * **Result:** New img element created with attributes set to it.

### Test 13 - dipslayCategs() - ui.js

* Call method to display a dropdown menu with the categories.
    * **Expected:** Display a dropdown menu with the possible categories.
    * **Result:** Display a dropdown menu with the possible categories.

### Test 14 - clearCards() - ui.js

* Call method to clear screen from cards before loading the chosen category's jokes.
    * **Expected:** Screen is cleared from the cards.
    * **Result:** Screen is cleared from the cards.

### Test 15 - removeLoading() - ui.js

* Call method to remove loading gif from home page.
   * **Expected:** After the jokes are queried the loading gif disappears.
   * **Result:** After the jokes are queried the loading gif disappears.

### Test 16 - addHeader() - ui.js

* Call method to display current category's header.
   * **Expected:** Current category's header is displayed.
   * **Result:** Current category's header is displayed.

### Test 17 - createJokeCards() - ui.js

*  Call method to get the joke container element, crete and set divs, heads, labels, inputs,bodys, paragraphs to the jokes.
    * **Expected:** To get joke container, created and set new elements.
    * **Result:** Got joke container, created and set new elements.

### Test 18 - setMemeOfTheDay() - ui.js

* Call method to set attributes to meme of the day.
    * **Expected:** Attributes to be set.
    * **Result:** Attributes are set.

### Test 19 - setModalData(src) - ui.js

* Call method to set the attributes of the enlarged picture.
    * **Expected:** Attributes to be set
    * **Result:** Attributes are set.

### Test 20 - noContentYet(msg) - ui.js

* Call method to print text to the screen in case there are no jokes saved in the local storage.
    * **Expected:** Text on the screen to inform the user that it has no jokes saved.
    * **Result:** Text on the screen to inform the user that it has no jokes saved.

### Test 21 - addButtonListener() - main.js

* Call function to add clicking event to the MORE button.
    * **Expected:** After clicking on the MORE button, load and display more jokes.
    * **Result:** After clicking on the MORE button, more jokes are loaded and displayed.

* Call function to load more jokes to the page after clicking the 'MORE' button.
   * **Expected:** More jokes are loaded.
   * **Result:** More jokes are loaded.

### Test 22 - addLikeListener() - main.js

* Call function to save / remove jokes to / from the local storage after clicking the box next to the 'Like' text.
   * **Expected:** Jokes are saved to local storage after check in the like box.
   * **Result:** Jokes are saved to local storage after check in the like box.
   * **Expected:** Joke sare removed from local storage after uncheck the box.
   * **Result:** Jokes are removed from local storage after uncheck the box.

### Test 23 - addImgListener() - main.js

* Call this function to add clicking event to the images stored in imgContainer.
    * **Expected:** After clicking on memes, their size should be larger.
    * **Result:** After clicking on memes, their size became larger.


### Test 24 - Loading the categories, jokes, and pictures - main.js(52)

* Triggers event to load DOM content of the page such as categories, jokes and pictures.
    * **Expected:** Query jokes, categories, pictures, after jokes are queried remove loading gif.
    * **Result:** Query jokes, categories, pictures, after queried loading gif is removed.


### Test 25 - Listening to categories - main.js(74)

* Add clicking event to categories.
    * **Expected:** After clicking, the screen is cleared from the old cards, the chosen category jokes are displayed, the header is changed according to the category.
    * **Result:**  After clicking, the screen is cleared from the old cards, the chosen category jokes are displayed, the header is changed according to the category.


### Test 26 - Listening to searchbar - main.js(102)

* Add clicking event to searchbar.
    * **Expected:** After clicking on search, display the jokes containing that word.
    * **Result:** After clicking on search, the jokes containing that word are displayed.
    * **Expected:** If the word is not found in none of the jokes then display an informative text to the user that there is no joke containing that word.
    * **Result:** An informative text is displayed to the user that there is no joke containing that word.


### Test 27 - Listening to filter button - main.js(93)

* Filtering the content from inappropriate jokes.
   * **Expected:** Filter box is checked: only appropriate jokes.
   * **Result:** Filter box is checked: only appripriate jokes.
   * **Ecxepted:** Filter box is unchecked: jokes are not filtered.
   * **Result:** Filter box is unchecked: jokes are not filtered.

Tested By: Anna Egyed, 2020.09.27.
