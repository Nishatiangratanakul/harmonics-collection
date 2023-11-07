var hello ="hello world"

// var = variable
//variabbles are storage places for values

// string - text
// value

// int - integer - number
var int = 9;

// boolean - true/false
var bool = true

// console.log(x) - print text
console.log(hello)

// higher~level data strucutres 

// array

// random fruit

var fruits = ["apple", ["pear"], "mango"]

console.log(fruits);

console.log(fruits[0]);

var rabdinFruitNumber = Math.floor(Math.random() * fruits.length);

console.log(fruits[randomFruitNumber]);

// random color

var colors = ["coral", "dodgerblue", "lime"];

var randomColorNumber = Math.floor(Math.random() * colors.length);

document.body.style.backgroundColor = colors[0]

// const and let 
// more modern functions istead of jar

const thisWillNeverChange = "this text can't change";

thisCanChang =  "something else"

console.log(thisCanChange);

// objects - similar to array, but are unordered
// objects can be acessed in a more friendly way with . syntax

var bookshelf = {
    "shelfOne": {
        "books": ["book 1", ["book 2"]],
        "figurines": ["thing"]
    },
    "shelfTwo": "empty",
    "shelfThree": "big stuff"
};

console.log(bookshelf.shelfOne);

// add this bookshelf to the page with querySelector

var result = document.querySelector(js-result);

result.innerText = bookshelf.shelfOne.books;

// variable names (follow after var) can be anything besides reserved words ie. var var

var myName = "Jack";    // string, a bit of text
var age = 27;           // number
var isTeacher = true;   // boolean, true or false

// array are ordered lists of values, while objects are collections of key-value pairs
var hobbies = [
  "cooking",
  "tennis",
  "gaming"
];

// object non order lists of values, you can order them in here however you would like
var anotherPerson = {
  name: "Bob",
  age: 45,
  likesToCook: false
};

// access the first item in the hobbies array
hobbies[0]; // would give you "cooking"

// access the age property of the anotherPerson object
anotherPerson.age; // would give you 45 as a number, not a string

// Conditionals

var age = 18;

if (age >= 18) {
  console.log("You can vote in the next election!");
}

var mood = "happy";

if (mood === "happy") {
  console.log("😀");
} else if (mood === "sad") {
  console.log("😢");
} else {
  console.log("😐");
}

// What’s up with the triple equals? In JavaScript, the == operator checks for equality of value, but not necessarily type a type check (ie. is this a string). For example, 1 == "1" would evaluate to true, even though the left item is a Number while the right is a String. The === operator checks for both value and type, so 1 === "1" would evaluate to false. It’s generally good practice to use === to avoid unexpected behavior.
// tldr. just use === to avoid the pain

// brackets breakdown 
    // () - conditon, parameters, if statements, etc. 
    // [] is declaring an array
    // {} is declaring an object or a block


// Loops

const fruits = ["apple", "banana", "cherry"];

for (let counter = 0; counter < fruits.length; counter++) {
  console.log(fruits[counter]);
}

/* 
let i=0/counter=0; Initialize - keep track of where you are in the loop to prevent a forever loop - A variable i is set up and initialized with 0. You could also use var

i < fruits.length; Condition - The loop will continue as long as i is less than the length of the fruits array.

i++ Increment - i is increased by 1 after each iteration, which is what allows the loop to eventually end.

++ is a special operator that increments a value by 1.

So, this would output to the console:
    apple
    banana
    cherry

.length is built in to js - there are lots of these built in (ie. pop() - cut off the last thing of an array)
*/

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i].split("").reverse().join("");
}
    
console.log(fruits);  // Output will be ["elppa", "ananab", "yrrehc"]

/* 
This time, we’re using the split(), reverse(), and join() methods to reverse each string in the array. 

split() splits a string into an array of substrings
    "apple".split(""); // ["a", "p", "p", "l", "e"]

reverse() reverses the order of the elements in an array
    ["a", "p", "p", "l", "e"].reverse(); // ["e", "l", "p", "p", "a"]

join() joins all elements of an array into a string:
    ["e", "l", "p", "p", "a"].join(""); // "elppa"  
*/

// Functions - can take input through parameters, perform actions or calculations, and then return an output.

// function declaration
function add(a, b) {
    return a + b;
  }
  
  // usage
  add(2, 3); // 5
  
  function printMood(mood) {
    if (mood === "happy") {
      return "😀";
    } else if (mood === "sad") {
      return "😢";
    } else {
      return "😐";
    }
  }
  
  printMood("sad"); // "😢"

  // basically creates a condensed version of the string - so if you reuse it somewhere else you dont have to type it all out

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");   // "olleh"
  reverseString("goodbye"); // "eybdoog"

  // str = string

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const fruits = ["apple", "banana", "cherry"];
  
  for (let i = 0; i < fruits.length; i++) {
    fruits[i] = reverseString(fruits[i]);
  }
  
  console.log(fruits);  // ["elppa", "ananab", "yrrehc"]

// Document Object Model (DOM) Manipulation -  represents the structure of an HTML document in a web browser

// simple example that adds random fruit to the page
const fruits = ["apple", "banana", "cherry"];

const fruitDisplay = document.querySelector(".fruit-display");

// get a random fruit
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

// add the random fruit to the fruit display
fruitDisplay.textContent = randomFruit;

//EXAMPLE

/* 
html
    <div class="stoplight">
    <div class="light red"></div>
    <div class="light yellow"></div>
    <div class="light green"></div>
    </div>

css
    .light {
    background-color: black;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    }

    .red {
    background-color: red;
    }

    .yellow {
    background-color: yellow;
    }

    .green {
    background-color: green;
    }

    .active {
    border: 5px solid black;
    }
*/

// Get the stoplight element from the HTML
var stoplight = document.querySelector(".stoplight");

// List of all light colors in the new order: red, green, yellow
var lights = ["red", "green", "yellow"];

// Index to keep track of the current active light
var currentLightIndex = 0;

// Make the first light (red) active initially
stoplight.querySelector(".red").classList.add("active");

// Function to change the stoplight color every 2 seconds
setInterval(function() {
  // Find the currently active light
  var activeLight = stoplight.querySelector(".active");

  // Remove the 'active' class from the current light to turn it off
  activeLight.classList.remove("active");

  // Update index to point to the next light in the sequence
  currentLightIndex = (currentLightIndex + 1) % lights.length;

  // Add the 'active' class to the next light to turn it on
  var nextLight = stoplight.querySelector("." + lights[currentLightIndex]);
  nextLight.classList.add("active");

}, 2000); // 2000 milliseconds (or 2 seconds)
