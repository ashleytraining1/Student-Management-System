const apiHost = "http://localhost:5000/records"

const form = document.getElementById("studentForm")
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault()

    
       let username = event.target.querySelector("#username").value
        let identityNumber = event.target.querySelector("#identityNumber").value
        let email = event.target.querySelector("#email").value
        let totalClass = event.target.querySelector("#totalClass").value
        let rollNo = event.target.querySelector("#rollNo").value
       let sponserName = event.target.querySelector("#sponserName").value


  const userInfo = document.createElement('tr')
userInfo.innerHTML = `<td>${username}</td>
                      <td>${identityNumber}</td>
                      <td>${email}</td>
                      <td>${totalClass}</td>
                      <td>${rollNo}</td>
                      <td>${sponserName}</td>`
        
        document.querySelector('tbody').append(userInfo);

        
 })
 

