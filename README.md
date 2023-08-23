# tour-some-sugar-on-me

Step 1: Analytical Thinking
    Which modules should you create?

        * main.js / database.js / bands.js / venues.js / bookings.js

    What is the responsibility of each module?

        * main.js - invoke functions from the other modules
        * databse.js - house a list of data to be used by the modules
        * bands.js - to create a list of bands and export an html string so they can be viewed / also house the eventListener for a mouse click on bands
        * venues.js - to create a list of venues and export an html string so they can be viewed / also house the eventListener for a mouse click on venues
        * bookings.js - to create a list of bookings and export an html string so they can be viewed / also house the eventListener for a mouse click on bookings

    What functions should be in which modules?

        * each function should be invoked on the main.js from the module that represents the data it should produce

    What is the responsibility of each function?

        * each funciton should return an html string that will let the user view the information on the webpage

    What should each function return?

        * each funciton should return an html string that will let the user view the information on the webpage

Step 2: Algorithmic Thinking

    In which order should you invoke your functions?

        * in the order they should be displayed on the webpage

    What data do you need to get from your database when an event listener is triggered?

        * bands.js - the venue names the band is playing at

        * venues.js - the band names that are playing at the venue

        * bookings.js - all the information about the band playing at that booking

    In what order should the data be navigated with for..of loops?

        * I only have two functions that will be using parameters. The first one I will need is a function to sort my bookings by the date they are being played. The second one will be a function to use the date, that is an integer represented as YYYYMMDD, and turn it into a long-form date so its readable by the user.

        * The for...of loops will need to first navagate through the data that has been clicked on to find a matching band or venue id. Then it will navigate with nested for...of loops and if statements to narrow the data down.

    What is the spcific algorithm for each function? Does the function need parameters? Should it return something?

        * This can be viewed in bands, venues, and bookings moduels.


Step 3: Visualize the Solution

    Draw a dependency graph
        * Can be found at dependency-graph.dio in my dir

    Draw a sequence diagram
        * Can be found at sequence-diagram.txt in my dir