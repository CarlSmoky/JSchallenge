const element = document.querySelector('#element');
const wrapper = document.querySelector('#wrapper');

const moveRight = () => {
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const elementWidth = element.getBoundingClientRect().width;
  const currentPosition = parseInt(element.style.left || 0, 10);
  console.log('currentPosition: ', currentPosition);
  console.log('wrapperWidth: ', wrapperWidth);
  console.log('elementWidth: ', elementWidth);
  if (currentPosition <= wrapperWidth - elementWidth) {
    element.style.left = `${currentPosition + 100}px`;
  }
};

element.addEventListener('click', moveRight);