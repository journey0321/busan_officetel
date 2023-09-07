
const toggleBtn = document.querySelector('.m_menu_btn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})