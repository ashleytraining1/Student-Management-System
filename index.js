const apiHost = "https://localhost:5000"

const form = document.getElementById("studentForm")
console.log(form);

form.addEventListener("submit",handleFormSubmit)

function handleFormSubmit(event){
    event.preventDefault()

    const myInputs = {
        username: event.target.username.value,
        IDNumber:event.target.IDNumber.value,
        Email:event.target.Email.value,
        Class:event.target.Class.value,
        RollNo:event.target.RollNo.value,
        SponserName:event.target.SponserName.value,

    }
    console.log(myInputs.username);
}
handleFormSubmit();
