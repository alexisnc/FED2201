$(document).ready( () => {
    var firebaseUrl = "https://fed2201-2942c-default-rtdb.firebaseio.com"
    var jsonExt = ".json"

    //data planned to be stored
    var listOfFBUsers = []

    //get data from a database
    $.get(`${firebaseUrl}/users${jsonExt}`)
    .then((data) => {
        console.dir(data)
        for (user in data){
            listOfFBUsers.push(user)
            console.log(`Success!! ${data[user].username} loaded!`)
        }
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
    
})