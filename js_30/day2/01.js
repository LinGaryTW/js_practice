const second_hand = document.querySelector('.second-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegress = ((seconds / 60) * 360 );
  second_hand.style.transform = `rotate(${secondsDegress}deg)`;
  
  const mins = now.getMinutes();
  const minsDegress = (( mins / 60 ) * 360 );
  min_hand.style.transform = `rotate(${minsDegress}deg)`;

  const hour = now.getHours();
  const hourDegress = (( hour % 12 ) *  30 );
  hour_hand.style.transform = `rotate(${hourDegress}deg)`;
}
setInterval(setDate, 1000)