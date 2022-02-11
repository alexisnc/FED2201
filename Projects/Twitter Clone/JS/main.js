$(document).ready(() => {
    var firebaseUrl = "https://mind-dump-7e697-default-rtdb.firebaseio.com"
    var jsonExt = ".json"

var finalFirebase;    
var currentUsers = []

var signInNameInput = $("#signInNameInput")
var signInUsernameInput = $("#signInUsernameInput")
var signUpNameInput = $("#signUpNameInput")
var signUpUsernameInput = $("#signUpUsernameInput")
var signUpEmailInput = $("#signUpEmailInput")



//Read Functionality
function signInUser(){
    $.get(`${firebaseUrl}/users${jsonExt}`)
    .then((data) => {
        console.dir(data)
    for (user in currentUsers){
        currentUsers.push({
            id: user,
            name: data[user].name,
            username: data[user].username,
            email: data[user].email
        })
    }
    })
}   

$("#signIn").click((e) => {
    e.preventDefault()
    signInUser()
    let foundUser = currentUsers.find(user => user.username === username)
    //user exists so let them sign in
    if(foundUser !== null ){
        //redirect to dashboard 
        $("#dashboard").show()
        $("#homepage").hide()
        $("#sign-up").hide()
        $("#sign-in").hide()
    }
    //user doesn't exist redirect to sign up page 
    else{
        alert("Please Sign Up")
        //show sign up page
        $("#sign-up").show()
        $("#sign-in").hide()
        $("#dashboard").hide()
        $("#homepage").hide()
    }
})

function signUpUser(signUpName, signUpUsername, email){ 
    
    let signUpName = signUpNameInput.val()
    let signUpUsername = signUpUsernameInput.val()
    let email = signUpEmailInput.val()

    $.post(`${firebaseUrl}/users/${jsonExt}`, JSON.stringify({
        name: signUpName, 
        username: signUpUsername, 
        email: email}))
    .then((data) => {
        console.dir(data)
        console.log(data)
    })
}

$("#signUpButton").click((e) => {
     e.preventDefault()
    console.log("user signed in")
    signUpUser()

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
    e.preventDefault()
   
})

function postTweet(){
    $.post(`${firebaseUrl}/tweets/${jsonExt}`), JSON.stringify({text:"", tweetID:"", userID: ""})
}

$("#flush").click((e) => {
    e.preventDefault()
    postTweet()
    $(".user-tweet").prepend("<article></article>")
})

})