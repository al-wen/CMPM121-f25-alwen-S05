// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const buttonID = "increment",
  displayID = "counter",
  heading = "CMPM 121 Project";

function updateUI(counterElement: HTMLSpanElement) {
  counterElement.innerHTML = `${counter}`;
  document.title = "Clicked " + counter;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

function setupUI() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${heading}</h1>
    <p>Counter: <span id="${displayID}">0</span></p>
    <button id="${buttonID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

function events(counterElement: HTMLSpanElement) {
  // Get the increment button element from the document
  const incrementButton = document.getElementById(buttonID);
  // Get the decrement button element from the document
  const decrementButton = document.getElementById("dec");
  // Get the reset button element from the document
  const resetButton = document.getElementById("reset");

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    counter++;
    updateUI(counterElement);
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    counter--;
    updateUI(counterElement);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    counter = 0;
    updateUI(counterElement);
  });
}

function setup() {
  setupUI();
  // Get the counter span element from the document
  const counterElement = document.getElementById(displayID) as HTMLSpanElement;
  if (!counterElement) {
    return;
  }
  events(counterElement);
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
