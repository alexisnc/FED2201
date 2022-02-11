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

var tweetBoxInput = $("#tweet-box")

// $("#homepage").show()
// $("#dashboard").hide()
// $("#sign-up").hide()
// $("#sign-in").hide()

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
    if(signInUsernameInput.val() === data[user].username){
        $("#dashboard").show()
        $("#homepage").hide()
        $("#sign-up").hide()
        $("#sign-in").hide()
        console.log("user found! Dump freely!")
    }
    else{
        alert("Username not found. Please Sign Up")
        $("#dashboard").hide()
        $("#homepage").hide()
        $("#sign-up").show()
        $("#sign-in").hide()
        console.log("user needs to sign up")
    }
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

function signUpUser(){ 
    
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

function resetSignUp(){
    signUpNameInput.val() = '';
    signUpEmailInput.val() = '';
    signUpEmailInput.val() = '';
}

$("#signUpButton").click((e) => {
     e.preventDefault()
    console.log("user signed in")
    signUpUser()
    resetSignUp()
    $("#homepage").hide()
    $("#dashboard").show()
    $("#sign-up").hide()
    $("#sign-in").hide()
})


//delete functionality
// function deleteUser(){
//     //make sure user exists
//     let foundUser = currentUsers.find(user => user.username === username)
    
//     if (foundUser !== undefined){
//         console.log(`user: ${username} found!`)
//         $.ajax({
//             url: `${firebaseUrl}/users${jsonExt}/$`,
//             type: "DELETE",
//             success: console.log(`DELETE was successful`)
//         }).then(
//             $.get(`${firebaseUrl}/users/${jsonExt}`)
//         .then((data) => {
//             // console.dir(data)
//             // finalFirebase = data
//             // console.dir(data)
//             // for (user in finalFirebase) {
//             //     currentUsers.push({
//             //         id:user,
//             //         name: data[user].name,
//             //         username: data[user].username
//             //     })
//             // }
//         }).then(console.log(currentUsers)) 
//         )
//     }else{
//         console.log(`user: ${username} CANNOT be found!`)
//     }
// }

$("#logoutButton").click((e) => {
    e.preventDefault()
    $("#homepage").show()
    $("#dashboard").hide()
    $("#sign-up").hide()
    $("#sign-in").hide()
})

$("#home-sign-up").click((e) => {
    e.preventDefault()
    $("#homepage").hide()
    $("#dashboard").hide()
    $("#sign-up").show()
    $("#sign-in").hide()
})

$("#home-sign-in").click((e) => {
    e.preventDefault()
    $("#homepage").hide()
    $("#dashboard").hide()
    $("#sign-up").hide()
    $("#sign-in").show()
})

function postTweet(){
    let tweetBox = tweetBoxInput.val() 

    $.post(`${firebaseUrl}/tweets/${jsonExt}`), JSON.stringify({text: tweetBox, tweetID:"", userID: foundUser})
}

$("#flush").click((e) => {
    e.preventDefault()
    postTweet()
    $("#user-tweet").prepend(`
    <div id="user-tweet" class="user-tweet">
                    
                    <span class="material-icons-outlined md-48" style="font-size: 48px;">
                        account_circle
                        </span>
                    <input id="tweet-box" class="tweet-box" type="text" placeholder="Dump your thoughts">
                    <button id="flush" class="button">Flush</button>
                    <button class="icon-button"><span class="material-icons-outlined">delete</span></button>
                    <button class="icon-button"><span class="material-icons-outlined">favorite_border</span></button>
                    <button class="icon-button"><span class="material-icons-outlined">share</span></button>
                </div>
    `)
})

})