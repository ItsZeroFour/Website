class Error {
    render() {
        const html = `
            <div class="error__container">
                <div class="error__message">
                    <h1>504</h1>
                    <p>Возникла ошибка на стороне сервера.</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
