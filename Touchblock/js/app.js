// ====================SIDEBAR(menu)====================
const asideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

// Открывает меню
menuBtn.addEventListener('click', () => {
  asideMenu.style.display = 'block'
})

// Закрытие меню
closeBtn.addEventListener('click', () => {
  asideMenu.style.display = 'none'
})

// ====================DARK THEME====================
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// ====================Order====================
Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymantStatus}</td>
    <td class="${order.shopping === 'Declined' ? 'danger' : order.shopping === 'Pending' ? 'worning' : 'primary'}">${order.shopping}</td>
    <td class="primaty">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);

});



