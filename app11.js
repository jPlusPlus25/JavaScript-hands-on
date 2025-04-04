// Select the button element
let btn = document.querySelector("button");

// Event listener for button click
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3"); // Select h3 element
    let randomColor = getRandomColor(); // Generate a random color

    h3.innerText = randomColor; // Update h3 text with color

    let div = document.querySelector(".box"); // Select the div
    div.style.backgroundColor = randomColor; // Change div background color

    console.log("Color updated to:", randomColor);
});

// Function to generate a random RGB color
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`; // Corrected template literal syntax
}

// Event listener for double-click on button
btn.addEventListener("dblclick", function (event) {
    console.log(event);
    console.log("Button double-clicked");
});

// Select the input element
let inp = document.querySelector("input");

// Event listener for keydown in input field
inp.addEventListener("keydown", function () {
    console.log("A key was pressed");
});

// Select the box div
let box = document.querySelector(".box");

// Event listener for mouse entering the box div
box.addEventListener("mouseenter", function () {
    console.log("Mouse entered the box");
});
