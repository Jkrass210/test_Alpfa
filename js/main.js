function onStopScroll() {
  const body = document.querySelector('body')
  body.classList.toggle('stop-scroll')
}

function offStopScroll() {
  const body = document.querySelector('body')
  body.classList.remove('stop-scroll')
}

const overlay = document.querySelector('.overlay');

function offnav() {
  document.querySelector('.burger').classList.remove('burger--active')
  document.querySelector('.header__nav').classList.remove('header__nav--active')
  offStopScroll()
}

function openNav(el) {
  el.classList.toggle('burger--active');
  document.querySelector('.header__nav').classList.toggle('header__nav--active');
  onStopScroll()
}

const linkNav = document.querySelectorAll('.header__link');

linkNav.forEach(function (elem) {
  elem.addEventListener('click', function() {
    offnav()
    offStopScroll()
  })
});

const choiceBtn = document.querySelectorAll('.choice__btn');

choiceBtn.forEach(function(el, index) {
  el.addEventListener('click', function() {
    const choiceBtnActive = document.querySelector('.choice__btn--active');
    const choiceListActive = document.querySelector('.choice__list--active');
    choiceBtnActive.classList.remove('choice__btn--active');
    choiceListActive.classList.remove('choice__list--active')
    el.classList.add('choice__btn--active');
    const choiceList = document.querySelectorAll('.choice__list');
    choiceList[index].classList.add('choice__list--active')
  })
})

const professionClose = document.querySelectorAll('.profession-close');

professionClose.forEach(function(el) {
  el.addEventListener('click', function() {
    el.classList.toggle('profession-close--active')
    el.nextElementSibling.classList.toggle('profession__info--active')
  })
});

const advantagesItem = document.querySelectorAll('.advantages__item');

advantagesItem.forEach(function(el) {
  const advantagesClose = el.querySelector('.advantages-close');
  const advantagesBottomBox = el.querySelector('.advantages__bottom-box');
  advantagesClose.addEventListener('click', function() {
    const closeBtn = document.querySelectorAll('.advantages-close');
    const closeDesc = document.querySelectorAll('.advantages__bottom-box');
    function close (arr, className, excludeElement) {
      arr.forEach(function(el) {
        if (el !== excludeElement && el.classList.contains(className))
          el.classList.remove(className)
      });
    };
    close(closeBtn, "advantages-close--active", advantagesClose);
    close(closeDesc, "advantages__bottom-box--active", advantagesBottomBox);
    advantagesClose.classList.toggle('advantages-close--active');
    advantagesBottomBox.classList.toggle('advantages__bottom-box--active');
  })
});

const productsBtn = document.querySelectorAll('.products__btn');

productsBtn.forEach(function(el, index) {
  el.addEventListener('click', function() {
    const productsBtnActive = document.querySelector('.products__btn--active');
    const productsListActive = document.querySelector('.products__items-box--active');
    productsBtnActive.classList.remove('products__btn--active');
    productsListActive.classList.remove('products__items-box--active')
    el.classList.add('products__btn--active');
    const productsList = document.querySelectorAll('.products__items-box');
    productsList[index].classList.add('products__items-box--active')
  })
});

/*swiper*/
let swiperBaths = new Swiper(".bathsSwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperHome = new Swiper(".homeSwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperCareer = new Swiper(".careerSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const contactsBtn = document.querySelectorAll('.contacts__btn');

contactsBtn.forEach(function(el, index) {
  el.addEventListener('click', function() {
    const productsBtnActive = document.querySelector('.contacts__btn--active');
    const productsListActive = document.querySelector('.contacts__average--active');
    productsBtnActive.classList.remove('contacts__btn--active');
    productsListActive.classList.remove('contacts__average--active')
    el.classList.add('contacts__btn--active');
    const productsList = document.querySelectorAll('.contacts__average');
    productsList[index].classList.add('contacts__average--active')
  })
});

const directionBtn = document.querySelector('#direction');
const dropdownList = document.querySelector('#dropdownList');
const dropdownInput = document.querySelector('#dropdownInput');
const formChoice = document.querySelectorAll('.form__choice');

directionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  directionBtn.classList.toggle('form__dropdown--active')
  dropdownList.classList.toggle('form__list--active')
});

formChoice.forEach(function (listItem) {
  listItem.addEventListener('click', function(e) {
    e.stopPropagation();
    directionBtn.firstElementChild.innerHTML = this.innerHTML;
    dropdownInput.value = this.dataset.value;
    directionBtn.classList.remove('form__dropdown--active')
    dropdownList.classList.remove('form__list--active')
  })
});

document.addEventListener('click', function(e) {
  if (e.target != directionBtn) {
    directionBtn.classList.remove('form__dropdown--active')
    dropdownList.classList.remove('form__list--active')
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Tab") {
    directionBtn.classList.remove('form__dropdown--active');
    dropdownList.classList.remove('form__list--active');
  }
  if (event.key === "Escape") {
    directionBtn.classList.remove('form__dropdown--active');
    dropdownList.classList.remove('form__list--active');
  }
});

function openForm() {
  const form = document.querySelector('#form');
  form.classList.add('form--active');
  onStopScroll()
}

function closeForm() {
  const form = document.querySelector('#form');
  form.classList.remove('form--active');
  offStopScroll()
}

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap1", {
    center: [55.716671, 37.850173],
    zoom: 14,
  });
  myMap.behaviors.disable("scrollZoom");
}

//валидация
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const resume = document.querySelector('#resume');
const formCheckbox = document.querySelector('#formCheckbox');
const submitBtn = document.querySelector('#submit');

let file = null
let result = false;
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

function validFile () {
  resume.addEventListener('change', function(event) {
    file = event.target.files[0];
    return file
  });
}

function allValid () {
  validFile ();
  if (name.value.length < 2 ||
    !regex.test(phone.value) ||
    directionBtn.innerHTML == "" ||
    !formCheckbox.checked || file === null) {
    result = false
  } else {
    result = true
  }
  return result
}

let pointsValid = [name, phone, directionBtn, resume, formCheckbox];

function addStyleInput (input) {
  if(input === name) {
    if (input.value.length < 2) {
      document.querySelector('#itemName').classList.add('form__item--error')
    } else {
      document.querySelector('#itemName').classList.remove('form__item--error')
    }
  } else if (input === phone) {
    if (!regex.test(input.value)) {
      document.querySelector('#itemPhone').classList.add('form__item--error')
    } else {
      document.querySelector('#itemPhone').classList.remove('form__item--error')
    }
  } else if (input === directionBtn) {
    if (directionBtn.innerHTML === "") {
      directionBtn.classList.add('form__dropdown--error')
    } else {
      directionBtn.classList.remove('form__dropdown--error')
    }
  } else if (input === resume) {
    validFile()
    if(file === null) {
      document.querySelector('#addFile').classList.add('form__label--error')
    } else {
      document.querySelector('#addFile').classList.remove('form__label--error')
    }
  } else if (input === formCheckbox) {
    if(!formCheckbox.checked) {
      document.querySelector('.form__checkbox-castom').classList.add('form__checkbox-castom--error');
    } else {
      document.querySelector('.form__checkbox-castom').classList.remove('form__checkbox-castom--error');
    }
  }
}

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  allValid ();
  if (result === false){
    form.scrollIntoView();
    pointsValid.forEach(function(point){
      addStyleInput(point)
      point.addEventListener('change', function() {
        addStyleInput(point);
      })
    })
  } else {
    document.querySelector('.form__main').classList.add('form__main--none');
    document.querySelector('.form__done').classList.add('form__done--active');
  }
})