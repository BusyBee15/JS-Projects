const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = deadline.querySelectorAll('h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()


// let futureDate = new Date(2022, 6, 5, 11, 30, 0)
// console.log(futureDate)
const futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const day = weekdays[futureDate.getDay()]
// console.log(month)

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${minutes}am`


// future time in milli seconds
const futureTime = futureDate.getTime()
// console.log(futureTime)
// console.log(new Date().getTime())

function getRemainingTime(){
   const today = new Date().getTime()
   const t = futureTime - today;

   // values in milli second
   const oneDay = 24*60*60*1000
   const oneHour = 60*60*1000
   const oneMin = 60*1000

   let days = t/oneDay
   days = Math.floor(days)

   let hours = (t%oneDay) / oneHour
   hours = Math.floor(hours)

   let minutes = (t%oneHour) / oneMin
   minutes = Math.floor(minutes)

   let seconds = (t%oneMin) / 1000
   seconds = Math.floor(seconds)

   
   function format(value){
    if(value<10){
        return value = `0${value}`
    }
    return value
   }
   //set values array
   const values = [days, hours, minutes, seconds]
   items.forEach(function(item, index){
        item.innerHTML = format(values[index])
   })
   if(t<0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
   }

}

let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();
