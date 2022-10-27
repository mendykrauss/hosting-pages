const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


document.getElementById('thisYear').innerHTML = new Date().getFullYear();
