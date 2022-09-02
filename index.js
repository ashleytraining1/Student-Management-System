const apiHost = "https://localhost:5000"

fetch(`${apiHost}`)
.then(result =>result.json())
.then(function onFormSubmit(){
    //check validity
    if (validate()){
   //store user data
   let formData = readFormData();
   //check empty row
   if (selectedRow === null)
   {
    // InsertNewRecord
    insertNewRecord(formData);
   }else {
    updateNewRecord(formData)
   }
   resetForm();
    }
}
//Get values from form
function readFormData(){
    let formData = {};

    //get the values from form
    formData["Username"] = document.getElementById("Username").value;
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Class"] = document.getElementById("Class").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["sponserName"] = document.getElementById("sponserName").value;

    return formData;
}
)
