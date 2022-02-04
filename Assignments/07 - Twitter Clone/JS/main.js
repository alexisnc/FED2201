$(document).ready(() => {
    var firebaseUrl = "https://mind-dump-7e697-default-rtdb.firebaseio.com"
    var jsonExt = ".json"

var finalFirebase;    
var currentUsers = []


var extreme = $("#name").val()
var  ice = $("#username").val()

const hide = (elem) => {
    elem.style.display = 'none'
}

const show = (elem) => {
    elem.style.display = 'block'
}

function getUser(){
    $.get(`${firebaseUrl}/users${jsonExt}`)
    .then((data) => {
        console.dir(data)
    for (user in currentUsers){
        currentUsers.push({
            id: user,
            name: data[user].name,
            username: data[user].username
        })
    }
    })
}   

$("#signIn").click((e) => {
    getUser()
})
    $.get(`${firebaseUrl}/users${jsonExt}`)
    .then((data) => {
        console.dir(data)
    })

function postUser(){    
    $.post(`${firebaseUrl}/users/${jsonExt}`, JSON.stringify({name: `${extreme}`, username: `${ice}`}))
    .then((data) => {
        console.dir(data)
        console.log(data)
    })
}

$("#signUp").click((e) => {
    e.preventDefault()
    console.log("user signed in")
    postUser()
})

function deleteUser(){
    //make sure user exists
    let foundUser = currentUsers.find(user => user.username === username)
    
    if (foundUser !== undefined){
        console.log(`user: ${username} found!`)
        $.ajax({
            url: `${firebaseUrl}/users${jsonExt}/$`,
            type: "DELETE",
            success: console.log(`DELETE was successful`)
        }).then(
            $.get(`${firebaseUrl}/users/${jsonExt}`)
        .then((data) => {
            console.dir(data)
            finalFirebase = data
            console.dir(data)
            for (user in finalFirebase) {
                currentUsers.push({
                    id:user,
                    name: data[user].name,
                    username: data[user].username
                })
            }
        }).then(console.log(currentUsers)) 
        )
    }else{
        console.log(`user: ${username} CANNOT be found!`)
    }
}

$("#logout").click((e) => {
    let loggedOutUser = $("#user-logout").val()
    e.preventDefault()
    deleteUser(loggedOutUser)
})

})