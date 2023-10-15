let counter = 0;
const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById('value');

function decreaseCounter() {
  counter -= 1;
  counterSpan.textContent = counter;
}

function increaseCounter() {
  counter += 1;
  counterSpan.textContent = counter;
}

minusButton.addEventListener('click', decreaseCounter);
plusButton.addEventListener('click', increaseCounter);