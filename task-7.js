const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputControlRef.addEventListener('input', onInputControl)

function onInputControl(event) {
    textRef.style.fontSize = event.target.value + "px";
}