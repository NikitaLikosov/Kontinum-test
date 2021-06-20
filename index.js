const menu = document.querySelector('.menu')

function clickMenu(e) {
  if ((e.target.dataset.toggle === '') & (window.innerWidth <= 992))
    menu.classList.toggle('menu_disabled')
}

menu.addEventListener('click', clickMenu)

const password = document.querySelector('.main__item[type=password]')
const tel = document.querySelector('.main__item[type=tel]')
tel.addEventListener('input', function (e) {
  if (e.target.value === '+') {
    return
  }
  let input = e.target.value.replace(/\D/g, '')
  let formattedInputValue = '+7 ('
  if (!input) {
    //is null
    return (e.target.value = '')
  }
  if (['7', '8'].includes(input[0])) {
    //Rusian phones number formatted
    input = input.substring(1)
  }

  //add (, ),  -
  formattedInputValue += input.substring(0, 3)
  if (input.length >= 4) {
    formattedInputValue += ') ' + input.substring(3, 6)
  }
  console.log(input)
  if (input.length >= 7) {
    formattedInputValue += '-' + input.substring(6, 8)
  }
  if (input.length >= 9) {
    formattedInputValue += '-' + input.substring(8, 10)
  }

  e.target.value = formattedInputValue
})
tel.addEventListener('keydown', function (e) {
  //delete first symbols
  if (e.target.value === '+7 (' && e.keyCode === 8) {
    e.target.value = ''
  }
})
password.addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/\W/g, '')
})
