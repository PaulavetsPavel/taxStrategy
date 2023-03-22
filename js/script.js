import data from './data.js';

const { phoneNumber, mistakes, socials } = data

const mistakesItems = document.querySelector('.mistakes__items');
const socialItems = document.querySelector('.contacts-social');
const labelPhone = document.querySelector('.contacts-phone__number')

const displayMistakes = (mistakes) => {
  mistakes.forEach(mistake => {
    const mistakeItem = `<div class="mistakes__item">
    <p class="mistakes-item__number">${mistake.id}</p> 
    <div class="mistakes-item__title"> ${mistake.title}</div>
    <div class="mistakes-item__body">${mistake.content}</div>
    <div class="mistakes-item__link"><a href="#">Learm more</a></div>
                         </div>`
    mistakesItems.insertAdjacentHTML('beforeend', mistakeItem)
  })
}
const displaySocials = (socials) => {
  socialItems.innerHTML = ''
  socials.forEach(({ socialName }) => {
    const socialItem = `<div class="contacts-social__item">
              <a class="contacts-social__link contacts-social__${socialName}" href="#">
              </a>
            </div>`
    socialItems.insertAdjacentHTML('beforeend', socialItem);

  })
}


labelPhone.textContent = phoneNumber;
displaySocials(socials)
displayMistakes(mistakes)

