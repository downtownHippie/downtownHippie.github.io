::: The 4 Phases of JavaScript :::

The 4 related documents illustrate an evolution of how JavaScript has been used to interact with a web page.  Each page does the exact same thing -- launch an alert() box when the button is pressed.  But they use slight variations of JavaScript code to accomplish this.

Throughout this course you will start with simple measures in developing JavaScript code and then evolve your development to more modern style of programming with JavaScript.



Phase 1 - Demonstrates the earliest (and still used) form of assigning and capturing an "onclick" event for a button.
When the button is clicked an alert() box will display in the browser.  The JavaScript code to accomplish this is contained within the HTML tag as an attribute.

Phase 2 - Like Phase 1 an attribute is used for the onclick event, but this time the code is moved to a function that is found later in the page.

Phase 3 - This phase introduces a modern concept of Unobtrusive JavaScript.  This is where the JavaScript code is completely separate from any HTML (other than residing in the HTML document).  JavaScript is able to identify the HTML tag by a special function named "getElementById()".  As long as the HTML <button> tag has an ID value, JavaScript can find it.  This is just one way of using JavaScript to "find" HTML elements/objects on a web page.

Phase 4 - Lastly, this phase uses a popular JavaScript library named jQuery.  jQuery allows for a much simpler and straightforward way of "finding" HTML elements/objects on the web page.  This page does the exact same thing as the other pages, but allows for complete separation of JavaScript code from HTML and the ability to easily identify an element on a web page.

