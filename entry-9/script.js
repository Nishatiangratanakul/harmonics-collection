const responses = [
  "Spice things up and try a new dish!",
  "The culinary stars say yes!",
  "Your kitchen vibes say no, try another option.",
  "Cooking is the answer to everything!",
  "The recipe for success is in your future.",
  "Ask again after you've had a snack.",
  "Your culinary adventure awaits!",
  "Shake things up in the kitchen and see what happens!",
  "Savor the flavor of life!",
  "The secret ingredient is within you."
];

function shakeMagic8Ball() {
  const magic8Ball = document.getElementById("magic-8-ball");
  const responseElement = document.getElementById("response");

  // Randomly select a response from the array
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  // Display the selected response
  responseElement.textContent = randomResponse;

  // Remove the special class from the initial response if it exists
  responseElement.classList.remove("initial-response");

  // Optional: Add animations or styling for a more dynamic experience
  magic8Ball.classList.add("shake-animation");
  setTimeout(() => {
      magic8Ball.classList.remove("shake-animation");
  }, 1000);
}


function askQuestion() {
  const responseElement = document.getElementById("response");

  // Prompt the user for a question
  const questionInput = window.prompt("Ask me anything:");

  // Check if the user entered a question
  if (questionInput !== null && questionInput.trim() !== "") {
      // Replace the user-entered question with a randomly selected response
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      responseElement.textContent = randomResponse;
  } else {
      // If no question was entered, provide a default response
      shakeMagic8Ball();
  }
}

