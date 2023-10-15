const input = document.getElementById('name-input');
const outputSpan = document.getElementById('name-output');

function showInputValue(event) {
  outputSpan.textContent = event.target.value || 'Anonymous';
}

input.addEventListener('input', showInputValue);