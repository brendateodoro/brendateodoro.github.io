let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(){
    buttons.forEach (btn=>btn.classList.remove("active"));
    this.classList.add('active');
  })
})
function toggleMenu(){
  
  document.getElementById("primaryNav").classList.toggle("hide");
 }
 const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 1
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};