var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
};

function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleName"] = document.getElementById("middleName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["city"] = document.getElementById("city").value;
    formData["state"] = document.getElementById("state").value;
    formData["zip"] = document.getElementById("zip").value;
    formData["dob"] = document.getElementById("dob").value;
    return formData;
    console.log(readFormData());
}

function createNewData(data){
    var table = document.getElementById("personList").getElementsByTagName('tbody')[0];
}