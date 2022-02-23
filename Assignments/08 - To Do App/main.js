$(document).ready( () => {

 //variable for input box   
var text = $("#text")
//variable for form
var form = $("#newTask")
var work = $("#work")



// work.click( (e) => {
//     e.preventDefault();
//     addToDo();
//     console.log(`here is ${todoText}`)
//     alert("You submitted")
// })

// const  = document.querySelector('submit-image')
// image.addEventListener('click', function(clickEvent) {
//   const domEvent = document.createEvent('Event')
//   domEvent.initEvent('submit', false, true)
//   clickEvent.target.closest('form').dispatchEvent(domEvent)
// })


function addToDo(){
    //creating a div to hold todo item
    let todoDiv = document.createElement("div");
    //setting variable for input value
    let todoText = text.val();
    //putting the html into div element
    todoDiv.innerHTML = `<div class="toDoItem">
    <div class="check"><img src="./images/icon-check.svg"></div>
    <p class="items">${todoText}</p>
    <div class="cross"><img src="./images/icon-cross.svg"></div>
</div>  `
    //adding new div to list div with the input text
    $("#list").append(todoDiv)
    let cross = $(".cross");
    cross.click( () => {
        todoDiv.remove();
        console.log(`${todoText}`)
    })
    let check = $(".check");
    check.click( () => {
        todoDiv.toggleClass(".active-check")
        todoDiv.children[0].children[1].addClass("completed")
    })


}

form.submit( (e)=> {
    e.preventDefault();
    addToDo();
    text.val(" ")
})





$("#toggle").click( (e) => {
    e.preventDefault()
    alert("You clicked toggle")
})
//for filter section
//could use the checkbox to change status
//if checked, status = complete, else status = active
//also when checked, text-decoration:line-through
})