// FUNZIONE PER CREARE NUOVI ELEMENTI DEL COUNTER CON 'TAG', 'ID' E 'TESTO'
function counterCreation(tag, id, text) {
  element = document.createElement(tag);
  element.id = id;
  element.innerHTML = text;
  return element;
}

// CREAZIONE DEI NUOVI ELEMENTI
const container = counterCreation('div', 'container', '');
document.body.append(container);

const counterValue = counterCreation('div', 'counter', '0');
container.append(counterValue);

const buttonContainer = counterCreation('div', 'button-container', '');
container.append(buttonContainer);

const decreaseButton = counterCreation('button', 'decrease', '-');
buttonContainer.append(decreaseButton);

const increaseButton = counterCreation('button', 'increase', '+');
buttonContainer.append(increaseButton);

// CREAZIONE DELLA FUNZIONE CHE PERMETTE DI AGGIUNGERE O SOTTRARRE '1' AL VALORE DEL COUNTER
let count = 0;

buttonContainer.addEventListener('click', () => {
  const target = event.target;

  switch (target.id) {
    case 'decrease':
      count -= 1;
      counterValue.innerHTML = count;
      break;
    case 'increase':
      count += 1;
      counterValue.innerHTML = count;
      break;
  }
});
