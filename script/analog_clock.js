// Analog clock
setInterval(() => {
  const deg = 6;
  const hr = document.querySelector('#hr');
  const min = document.querySelector('#min');
  const sec = document.querySelector('#sec');
  let analogDay = new Date();
  let analogHour = analogDay.getHours() * 30;
  let analogMinute = analogDay.getMinutes() * deg;
  let analogSecond = analogDay.getSeconds() * deg;

  hr.style.transform = `rotateZ(${analogHour + (analogMinute / 12)}deg)`;
  min.style.transform = `rotateZ(${analogMinute}deg)`;
  sec.style.transform = `rotateZ(${analogSecond}deg)`;
})
