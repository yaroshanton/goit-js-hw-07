const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

const ingredientsItems = () => ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.textContent = ingredient;
    return itemList;
});

ingredientsList.append(...ingredientsItems())
