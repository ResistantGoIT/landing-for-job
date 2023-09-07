const sliderLine = document.querySelector('.slider__line');
const sliderImages = Array.from(sliderLine.children);
const sliderDots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider')


let width = 0,
   dotIndex;

    
function showSlide() {
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width * sliderImages.length + 'px';
   sliderImages.forEach(slide => {
      slide.style.width = width + 'px';
      slide.style.height = 'auto'
   })
   rollSlide(dotIndex)
}
sliderDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
         thisSlide(index);
         dotIndex = index;
         rollSlide(dotIndex);
         
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

function rollSlide(dotIndex) {
   sliderLine.style.left = -(width * dotIndex) + 'px'
}






