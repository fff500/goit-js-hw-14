function handleCategories() {
  const categories = document.getElementsByClassName('item');

  console.log(`Number of categories: ${categories.length}`);

  [...categories].forEach((category) => {
    const h2 = category.firstElementChild;
    const elements = category.lastElementChild.children;

    console.log(`Category: ${h2.textContent}\nElements: ${elements.length}`);
  });
}

handleCategories();