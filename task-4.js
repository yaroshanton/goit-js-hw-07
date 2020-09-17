const counter = document.querySelector('#counter')
const counterValueRef = document.querySelector('#value')

let counterValue = +counterValueRef.textContent;

const counterHendler = (event) => {
    counterValueRef.textContent = event.target.dataset.action === 'increment' ? ++counterValue : --counterValue;
};

counter.addEventListener('click', counterHendler);
counter.addEventListener('click', counterHendler);