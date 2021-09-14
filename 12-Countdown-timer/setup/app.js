const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 3, 29, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 2, 11, 30, 0);

const years = futureDate.getFullYear();
const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${years} ${hours}:${minutes}am`;

//future time

const futureTime = futureDate.getTime();

function getRemainingTime() {
   const today = new Date().getTime();
   const t = futureTime - today;
   //values in millisecond
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;
   let days = t / oneDay;
   days = Math.floor(days);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinute);
   let seconds = Math.floor((t % oneMinute) / 1000);

   //set values array

   function format(item) {
      if (item < 10) {
         return (item = `0${item}`);
      }
      return item;
   }
   const values = [days, hours, minutes, seconds];

   items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
   });

   if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this givaway has expired</h4>`;
   }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

//1s=1000ms
