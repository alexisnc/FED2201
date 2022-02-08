//we expect to hnadle some type of car data
//Car{make, model, year}

//create a list of Cars
var listOfCars = []

var listOfPeople =[]

//simply create class to handle the data structure in JS
function Car (make, model, year){
    this.make = make,
    this.model = model,
    this.year = year
}

//make al ist of potential makes/manufacturers
var carMakes = [
    "Honda",
    "Ford",
    "Toyota",
    "Kia",
    "Hyundai"
]

//GET data from json using vanilla JS
fetch("./car-data.json")
    .then(response => response.json())
    .then(data => {console.log(data)
    listOfCars = data.cars
    listOfPeople = data.people
})

//separate the cars to their owner
//add that arry of cars to now exist for the specific owner 
function mapCarsToOwners (){
    //iterate thru the owners
    listOfPeople.forEach((person) => {
        console.log(`person is equal to: ${person.name}`)
        person.cars = listOfCars.filter( car => person.id === car.ownerID)
        console.log(`car is equal to ${car}`)
    })
}

mapCarsToOwners()
    


