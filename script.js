// Get the button element
const foodButton = document.querySelector('.product-food-button');
const toysButton = document.querySelector('.product-toys-button');

// Add a click event listener to the button
foodButton.addEventListener('click', function() {
    // Alert a message when the button is clicked
    alert('You clicked the button!');
});

toysButton.addEventListener('click', function() {
    // Alert a message when the button is clicked
    alert('Milyen feri?');
});
