const categories = {
    Protein: ['Chicken', 'Beef', 'Pork'],
    Grain: ['Rice', 'Bread'],
    Vegetable: ['Potato', 'Cabbage','Carrots'],
    Spice: ['Curry Powder', 'Pepper Powder', 'Garlic Powder'],
};

// HTML elements for the popout
const popout = document.getElementById('popout');
const popoutContent = document.getElementById('popout-content');
const popoutCloseButton = document.getElementById('popout-close');

// Function to randomize categories and display a random dish name in the popout
function randomizeCategories() {
    const randomizedIngredients = {};

    const interval = 100;
    const duration = 1500;

    for (const category in categories) {
        const ingredientBox = document.getElementById(`${category.toLowerCase()}-box`);
        const options = categories[category];
        let index = 0;

        const intervalId = setInterval(() => {
            ingredientBox.textContent = options[index];
            index = (index + 1) % options.length;
        }, interval);

        setTimeout(() => {
            clearInterval(intervalId);
            const randomIndex = Math.floor(Math.random() * options.length);
            randomizedIngredients[category] = options[randomIndex];
            ingredientBox.textContent = options[randomIndex];
        }, duration);
    }

    // Delay opening the popout for the same duration as the randomization
    setTimeout(() => {
        const randomDish = generateRandomDish(randomizedIngredients);
        popoutContent.textContent = randomDish;
        popout.style.display = 'block';
    }, duration);
}

// Function to open the popout
function openPopout() {
    popout.style.display = 'block';
}

// Function to close the popout
function closePopout() {
    popout.style.display = 'none';
}

// Function to generate a random dish name
function generateRandomDish(ingredients) {
    return `Delicious ${ingredients.Protein} with ${ingredients.Grain}, ${ingredients.Vegetable}, and a touch of ${ingredients.Spice}`;
}

// Event listener for the "Randomize" button
document.getElementById('randomize-button').addEventListener('click', randomizeCategories);

// Event listener for the "Close" button within the popout
popoutCloseButton.addEventListener('click', closePopout);

// Event listener to close the popout when clicking outside of it
popout.addEventListener('click', (event) => {
    if (event.target === popout) {
        closePopout();
    }
});

