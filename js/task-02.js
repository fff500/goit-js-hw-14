const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createIngredientsList(ingredients) {
  const items = ingredients.map((ingredient) => {
    const item = document.createElement('li');

    item.innerHTML = ingredient;
    item.classList.add('item');

    return item;
  });

  document.getElementById('ingredients').append(...items);
}

createIngredientsList(ingredients);