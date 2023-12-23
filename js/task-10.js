function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById('controls');
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  destroyBoxes();
  createBoxes(amount);
});
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});