const dishMap = {
    'Chicken_Rice_Potato_Curry Powder': 'Chicken Rice Curry',
    'Chicken_Rice_Potato_Pepper Powder': 'Spicy Chicken Rice',
    'Chicken_Rice_Potato_Garlic Powder': 'Garlic Chicken Rice',

    'Chicken_Rice_Cabbage_Curry Powder': 'Curry Cabbage Chicken',
    'Chicken_Rice_Cabbage_Pepper Powder': 'Spicy Cabbage Chicken',
    'Chicken_Rice_Cabbage_Garlic Powder': 'Garlic Cabbage Chicken',

    'Chicken_Rice_Carrots_Curry Powder': 'Curry Carrots Chicken',
    'Chicken_Rice_Carrots_Pepper Powder': 'Spicy Carrots Chicken',
    'Chicken_Rice_Carrots_Garlic Powder': 'Garlic Carrots Chicken',

    'Chicken_Bread_Potato_Curry Powder': 'Curry Breaded Chicken',
    'Chicken_Bread_Potato_Pepper Powder': 'Spicy Breaded Chicken',
    'Chicken_Bread_Potato_Garlic Powder': 'Garlic Breaded Chicken',

    'Chicken_Bread_Cabbage_Curry Powder': 'Curry Cabbage Breaded Chicken',
    'Chicken_Bread_Cabbage_Pepper Powder': 'Spicy Cabbage Breaded Chicken',
    'Chicken_Bread_Cabbage_Garlic Powder': 'Garlic Cabbage Breaded Chicken',

    'Chicken_Bread_Carrots_Curry Powder': 'Curry Carrots Breaded Chicken',
    'Chicken_Bread_Carrots_Pepper Powder': 'Spicy Carrots Breaded Chicken',
    'Chicken_Bread_Carrots_Garlic Powder': 'Garlic Carrots Breaded Chicken',

    'Beef_Rice_Potato_Curry Powder': 'Beefy Rice Curry',
    'Beef_Rice_Potato_Pepper Powder': 'Spicy Beefy Rice',
    'Beef_Rice_Potato_Garlic Powder': 'Garlic Beefy Rice',

    'Beef_Rice_Cabbage_Curry Powder': 'Curry Cabbage Beef',
    'Beef_Rice_Cabbage_Pepper Powder': 'Spicy Cabbage Beef',
    'Beef_Rice_Cabbage_Garlic Powder': 'Garlic Cabbage Beef',

    'Beef_Rice_Carrots_Curry Powder': 'Curry Carrots Beef',
    'Beef_Rice_Carrots_Pepper Powder': 'Spicy Carrots Beef',
    'Beef_Rice_Carrots_Garlic Powder': 'Garlic Carrots Beef',

    'Beef_Bread_Potato_Curry Powder': 'Curry Breaded Beef',
    'Beef_Bread_Potato_Pepper Powder': 'Spicy Breaded Beef',
    'Beef_Bread_Potato_Garlic Powder': 'Garlic Breaded Beef',

    'Beef_Bread_Cabbage_Curry Powder': 'Curry Cabbage Breaded Beef',
    'Beef_Bread_Cabbage_Pepper Powder': 'Spicy Cabbage Breaded Beef',
    'Beef_Bread_Cabbage_Garlic Powder': 'Garlic Cabbage Breaded Beef',

    'Beef_Bread_Carrots_Curry Powder': 'Curry Carrots Breaded Beef',
    'Beef_Bread_Carrots_Pepper Powder': 'Spicy Carrots Breaded Beef',
    'Beef_Bread_Carrots_Garlic Powder': 'Garlic Carrots Breaded Beef',

    'Pork_Rice_Potato_Curry Powder': 'Pork Rice Curry',
    'Pork_Rice_Potato_Pepper Powder': 'Spicy Pork Rice',
    'Pork_Rice_Potato_Garlic Powder': 'Garlic Pork Rice',

    'Pork_Rice_Cabbage_Curry Powder': 'Curry Cabbage Pork',
    'Pork_Rice_Cabbage_Pepper Powder': 'Spicy Cabbage Pork',
    'Pork_Rice_Cabbage_Garlic Powder': 'Garlic Cabbage Pork',

    'Pork_Rice_Carrots_Curry Powder': 'Curry Carrots Pork',
    'Pork_Rice_Carrots_Pepper Powder': 'Spicy Carrots Pork',
    'Pork_Rice_Carrots_Garlic Powder': 'Garlic Carrots Pork',

    'Pork_Bread_Potato_Curry Powder': 'Curry Breaded Pork',
    'Pork_Bread_Potato_Pepper Powder': 'Spicy Breaded Pork',
    'Pork_Bread_Potato_Garlic Powder': 'Garlic Breaded Pork',

    'Pork_Bread_Cabbage_Curry Powder': 'Curry Cabbage Breaded Pork',
    'Pork_Bread_Cabbage_Pepper Powder': 'Spicy Cabbage Breaded Pork',
    'Pork_Bread_Cabbage_Garlic Powder': 'Garlic Cabbage Breaded Pork',

    'Pork_Bread_Carrots_Curry Powder': 'Curry Carrots Breaded Pork',
    'Pork_Bread_Carrots_Pepper Powder': 'Spicy Carrots Breaded Pork',
    'Pork_Bread_Carrots_Garlic Powder': 'Garlic Carrots Breaded Pork',
};

function generateRandomDish(ingredients) {
    const combinationKey = Object.values(ingredients).join('_');
    return dishMap[combinationKey] || 'Custom Dish (Update the dishMap)';
}

// Use the popout element to display the random dish
function displayRandomDish(randomDish) {
    popoutContent.textContent = randomDish;
    openPopout();
}
