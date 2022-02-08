$(document).ready( () => {
    var firebaseUrl = "https://fed2201-2942c-default-rtdb.firebaseio.com"
    var jsonExt = ".json"

    //data planned to be stored
    var fullFirebase;
    var listOfFBUsers = []

    //READ/get data from a database
    $("#GETfirebaseData").click((e) => {
        $.get(`${firebaseUrl}/users${jsonExt}`)
        .then((data) => {
            console.dir(data)
            fullFirebase = data
            console.dir(data)
            for (user in fullFirebase) {
                listOfFBUsers.push({
                    id: user, //user's ID
                    name: data[user].name,
                    username: data[user].username
                })
            }
            // for (user in data){
            //     listOfFBUsers.push(data[user].username)
            //     console.log(`Success!! ${data[user].username} loaded!`)
            // }
        })
        .then(console.log(listOfFBUsers))
    })

    //post data to DB
    function postUserToFB () {
        $.post(`${firebaseUrl}/users${jsonExt}`, JSON.stringify({name: "example", username: "ex001"}))
        .then(console.log("data created!"))
    }

    //set up jQuery to listen to click event
    $("#postToFB").click((e) => {
        e.preventDefault()
        console.log("button clicked!!")
        postUserToFB()
    })

    //DELETE functionality
    //reall GET method to re-ceck our DB
    function deleteUser(username){

        //find the user baased on the username entered in the input field 
        let foundUser = listOfFBUsers.find(user => user.username === username)
        // console.log(foundUser)
        console.log(`USER: ${username} was ${foundUser === [] ? "NOT found" : "FOUND"}`)

        //check if ANY data exists in the listOfFBUsers array 
        let listCheck = listOfFBUsers === [] ? false : true

        console.log(`the array that holds the Firebase usernames is: ${listCheck ? "occupied" : "empty" }`)
        // console.log(`from within the "deleteUser" function, the current list of Users is ${listOfFBUsers}`)
        if(foundUser !== undefined) {
            console.log(`user: ${username} found!`)
            $.ajax({
                url: `${firebaseUrl}/users/${foundUser.id}${jsonExt}`,
                type: "DELETE",
                success: console.log(`DELETE was successul`)
            }).then(
                $.get(`${firebaseUrl}/users${jsonExt}`)
            .then((data) => {
                console.dir(data)
                fullFirebase = data
                console.dir(data)
                for (user in fullFirebase) {
                    listOfFBUsers.push({
                        id:user,
                        name: data[user].name,
                        username: data[user].username
                    })
                }
            }).then(console.log(listOfFBUsers))   
            )
        }else{
            console.log(`user: ${username} CANNOT be found!`)
        }

        //make AJAX call to delete the user
        // $.ajax({
        //     url: `${firebaseUrl}/users/${foundUser.id}`,
        //     type: "DELETE",
        //     success: console.log(`DELETE was successul`)
        // })

        //username will taken from the DOM input field
        // JS will check that input field's text against what's in/from our DB 
        //if it exist, we can prompt the user to make sure that they want to delete it (Yes: delete,
        //No: cancel operation)
        // If it doesn't ecist, alert the user that it doesn't exist anc can't be deleted
    }

    // deleteUser("ex001")
    // deleteUser("DNI")

    $("#delete-user-button").click((e) => {
        let userToBeDeleted = $("#delete-user").val()
        e.preventDefault()
        deleteUser(userToBeDeleted)
    })

    //for each property returned from the fullFirebase object,
    //add each one to array of objects where an ID is now listed.
    
})