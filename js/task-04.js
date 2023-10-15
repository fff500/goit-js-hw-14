let counterValue = 0;
const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById('value');

function decreaseCounter() {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
}

function increaseCounter() {
  counterValue += 1;
  counterSpan.textContent = counterValue;
}

minusButton.addEventListener('click', decreaseCounter);
plusButton.addEventListener('click', increaseCounter);