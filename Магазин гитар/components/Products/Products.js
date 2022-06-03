class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct === true) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    /*
      Передаем это значение сюда из Header.js для того,
      что бы кол-во товаров в корзине автоматически обновлялись
    */
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = "";
    // Генерируем HTML документ
    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="products-element">
          <span class="products-element__name">${name}</span>
          <img class="products-element__img" src="${img}">
          <span class="products-element__price">💎 ${price.toLocaleString()} USD</span>
          <!-- this - узнаем, по какой именно кнопке мы нажали -->
          <button class="products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
            ${activeText}
          </button>
        </li>
      `;
    });

    // Записываем сгенерированные HTML документ в тег ul
    const html = `
      <ul class="products-container">
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

// Рендерим полученные HTML документ на страницу
const productsPage = new Products();
