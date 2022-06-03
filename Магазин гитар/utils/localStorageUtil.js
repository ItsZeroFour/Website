class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  // Записываем данные в localStorage
  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    // Если есть одинаковые товары - удаляем
    if (index === -1) {
      products.push(id);
      // Проверяем, добавлен ли товар в корзину
      pushProduct = true;
    } else {
      // Удаляем 1 элемент при помощи splice
      products.splice(index, 1);
    }

    // Записываем полученные данные в localStorage при помощи setItem
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  }
}

// Выводим данные в localStorage
const localStorageUtil = new LocalStorageUtil();

