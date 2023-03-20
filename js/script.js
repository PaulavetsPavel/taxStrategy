import mistakes from './data.js';

const mainItems = document.querySelector('.main__items');
for (const mistake of mistakes) {
  mainItems.innerHTML += `
<div class="main__item"><p class="main-item__number">${mistake.id}</p> <div class="main-item__title"> ${mistake.title}</div><div class="main-item__body">${mistake.content}</div><div class="main-item__link">
<a href="#">Learm more</a>
</div>
</div>`;
}
