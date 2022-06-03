// Делаем загрузку из json файла
function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

// Добавляем спиннер
spinnerPage.render();

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    // !Добавить сеттаймаут
    // Добавляем спиннер на страницу
    spinnerPage.handleClear();
    // После спиннера будет выводится основной контент страницы
    render();
  })
  .catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
  });
