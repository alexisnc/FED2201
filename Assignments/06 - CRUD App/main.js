var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        createNewData(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
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
}

function createNewData(data){
    var table = document.getElementById("personList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.middleName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.lastName;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.address;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.city;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.state;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.zip;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.dob;   
    var cell10 = newRow.insertCell(9);
        cell10.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
    bringSquare();     
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('middleName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('address').value = selectedRow.cells[4].innerHTML;
    document.getElementById('city').value = selectedRow.cells[5].innerHTML;
    document.getElementById('state').value = selectedRow.cells[6].innerHTML;
    document.getElementById('zip').value = selectedRow.cells[7].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[8].innerHTML;
    rotateSquare();
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.middleName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.address;
    selectedRow.cells[5].innerHTML = formData.city;
    selectedRow.cells[6].innerHTML = formData.state;
    selectedRow.cells[7].innerHTML = formData.zip;
    selectedRow.cells[8].innerHTML = formData.dob;
}

function onDelete(td){
    if(confirm('Are you sure you want to delete this?')){
        row = td.parentElement.parentElement;
        document.getElementById('personList').deleteRow(row.rowIndex);
    }
    resetForm();
     fadeSquare();
}

function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('dob').value = '';
}

function rotateSquare(){
    var square = document.getElementById('square');
    square.style.rotate = '20deg';
}

function fadeSquare(){
    var square1 = document.getElementByTagId('square');
    square1.style.opacity = '0';
}

function bringSquare(){
    var square2 = document.getElementById('square');
    square2.style.opacity = '3';
}