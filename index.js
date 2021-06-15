const menu = document.querySelector('.menu')

function clickMenu(e) {
  if ((e.target.dataset.toggle === '') & (window.innerWidth <= 992))
    menu.classList.toggle('menu_disabled')
}

menu.addEventListener('click', clickMenu)
