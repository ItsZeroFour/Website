// Делаем загрузку страницы
class Spinner {
  // Очищаем страницу и делаем спиннер, пока весь контент не будет загружен
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }

  render() {
    // Генерируем HTML документ
    const html = `
      <div class="spinner__container">
        <img class="spinner__images" src="components/Spinner/img/spiner-animated.svg" alt="loading...">
      </div>
    `;
    // Выводим сгенерированный HTML документ на страницу
    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
