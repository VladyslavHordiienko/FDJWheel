const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.seconds');

let date = new Date();

var date2 = new Date(),
  targetDay = 7, // пятница, начиная с вс=0
  targetDate = new Date(),
  delta = targetDay - date2.getDay();
if (delta >= 0) {
  targetDate.setDate(date2.getDate() + delta);
} else {
  targetDate.setDate(date2.getDate() + 7 + delta);
}
let date3 = new Date(
  targetDate.getFullYear(),
  targetDate.getMonth(),
  targetDate.getDate(),
  12,
  0,
  0,
  0,
);
const deadline = date3;

function getTimeRemaining() {
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

let timeinterval = setInterval(function () {
  day.innerHTML = getTimeRemaining().days;
  hour.innerHTML = getTimeRemaining().hours;
  minute.innerHTML = getTimeRemaining().minutes;
  second.innerHTML = getTimeRemaining().seconds;
  if (getTimeRemaining().total <= 0) {
    clearInterval(timeinterval);
  }
}, 1000);

setInterval(timeinterval, 1000);

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('button-yellow')) {
    document.querySelector('#wheel-block').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  if (e.target.classList.contains('button-y')) {
    document.querySelector('#swiper-block').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  if (e.target.classList.contains('modal__button')) {
    document.body.style.overflow = 'unset';
    document.body.style.overflowX = 'hidden';
    $('.modal').fadeOut('slow');
  }
  if (e.target.classList.contains('popup__photo')) {
    document.querySelectorAll('.popup__img').forEach((el) => el.classList.remove('active'));
    e.target.parentNode.classList.add('active');
  }
});
const wheelSwiper = new Swiper('.swiper', {
  watchOverflow: true,
  navigation: {
    prevEl: '.swiper__prev',
    nextEl: '.swiper__next',
  },
});

const wheel = document.querySelector('#wheel');
const tryCounter = document.querySelector('#tryCounter');
const play = document.querySelector('#play');
let clickCount = 0;
let tryCount = 3;
play.addEventListener('click', function () {
  if (clickCount === 0) {
    tryCount -= 1;
    tryCounter.textContent = tryCount;
    play.style.pointerEvents = 'none';
    wheel.style.transform = 'rotate(-835deg)';
    setTimeout(() => {
      tryCount += 1;
      tryCounter.textContent = tryCount;
      clickCount += 1;
      $('.modal').fadeIn('slow');
      document.querySelector('.modal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
      play.style.pointerEvents = 'all';
    }, 5000);
  }
  if (clickCount === 1) {
    tryCount -= 1;
    tryCounter.textContent = tryCount;
    play.style.pointerEvents = 'none';
    wheel.style.transform = 'rotate(-1585deg)';
    setTimeout(() => {
      clickCount += 1;
      $('.modal__title').html('OHHH..');
      $('.modal__text').html(
        'Désole, mais ce secteur est vide ! Vous avez (2) essais supplémentaires, bonne chance !',
      );
      $('.modal').fadeIn('slow');
      document.querySelector('.modal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
      play.style.pointerEvents = 'all';
    }, 5000);
  }
  if (clickCount === 2) {
    tryCount -= 1;
    tryCounter.textContent = tryCount;
    play.style.pointerEvents = 'none';
    wheel.style.transform = 'rotate(-2195deg)';
    setTimeout(() => {
      $('.popup').fadeIn('slow');
      $('.popup').css('display', 'flex');
      document.body.style.overflow = 'hidden';
    }, 5000);
  }
});
