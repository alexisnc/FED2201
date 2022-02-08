$(document).ready(() => {
    var dbUrl = "https://fed2201-4510b-default-rtdb.firebaseio.com/foods";
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
    var foodEntriesTable = $("#foodEntriesTable")
    
    class Food {
        constructor(name, temperature, ingredients, cuisine) {
            this.name = name;
            this.temperature = temperature;
            this.ingredients = ingredients; // will be an array
            this.cuisine = cuisine;
            this.id = ++foodEntriesCreated
        }
    };

    function separateIngredients (str) {

        //split the string into an array based on where commas are placed
        var separatedIngredients = str.split(",")
        let newList = [];
        
        separatedIngredients.forEach((singleIngredient) => {
            // console.log(`single ingredient: ${singleIngredient} with a type of: ${typeof singleIngredient}`)
            let trimmed = singleIngredient.trim()
            newList.push(trimmed)
        })

        // console.log(`array from newList: ${newList}`)

        return newList
    }

    
    const submitFoodEntryFunc = () => {
        let name = nameInput.val()
        let temperature = temperatureInput.val()
        let ingredients = ingredientsInput.val()
        // console.log(`user submitted ingredients: ${ingredients}`)
        let cuisine = cuisineInput.val()
        
        ingredients = separateIngredients(ingredients)
        // console.log(`separated ingredients: ${ingredients}`)
        
        let foodEntry = new Food(name, temperature, ingredients, cuisine )

        console.dir(foodEntry)
        // add submitted data to table
        foodEntriesTable.append(`
            <tr id="foodEntry-${foodEntry.id}">
                <td class="id">${foodEntry.id}</td>
                <td class="name">${foodEntry.name}</td>
                <td class="temperature">${foodEntry.temperature}</td>
                <td class="ingredients">
                <ul>
                ${foodEntry.ingredients})}</td>
                </ul>
                <td class="cuisine">${foodEntry.cuisine}</td>
            </tr>
        `)
    }

    submitFoodEntry.click(function(e) {
        e.preventDefault()
        console.log("Button pressed!")

        submitFoodEntryFunc()


    })

})