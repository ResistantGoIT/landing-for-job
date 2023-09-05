const sliderLine = document.querySelector('.slider__line');
const sliderImages = Array.from(sliderLine.children);
const sliderDots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider')

let position = 0,
   dotIndex = 0;

window.addEventListener('resize', showSlide)
function showSlide() {
   sliderWidth = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
   sliderImages.forEach(image => image.style.width = sliderWidth + 'px')
}

const thisSlide = (index) => {
   for (let dot of sliderDots) {
      dot.classList.remove('active-dot')
   }
   sliderDots[index].classList.add('active-dot')
}

sliderDots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      position = 1920 * index;
      sliderLine.style.left = -position + 'px';
      thisSlide(index);
   })
})

