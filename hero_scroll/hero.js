const container = document.querySelector(".scroll-content");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

let currentPosition = 0;

function scrollMenu(direction) {
  currentPosition += (direction * 250); // 250px is the width of each item
  if (currentPosition < 0) currentPosition = 0;
  if (currentPosition > (container.scrollWidth - container.clientWidth)) currentPosition = (container.scrollWidth - container.clientWidth);
  container.scrollTo({ left: currentPosition, behavior: "smooth" });
}

arrowLeft.addEventListener("click", () => scrollMenu(-1));
arrowRight.addEventListener("click", () => scrollMenu(1));

//for keyboard support
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    scrollMenu(1);
  } else if (event.key === 'ArrowLeft') {
    scrollMenu(-1);
  }
});