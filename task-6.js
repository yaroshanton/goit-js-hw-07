const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputLength);
inputRef.addEventListener('focus', onInputLength);

function onInputLength(event) {
    if (event.type === 'blur') {
        if (inputRef.value.length === +inputRef.dataset.length) {
            inputRef.classList.add('valid');
        } else {
            inputRef.classList.add('invalid');
        }
    } else {
        inputRef.className = '';
    }
}

