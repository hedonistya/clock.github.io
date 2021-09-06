// Time
setInterval(() => {
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');
  const day = document.querySelector('.day');
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayNight = 'am';

  if (hours > 12) {
    dayNight = 'pm'
    hours -= 12;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
  day.textContent = dayNight;
});

// Theme
const dark = document.querySelector('.main');
const theme = document.querySelector('.theme');
const dot = document.querySelector('.dot');
const link = document.querySelector('.link')

theme.addEventListener('click', () => {
  dark.classList.toggle('dark');
  theme.classList.toggle('theme-active');
  dot.classList.toggle('dot-active');
  link.classList.toggle('link-active');
})
