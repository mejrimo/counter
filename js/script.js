// CUSTOM FUNCTION TO CREATE NEW ELEMENTS OF THE COUNTER WITH PROPER 'TAG', 'ID' AND 'TEXT'
function counterCreation(tag, id, text) {
  element = document.createElement(tag);
  element.id = id;
  element.innerHTML = text;
  return element;
}

// CREATION OF NEW ELEMENT AND MODIFICATION OF THE DOM
const container = counterCreation('div', 'container', '');
document.body.append(container);

const counterValue = counterCreation('div', 'counter', '0');
container.append(counterValue);

const buttonContainer = counterCreation('div', 'button-container', '');
container.append(buttonContainer);

const decreaseButton = counterCreation('button', 'decrease', '-');
buttonContainer.append(decreaseButton);

const resetButton = counterCreation('button', 'reset', 'Reset');
buttonContainer.append(resetButton);

const increaseButton = counterCreation('button', 'increase', '+');
buttonContainer.append(increaseButton);

// CREATION OF A FUNCTION THAT ALLOWS YOU TO DECREASE, INCREASE OR RESET THE VALUE OF THE COUNTER
let count = 0;

buttonContainer.addEventListener('click', (event) => {
  const target = event.target;

  switch (target.id) {
    case 'decrease':
      count--;
      break;
    case 'reset':
      count = 0;
      break;
    case 'increase':
      count++;
      break;
  }
  counterValue.innerHTML = count;
});
