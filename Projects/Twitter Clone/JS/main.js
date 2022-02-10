$(document).ready(() => {
    var firebaseUrl = "https://mind-dump-7e697-default-rtdb.firebaseio.com"
    var jsonExt = ".json"

var finalFirebase;    
var currentUsers = []



const hide = (elem) => {
    elem.style.display = 'none'
}

const show = (elem) => {
    elem.style.display = 'block'
}

//Read Functionality
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
    getUser(user)

    show($("#middle-panel"))
    hide($("#sign-in"), $("#sign-up"), $("#homepage"))
})

function postUser(name, username, email){    
    $.post(`${firebaseUrl}/users/${jsonExt}`, JSON.stringify({name: name, username: username, email:email}))
    .then((data) => {
        console.dir(data)
        console.log(data)
    })
}

$("#signUp").click((e) => {
     e.preventDefault()
    console.log("user signed in")
    postUser(nme)
    show($("#sign-in"))
    hide($("#homepage"), $("#dashboard"), $("#sign-up"))
})


//delete functionality
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
    show(document.querySelector('.home'));
    hide(document.querySelector('#sign-in'))
    hide(document.getElementById("#sign-up"))
    hide(document.getElementById("#dashboard"))
})

$("#flush").click((e) => {
    e.preventDefault()
    postTweet()
    $(".user-tweet").prepend("<article></article>")
})

})