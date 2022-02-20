$(document).ready(() => {
    var dbUrl = "https://fed2201-4510b-default-rtdb.firebaseio.com";
    var jsonExt = ".json";
    var foodEntriesCreated = 0;
    var listOfFoodEntries = []
    // food objects
    // name, temperature, ingredients [], cuisine, id

    // input fields
    var nameInput = $("#nameInput")
    var cuisineInput = $("#cuisineInput")
    var temperatureInput = $("#temperatureInput")
    var ingredientsInput = $("#ingredientsInput")

    //any other DOM elements
    var submitFoodEntry = $("#submitFoodEntry")
    var foodEntriesTable = $("#foodEntriesTable tbody")

    class Food {
        constructor(name, temperature, ingredients, cuisine, id) {
            this.name = name;
            this.temperature = temperature;
            this.ingredients = ingredients; // will be an array
            this.cuisine = cuisine;
            this.id = id || ++foodEntriesCreated
        }
    };

    function separateIngredients(str) {

        //split the string into an array based on where commas are placed
        var separatedIngredients = (typeof str === "string") ? str.split(",") : console.log(`NOT a string!!!`)
        let newList = [];

        if (typeof str === "string") {

            separatedIngredients.forEach((singleIngredient) => {
                // console.log(`single ingredient: ${singleIngredient} with a type of: ${typeof singleIngredient}`)
                let trimmed = singleIngredient.trim()
                newList.push(trimmed)
            })

            // console.log(`array from newList: ${newList}`)

            return newList
        } else {
            console.log(`CANNOT run 'separateIngredients'`)
        }
    }


    const submitFoodEntryFunc = () => {
        let name = nameInput.val()
        let temperature = temperatureInput.val()
        let ingredients = ingredientsInput.val()
        // console.log(`user submitted ingredients: ${ingredients}`)
        let cuisine = cuisineInput.val()

        ingredients = separateIngredients(ingredients)

        // console.log(`separated ingredients: ${ingredients}`)

        addFoodDataToTable(name, temperature, ingredients, cuisine)

        // send user-submitted data to DB
        $.post(`${dbUrl}/foods${jsonExt}`,
            JSON.stringify({
                name: name,
                temperature: temperature,
                ingredients: ingredients,
                cuisine: cuisine
            }))

    }

    submitFoodEntry.click(function (e) {
        e.preventDefault()
        console.log("Button pressed!")

        submitFoodEntryFunc()
    })

    // get food from API
    async function getFoods() {
        let dataFromApi;

        await $.get(`${dbUrl}/foods${jsonExt}`).then((data) => {
            console.log(data)
            dataFromApi = data
        }).then(() => console.log(`success!`))

        // console.log(`data from the API: `)
        // console.log(dataFromApi)
        return dataFromApi
    }

    // populate table with data from API
    async function populateTable() {

        let foodData;
        await getFoods().then((data) =>
            // console.log(data)
            foodData = data
        )

        for (let dataObj in foodData) {
            // console.log(foodData[dataObj])

            let ingredients
            // structure the ingredients prop to be an array
            // let ingredients = separateIngredients(foodData[dataObj].ingredients)
            if (typeof foodData[dataObj].ingredients === "string") {
                ingredients = foodData[dataObj].ingredients.split(", ")
            } else {
                ingredients = foodData[dataObj].ingredients
            }

            addFoodDataToTable(foodData[dataObj].name, foodData[dataObj].temperature, ingredients, foodData[dataObj].cuisine, dataObj)
            //end of for loop
        }
    }

    // function that will automatically add food entry data to our table
    function addFoodDataToTable(name, temperature, ingredients, cuisine, id) {
        if (typeof ingredients === "string") {
            ingredients = ingredients.split(", ")
        }
        let foodEntry = new Food(name, temperature, ingredients, cuisine, id)

        // console.dir(foodEntry)
        // add submitted data to table
        foodEntriesTable.append(`
            <tr id="foodEntry-${foodEntry.id}">
                <td class="id">${foodEntry.id}</td>
                <td class="name">${foodEntry.name}</td>
                <td class="temperature">${foodEntry.temperature}</td>
                <td class="ingredients">
                    <ul>
                    </ul>
                </td>
                <td class="cuisine">${foodEntry.cuisine}</td>
                <td>
                    <button class="deleteButton" id="delete-${foodEntry.id}" 
                    ">Delete</button>
                </td>
            </tr>
        `)

        foodEntry.ingredients.forEach(ingr => {
            $(`tr#foodEntry-${foodEntry.id} td.ingredients ul`).append(`<li>${ingr}</li>`)
        })



    }
    let deleteButtons = document.getElementsByClassName("deleteButton")
    // console.log(deleteButtons)

    for (let i = 0; i < deleteButtons.length; i++) {
        console.log(deleteButtons[i].getAttribute("id"))
    }

    // DELETE food entry from table an DB
    function deleteFoodEntry() {
        // $.delete(foodEntry.id)
        console.log(`will delete something`)
    }

    populateTable()
})