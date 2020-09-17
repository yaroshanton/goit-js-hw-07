const counterValueRef = document.querySelector('#value')
const incrementRef = document.querySelector('button[data-action="increment"]')
const decrementRef = document.querySelector('button[data-action="decrement"]')

let counterValue = +counterValueRef.textContent;

incrementRef.addEventListener('click', onIncrementRef);
decrementRef.addEventListener('click', onDecrementRef);

function onIncrementRef() {
    counterValue++;
    counterValueRef.textContent = counterValue
    console.log(counterValue);
}

function onDecrementRef() {
    counterValue -= 1;
    counterValueRef.textContent = counterValue
    console.log(counterValue);
}