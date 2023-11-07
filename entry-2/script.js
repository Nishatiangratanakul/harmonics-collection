const typeBox = document.querySelector(".js-type-box");
const text = "I miss you";
const textArray = text.split("");

let typingPosition = 0;

const typeInterval = setInterval(() => {  
  if (typingPosition >= (textArray.length - 1)) {
    clearInterval(typeInterval);
  }
  
  let letter = textArray[typingPosition];
  
  if (letter === " ") {
    letter = "<span> </span>"
  }
                   
  typeBox.innerHTML += letter;
  //                   ["I", " ", "m" … ]
  //                     0    1    2
  
  typingPosition++;
}, 500);
