// Some Functions will return an Array.
// getElementsByTagName will return an Array
// of elements that match the tag name.

// const body = document.getElementsByTagName("body")[0];
const elementsArray = 
    document.getElementsByTagName ("body");
const body = elementsArray[0];

// grocery list will stop working because of the innerHTML used below. it will remove any eventListeners
body.innerHTML += "<h2>Heading 1</h2>";
body.innerHTML += "<h2>Heading 2</h2>";
body.innerHTML += "<h2>Heading 3</h2>";
body.innerHTML += "<h2>Heading 4</h2>";

// const h2s = document.getElementsByTagName("h2"); other exampe to getElementByTagName

// for lop
// there are three main set-up part of a loop
// - initializing the counting variable
// - the condition to stop the loop
// - the code to update the counting variable

for (let i = 0; i < 10; i++) {
    body.innerHTML += "<h2>Heading" + (i+1) + "</h2>";
}