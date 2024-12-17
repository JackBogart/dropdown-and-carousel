import 'normalize.css';
import '../css/style.css';

import { toggleDropdown } from '@jackbogart/dropdown-menu';
import { createImageCarousel } from '@jackbogart/image-carousel';

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
dropdown.addEventListener('click', () => {
  toggleDropdown(dropdownContent);
});

const slider = document.querySelector('.carousel-slider');
const imageCarousel = createImageCarousel(
  slider,
  4000,
  toggleActiveDot,
  toggleActiveDot,
);
const rightBtn = document.querySelector('.right');

rightBtn.addEventListener('click', () => {
  toggleActiveDot();
  imageCarousel.next();
  toggleActiveDot();
});

const leftBtn = document.querySelector('.left');
leftBtn.addEventListener('click', () => {
  toggleActiveDot();
  imageCarousel.prev();
  toggleActiveDot();
});

function toggleActiveDot() {
  document
    .querySelector(`.nav-dot[data-index="${imageCarousel.getIndex()}"]`)
    .classList.toggle('active');
}

const navButtons = document.querySelectorAll('.nav-dot');
navButtons.forEach((button) =>
  button.addEventListener('click', (element) => {
    toggleActiveDot();
    imageCarousel.setIndex(parseInt(element.target.dataset.index));
    toggleActiveDot();
  }),
);
