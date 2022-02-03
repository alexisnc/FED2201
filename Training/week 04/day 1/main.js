//Dom Manipulation
var listOfCars = [];
var submitCarButton = document.getElementById("submit-cars");

var carMakeInput = document.getElementById("car-make");
var carModelInput = document.getElementById("car-model");
var carYearInput = document.getElementById("car-year");

var carsSubmitElement = document.getElementById("list-of-cars-submitted")

//console.dir(submitCarButton)


submitCarButton.addEventListener( "click", () => {
    event.preventDefault();

    //print info in the console
    console.log(` Car Information submitted: \nMake:${carMakeInput.value}\nModel: 
    ${carModelInput.value}\nYear: ${carYearInput.value}`);

    //attach to soem stored value
    listOfCars.push(new Car(carMakeInput.value, carModelInput.value, carYearInput.value));


    //add the submitted car to the OL in the HTML
    // pull innerHTML
    let existingListOfCarsHTML = carsSubmittedElement.innerHTml
    //now add new data
    carsSubmittedElement.innerHTml= `
    ${existingListOfCarsHTML}
    <li> 
        <ul>
            <li><bold>Year: ${carYearInput.value}</bold></li>
            <li><bold>Make: ${carMakeInput.value}</bold></li>
            <li><bold>Model: ${carModelInput.value}</bold></li>
        </ul>
    </li>`

    //clear the input fields
    carMakeInput.value = "";
    carModelInput.value = "";
    carYearInput.value = "";

    alert("Submit was clicked");
})

//Constructor function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

