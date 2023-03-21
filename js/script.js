import mistakes from './data.js';

const mainItems = document.querySelector('.mistakes__items');

const displayMistakes = (mistakes) => {
  mistakes.forEach(mistake => {
    const mistakeItem = `<div class="mistakes__item">
    <p class="mistakes-item__number">${mistake.id}</p> 
    <div class="mistakes-item__title"> ${mistake.title}</div>
    <div class="mistakes-item__body">${mistake.content}</div>
    <div class="mistakes-item__link"><a href="#">Learm more</a></div>
                         </div>`
    mainItems.insertAdjacentHTML('beforeend', mistakeItem)
  })
}

displayMistakes(mistakes)