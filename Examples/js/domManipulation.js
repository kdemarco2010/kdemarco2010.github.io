// The DOM (Documentation Object Model)
// is the representation of your web page
// (including the HTML and CSS) in JavaScript

// This will get us a JS reference to the
// HTML element with the specified ID
// (remember, JS is case-sensitive)
let body = document.getElementById("myBodyElement");

body.style.backgroundColor = "thistle";

// 'innerHTML' is a property that contains
// all of the chils HTML code inside that element.
// IF we reassign a value to it, we will override
// any existing HTML with our own HTML.
// (Inspect your page to verify this!)
body.innerHTML = "<h1>Hello World!</h1>";

// We can also append HTML to 'innerHTML'
body.innerHTML = 
    body.innerHTML + 
    "<p id='myParagraph'>This was written with dynamic JS!</p>";

// The += operator is equivalent to the code above
body.innerHTML += "<p>Here's another paragraph</p>";

// We can also get JS references to HTML elements
// that we added dynamically
let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "white";
myParagraph.style.fontWeight = "bold";

// We can combine what we learned today to build
// a very simple 'light/dark' mode for our page

let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "#333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333";
}