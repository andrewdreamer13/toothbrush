"use strict";
// come back function 

window.onblur = () => {
  document.querySelector('head title').innerHTML = 'Come back!';
}
window.onfocus = () => {
  document.querySelector('head title').innerHTML = 'Toothbrush';
}

// header burger menu
burger();

function burger() {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const menu = document.querySelector('.header__nav');
  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('header__nav-transform');
    document.querySelector('.span-one').classList.toggle('span-one-transform');
    document.querySelector('.span-two').classList.toggle('span-two-transform');
    document.querySelector('.span-three').classList.toggle('span-three-transform');
    document.querySelectorAll('.header__list-item').forEach((element) => {
      element.classList.toggle('header__list-item-transform');
    })
    document.body.classList.toggle('no-scroll');
  })
} // End of burger

// download app window
downloadApp();

function downloadApp() {
  const open = document.querySelector('.header__download');
  const close = document.querySelector('.window__close');
  const appWindow = document.querySelector('.window');
  const appWindowInner = document.querySelector('.window__inner');
  open.addEventListener('click', () => {
    appWindow.classList.add('window-visible');
    appWindowInner.classList.add('window__inner-translate');
    document.body.classList.add('no-scroll');

  })
  close.addEventListener('click', () => {
    appWindow.classList.remove('window-visible');
    appWindowInner.classList.remove('window__inner-translate');
    document.body.classList.remove('no-scroll');
  })
  window.onclick = function (e) {
    if (e.target == appWindow) {
      appWindow.classList.remove('window-visible');
      appWindowInner.classList.remove('window__inner-translate');
      document.body.classList.remove('no-scroll');
    }
  }
}

// press google play and app store links
const modalLinks = document.querySelectorAll('.window__link');
modalLinks.forEach(link => {
  link.addEventListener('mousedown', function () {
    this.classList.add('window__link-pressed');
  })
  link.addEventListener('mouseup', function () {
    this.classList.remove('window__link-pressed');
  })

  link.addEventListener('touchstart', function () {
    this.classList.add('window__link-pressed');
  })
  link.addEventListener('touchend', function () {
    this.classList.remove('window__link-pressed');
  })
})


// Heading background slider
changeBackground();

function changeBackground() {
  let imgList = ['url(images/heading-bg-2.jpg)', 'url(images/heading-bg-5.jpg)', 'url(images/heading-bg-6.jpg)', 'url(images/heading-bg-1.jpg)', ];
  const heading = document.querySelector('.heading');
  let i = 0;

  function timer() {
    setInterval(() => {
      if (i == imgList.length) {
        i = 0;
      }
      heading.style.backgroundImage = imgList[i];
      i++;
    }, 3000);
  }
  timer();
}

// toothbrush transformOne
brushTransformOne()

function brushTransformOne() {
  document.addEventListener('scroll', () => {
    const brushBlock = document.querySelector('.description');
    const brush = document.querySelector('.description__toothbrush-img ');

    let windowCenter = (window.innerHeight) + window.scrollY;
    let scrollOffSet = brushBlock.offsetTop + (brushBlock.offsetHeight / 2);

    if (windowCenter >= scrollOffSet) {
      brush.classList.add('scale-transform');

    } else {
      brush.classList.remove('scale-transform');

    }
  })
} // end of brushTransformOne

brushTransformTwo()

function brushTransformTwo() {
  document.addEventListener('scroll', () => {
    const brushBlock = document.querySelector('.description');
    const brush = document.querySelector('.brush-one');

    let windowCenter = (window.innerHeight) + window.scrollY;
    let scrollOffSet = brushBlock.offsetTop + (brushBlock.offsetHeight / 2);

    if (windowCenter >= scrollOffSet) {
      brush.classList.add('scale-transform');

    } else {
      brush.classList.remove('scale-transform');

    }
  })
} //end of brushTransformTwo

brushTransformThree()

function brushTransformThree() {
  document.addEventListener('scroll', () => {
    const brushBlock = document.querySelector('.description');
    const brush = document.querySelector('.brush-two');

    let windowCenter = (window.innerHeight) + window.scrollY;
    let scrollOffSet = brushBlock.offsetTop + (brushBlock.offsetHeight);

    if (windowCenter >= scrollOffSet) {
      brush.classList.add('scale-transform');

    } else {
      brush.classList.remove('scale-transform');

    }
  })
} //end of brushTransformThree

brushTransformFour()

function brushTransformFour() {
  document.addEventListener('scroll', () => {
    const brushBlock = document.querySelector('.mighty');
    const brushOne = document.querySelector('.img-one');
    const brushTwo = document.querySelector('.img-two');

    let windowCenter = (window.innerHeight) + window.scrollY;
    let scrollOffSet = brushBlock.offsetTop + (brushBlock.offsetHeight / 2);

    if (windowCenter >= scrollOffSet) {
      brushOne.classList.add('height-transform');
      brushTwo.classList.add('height-transform');

    } else {
      brushOne.classList.remove('height-transform');
      brushTwo.classList.remove('height-transform');

    }
  })
} //end of brushTransformFour

sensetiveOpacity()

function sensetiveOpacity() {
  document.addEventListener('scroll', () => {
    const sensBlock = document.querySelector('.sensetive');
    const imgOne = document.querySelector('.sensetive__tooth');
    const imgTwo = document.querySelector('.pin-one ');
    const imgThree = document.querySelector('.pin-two ');

    let windowCenter = (window.innerHeight) + window.scrollY;
    let scrollOffSet = sensBlock.offsetTop + (sensBlock.offsetHeight / 2);

    if (windowCenter >= scrollOffSet) {
      imgOne.classList.add('opacity');
      imgTwo.classList.add('opacity');
      imgThree.classList.add('opacity');

    } else {
      imgOne.classList.remove('opacity');
      imgTwo.classList.remove('opacity');
      imgThree.classList.remove('opacity');

    }
  })
} //end of sensetiveOpacity

// Show pins on toothbrush
showPin()

function showPin() {
  const cards = document.querySelectorAll('.spesification__card');
  const pins = document.querySelectorAll('.spesification__pin');

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      cards.forEach(card => {
        card.classList.remove('card-hover');
      })
      cards[index].classList.add('card-hover');

      pins.forEach((pin, pinIndex) => {
        pinIndex = index;
        pins.forEach(pin => {
          pin.classList.remove('visibility');
        })
        pins[pinIndex].classList.add('visibility');
      })
    })
  })
}