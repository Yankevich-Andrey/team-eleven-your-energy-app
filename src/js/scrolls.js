let buttonTop = document.getElementById('buttonTop');

window.addEventListener('scroll', function () {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
});

buttonTop.addEventListener('click', function () {
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 30);
  }
}

export function createSmoothScrollBottom(elementWidth, direction) {
  const { height: cardHeight } = elementWidth;
  const scrollAmount = cardHeight * direction;
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

export function createSmoothScrollUp(elementToScrollTo) {
  elementToScrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
