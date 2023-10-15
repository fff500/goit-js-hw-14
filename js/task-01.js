function handleCategories() {
  const categories = document.getElementsByClassName('item');

  console.log(`Number of categories: ${categories.length}`);

  [...categories].forEach((category) => {
    const h2 = category.querySelector('h2');
    const elements = category.querySelectorAll('li');

    console.log(`Category: ${h2.textContent}\nElements: ${elements.length}`);
  });
}

handleCategories();