$(document).ready( () => {

 //variable for input box   
var text = $("#text")
//variable for form
var form = $("#newTask")


function addToDo(){
    //setting variable for input value
    let todoText = text.val();
    //adding new div to list div with the input text
    $("#list").append(`<div class="toDoItem">
    <div class="check"><img src="./images/icon-check.svg"></div>
    <p class="items">${todoText}</p>
    <div class="cross"><img src="./images/icon-cross.svg"></div>
</div>  `)
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addToDo();
    console.log(`here is ${todoText}`)
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