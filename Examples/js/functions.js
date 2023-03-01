//variable review
let greeting = "Good evening";
console.log(greeting);

//Simple Function
function greet() {
    console.log(greeting);
}

greet();

//Function with an input parameter 
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Kayla");

//Function with input parameter
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;
}

greetUserOnPage("Kayla");

// Function that outputs (or "returns") a value
function getUserGreeting(username) {
    return greeting + ", " + username + "! How can I help you?";
}

getUserGreeting("Kayla"); //won't do anything
console.log(
    getUserGreeting("Kayla")
    );

// Function using another function 
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("Kayla DeMarco");