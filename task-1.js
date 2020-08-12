const allCategoriesRef = document.querySelector('#categories');

const arrayCategories = [...allCategoriesRef.children];

console.log(`В списке ${arrayCategories.length} категории!`);

arrayCategories.forEach((category) => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${category.lastElementChild.children.length}`);
});
