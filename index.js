
const apiHost = "http://localhost:5000/records"

const form = document.getElementById("studentForm")
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let myFormInputs = {
  username: event.target.querySelector("#username").value,
  idNumber: event.target.querySelector("#studentIDNumber").value,
  email: event.target.querySelector("#studentEmail").value,
  class: event.target.querySelector("#totalClass").value,
  rollNumber: event.target.querySelector("#rollNo").value,
  sponserName: event.target.querySelector("#sponserName").value
    }
event.target.reset();
console.log(myFormInputs);
newRecord(myFormInputs);
renderRecords(myFormInputs);
 })

 //fetch records

 function fetchRecords(){
    return fetch(`${apiHost}`)
    .then(response => response.json())
 }

 //Render Records to the DOM
 function renderRecords(record) {
    const userInfo = document.createElement('tr')
    userInfo.innerHTML = `<td>${record.username}</td>
                          <td>${record.idNumber}</td>
                          <td>${record.email}</td>
                          <td>${record.class}</td>
                          <td>${record.rollNumber}</td>
                          <td>${record.sponserName}</td>
                          <i class="fa-solid fa-trash-can"></i>`
                
            //Delete a record
userInfo.querySelector(".fa-trash-can").addEventListener('click', () => {
 userInfo.remove();
 deleteRecord(record.id);
})
            document.querySelector('tbody').append(userInfo);  
 }

 fetchRecords().then(records => {
    records.forEach((record => {
        renderRecords(record)
    }))
 })

 //creating a new record
function newRecord(myFormInputs){
    fetch(`${apiHost}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myFormInputs)
    })
    .then(response => response.json())
    .then(record => console.log(record));
}
//deleting a record
function deleteRecord(id){
    fetch(`${apiHost}/${id}`,{
        method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then(response => response.json())
    .then(record => console.log(record));
    

}

 document.addEventListener("DOMContentLoaded", function(){
    fetchRecords();
 })
 

