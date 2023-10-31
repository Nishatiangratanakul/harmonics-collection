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

var result = document.querySelector(.js-result);

result.innerText = bookshelf.shelfOne.books;

// variable names (follow after var) can be anything besides reserved words ie. var var

