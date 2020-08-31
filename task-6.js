const inputRef = document.querySelector('#validation-input');
const inputLengthRef = inputRef.getAttribute('data-length')

inputRef.addEventListener('blur', onInputLength);

function onInputLength() {
    inputRef.value.length >= inputLengthRef ? inputRefValid() : inputRefInvalid();
    console.log(inputRef);
};

function inputRefValid() {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
};

function inputRefInvalid() {
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
}
