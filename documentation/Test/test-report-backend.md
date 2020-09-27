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