$(document).ready( () => {
    

    //set the date to the input value with jQuery
    dateInput = $("#dateInput")

    function daysUntil2030(date){
        //create function that shows difference between 1/1/2030
        year2030 = new Date ("1/1/2030").getTime()
        date = new Date(dateInput.val()).getTime()
        dateDifference = Math.abs(year2030 - date)
        daysFrom2030 = parseInt(dateDifference / (1000 * 3600 * 24)) 
        // console.log(`There are ${daysFrom2030} days until 2030 ${year2030} date: ${date} date: ${dateDifference}`)
    }

    $("#fromToday").click( (e) => {
        e.preventDefault()
        daysUntil2030()
        dateInput.val(" ")
    })
    
    //set the parameters to the input values
    date1 = $("#date1")
    date2 = $("#date2") 

    function differenceOfDays(day1, day2){
        //take in 2 parameters
        //get the difference between the dates
        day1 = new Date (date1.val()).getTime()
        day2 = new Date (date2.val()).getTime()
        timeDifference = Math.abs(day1 - day2)
        dayDifference = timeDifference / (1000 * 3600 * 24)

        // if( dayDifference < 0 ){
        //     return dayDifference * -1
        // } 
        // console.log(`difference: ${dayDifference} day 2: `)
        
    }
    //create button that will make days appear
    $("#numberDays").click((e) => {
        e.preventDefault();
        differenceOfDays();
        $(".dayDifference").after(`<p>There are ${dayDifference} days between these dates. </p>`)
        date1.val(" ")
        date2.val(" ")
    })

    
})