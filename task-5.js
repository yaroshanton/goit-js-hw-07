const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

let savedNameRef = nameRef.textContent;

inputRef.addEventListener('input', onInputRef)

function onInputRef(event) {
    nameRef.textContent = event.target.value === '' ? savedNameRef : event.target.value;
}