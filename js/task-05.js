// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');
const updateOutput = () => {
  const text = inputElement.value.trim();
  outputElement.textContent = text || 'Anonymous';
};
inputElement.addEventListener('input', updateOutput);