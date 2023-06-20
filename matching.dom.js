// Handlebars reference and compile
var weekdayTemplate = document.querySelector('.template').innerHTML
var templateFunction = Handlebars.compile(weekdayTemplate)
var displayTemplate = document.querySelector('.tempDisplay')

// html elements references
var date_one = document.querySelector('.date_one')
var date_two = document.querySelector('.date_two')

// initialize Factory Function
var matching = MatchingDays()

// local storage ?????????????? 

// global variables
var day;
let weekday1;
let weekday2;
let errorTimeout;
// event: change of input 

document.addEventListener('DOMContentLoaded', () => {
    date_one.addEventListener('change', () => {

        matching.setWeekdDay1(date_one.value)
        weekday1 = matching.getWeekday1()

        if (matching.match() == true) {
            (document.querySelector('.' + weekday1 + '')).classList.add('green')
           clearTimeout(errorTimeout)
            errorTimeout = setTimeout(() => {
                (document.querySelector('.' + weekday1 + '')).classList.remove('green')
            }, 5000);
        }

        else {
            (document.querySelector('.' + weekday1 + '')).classList.add('blue')
           clearTimeout(errorTimeout)
            errorTimeout = setTimeout(() => {
                (document.querySelector('.' + weekday1 + '')).classList.remove('blue')
            }, 5000);
        // }
        // if (date_one.value && date_two.value) {
        //     date_one.value = ''
        //     date_two.value = ''
        }

    })
    date_two.addEventListener('change', () => {
        // (document.querySelector('.' + weekday2 + '')).classList.remove('green')

        matching.setWeekdDay2(date_two.value)
        weekday2 = matching.getWeekday2()

        if (matching.match() == true) {

            (document.querySelector('.' + weekday2 + '')).classList.add('green')
            clearTimeout(errorTimeout)
            errorTimeout = setTimeout(() => {
                (document.querySelector('.' + weekday2 + '')).classList.remove('green')
            }, 5000);
        }

        else {
            (document.querySelector('.' + weekday2 + '')).classList.add('yellow')
           clearTimeout(errorTimeout)
            errorTimeout = setTimeout(() => {
                (document.querySelector('.' + weekday2 + '')).classList.remove('yellow')
            }, 5000);
        }

        // if (date_one.value && date_two.value) {
        //     date_one.value = ''
        //     date_two.value = ''
        // }
    })
    //display days of week
    displayTemplate.innerHTML = templateFunction({ weekday: matching.display })
})








