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

### Controller testing: yljokes.js

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

