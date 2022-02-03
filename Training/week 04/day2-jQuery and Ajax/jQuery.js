$(document).ready(() => {
    //jQuery code goes here
    var listOfCars = [];
// var submitCarButton = document.getElementById("submit-cars");
var submitCarButton = $("#submit-cars");

// var carMakeInput = document.getElementById("car-make");
var carMakeInput = $("#car-make");
// var carModelInput = document.getElementById("car-model");
var carModelInput = $("#car-model");
// var carYearInput = document.getElementById("car-year");
var carYearInput = $("#car-year");
var carsSubmitElement = document.getElementById("list-of-cars-submitted")

// submitCarButton.addEventListener( "click", () => {
//     event.preventDefault();
submitCarButton.click((e) => {
    e.preventDefault();

    let submittedCar = {
        make: carMakeInput.val(),
        model: carModelInput.val(),
        year: carYearInput.val()
    }

      //print info in the console
      console.log(` Car Information submitted: \nMake:${submittedCar.make}\nModel: 
      ${submittedCar.model}\nYear: ${submittedCar.year}`);

          //attach to soem stored value
    listOfCars.push(new Car(submittedCar.make, submittedCar.model, submittedCar.year));


    //add the submitted car to the OL in the HTML
    // pull innerHTML
    let existingListOfCarsHTML = carsSubmittedElement.html()
    //now add new data
    carsSubmittedElement.html(`
    ${existingListOfCarsHTML}
    <li> 
        <ul>
            <li><bold>Year: ${submittedCar.year}</bold></li>
            <li><bold>Make: ${submittedCar.make}</bold></li>
            <li><bold>Model: ${submittedCar.model}</bold></li>
        </ul>
    </li>`)

    //clear the input fields
    carYearInput.val("");
    carMakeInput.val("");
    carModelInput.val("");

    // alert("Submit was clicked");

    //Old-fashioned XMLHttp Request Format. contains deprecated practices
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200){
            console.log(xhttp.responseText)
        }
    }

    xhttp.open("GET", "./car-data.json", true);
    xhttp.send();

    //JS FETCH
    fetch("./car-data.json")
    .then(response => response.json())
    .then(data => console.log(data))
})
});