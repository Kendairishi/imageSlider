const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const sliderDiv = document.querySelector('.slider-div');

leftArrow.addEventListener('click', () => handleSlider('left'));
rightArrow.addEventListener('click', () => handleSlider('right'));

function handleSlider(view) {
  let scrollWidth = sliderDiv.offsetWidth;
  let sliderScrollWidth = sliderDiv.scrollWidth - sliderDiv.clientWidth; // Max width
  let sliderScrollLeft = sliderDiv.scrollLeft + scrollWidth; // Amount scrolled

  if (view === 'right') {
    if (sliderScrollLeft > sliderScrollWidth) {
      sliderDiv.style.scrollBehavior = 'auto';
      sliderDiv.scrollLeft = 0;
    } else {
      sliderDiv.style.scrollBehavior = 'smooth';
      sliderDiv.scrollLeft = Math.ceil(sliderDiv.scrollLeft + scrollWidth);
    }
  } else {
    if (sliderScrollLeft === 0 || sliderDiv.scrollLeft === 0) {
      sliderDiv.style.scrollBehavior = 'auto';
      sliderDiv.scrollLeft = sliderScrollWidth;
    } else {
      sliderDiv.style.scrollBehavior = 'smooth';
      sliderDiv.scrollLeft -= scrollWidth;
    }
  }
}
