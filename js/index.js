const sliderLine = document.querySelector('.slider__line');
const sliderImages = Array.from(sliderLine.children);
const sliderDots = document.querySelectorAll('.dot');

let position = 0,
   dotIndex = 0;

const thisSlide = (index) => {
   for (let dot of sliderDots) {
      dot.classList.remove('active-dot')
   }
   sliderDots[index].classList.add('active-dot')
}

sliderDots.forEach((dot, index) => {
   console.log(dot, index)
   dot.addEventListener('click', () => {
      position = 1920 * index;
      sliderLine.style.left = -position + 'px';
      thisSlide(index);
   })
})

