let javascriptButton = document.querySelector('#cssJavascriptBtn')

let btnClickCounter = 0

javascriptButton.addEventListener('click', () => {
  // add one to click counter
  btnClickCounter++
  if (btnClickCounter === 3) {
    // reset click counter
    btnClickCounter = 0
    // add random colour to javascriptButton
    javascriptButton.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
})
