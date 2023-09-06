const sliderLine = document.querySelector('.slider__line');
const sliderImages = Array.from(sliderLine.children);
const sliderDots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider')


let width = 0,
   index;

    
function showSlide() {
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width * sliderImages.length + 'px';
   sliderImages.forEach(slide => {
      slide.style.width = width + 'px';
      slide.style.height = 'auto'
   })
   rollSlide(index)
}
sliderDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
         // position = sliderWidth * index + 'px';
         thisSlide(index);
         rollSlide(index);
      })
   })
window.addEventListener('resize', showSlide);
showSlide()

const thisSlide = (index) => {
   for (let dot of sliderDots) {
      dot.classList.remove('active-dot')
   }
   sliderDots[index].classList.add('active-dot')
}

function rollSlide(index) {
   sliderLine.style.left = -width * index + 'px'
}






