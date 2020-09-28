# Testing protocol

## Testing the fronted
Testing the views should happens across different kind of browsers:
* Mozilla
* Chrome
* Other available browsers

What to look for when testing the view:
* Buttons direct us to the right HTML page
* Navbar menu items work properly
* All buttons react to clicks, searchbar reacts to writing
* Checkboxes are checked and unchecked when clicked
* Drowdown menus are displayed, they direct us to the right page/do the right mechanism
* Gallery displays the memes, there is no missing picture
* You liked jokes page displays jokes, or header
* Modals pop up
* Responsivity should be tested by changing the browser size, testing should be implemented on mobile phones

### Rules
* If somethings throws an error bugfix tasks should be issued on Trello with the description of the problem and after fixing that problem, new tests should be implemented. 
* These issues should be tested on every platform and browser. 
* Only perfect functionality is acceptable here so everything should look and work as expected.
* Screenshots are appriciated.

## Testing the backend

Every method should be tested in some capacity depending on their role:
* Event listeners and functions containing event listeners should be tested by triggering the event they are bound to
* If there is an if statement in the function all the possibilities should be tested
* If a function generates a new element every component should be tested of that element, for example: Like button on cards.
* If some mecahnism cannot be determined whether it has succeeded, then console.log() can be used in order to be sure it works.
* Dao and util methods should be tested by using console.log() and inspecting the response or by comparing it to an "expected" variable
* Local storage can be tested by inspecting the browser

### Rules

* If somethings throws an error bugfix tasks should be issued on Trello with the description of the problem and after fixing that problem, new tests should be implemented. 
* Only the expected event should trigger the listener
* Listener result should be the exact same as we expect
* Dao and util methods should be the same as we expect
* API's successability rate is 98%, so it can happen that sometimes it fails but 2% failure is acceptable

# Testers:
* Mátyás Fenyvesi: Frontend, Ubuntu - Chromium, Firefox, 2020.09.27.
* Csaba Szilágyi: Frontend, Windows 10 - Google Chrome, Firefox, Opera, Edge, Mobil 2020.09.27.
* Anna Egyed - Controllers - Google Chrome, Firefox 2020.09.27.
* Adrienn Tuba - DAO, Windows 10 - Google Chrome, Firefox, Mobile 2020.09.26.