import { smoothScrolling } from './smoothScrolling';

const btnScroll = document.querySelector('.btn__scroll');
btnScroll.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export { scrollToTop };
