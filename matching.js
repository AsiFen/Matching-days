function MatchingDays() {
    days0fWeek = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var day1 = ''
    var day2 = ''

    function setWeekdDay1(inputDateOne) {
        var dateIndex1 = new Date(inputDateOne)
        day1 = days0fWeek[dateIndex1.getDay()]
    }

    function getWeekday1() {
        return day1

    }

    function setWeekdDay2(inputDateTwo) {
        var dateIndex2 = new Date(inputDateTwo)
        day2 = days0fWeek[dateIndex2.getDay()]
    }

    function getWeekday2() {
        return day2
    }

    function display() {
        return days0fWeek
    }
    function match() {
        if (day1 === day2) {
            return true
        }
    }
    // function noMatch(){
    //     return 
    // }

    function errors() {

    }
    return {
        display,
        setWeekdDay1, setWeekdDay2,
        getWeekday1, getWeekday2,
        errors,match

    }
}