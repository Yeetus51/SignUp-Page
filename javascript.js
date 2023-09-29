let button = document.querySelector("button"); 

let firstName = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let password = document.getElementById("password");
let comfirmPassword = document.getElementById("confirmpassword");


function hasNumber(string){
    return Array.from(string).some(element => !isNaN(parseInt(element)));
}

function isPhoneNumber(input) {
    const phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneNumberPattern.test(input);
}
  
button.addEventListener('click', () =>{
    if(password.value != comfirmPassword.value){
        comfirmPassword.setCustomValidity("Password does not match");
        comfirmPassword.reportValidity();
    }
    if(password.value.length < 8){
        password.setCustomValidity("Password too short");
        password.reportValidity();
    }
    if(!isPhoneNumber(tel.value)){
        tel.setCustomValidity("Please enter a valid phone number")
        tel.reportValidity();
    }
    if(!email.checkValidity()) {
        email.reportValidity();
    }
    if(lastname.value == undefined || lastname.value === "" || hasNumber(lastname.value)){
        lastname.setCustomValidity("Please enter a valid Name");
        lastname.reportValidity();
    }
    if(firstName.value == undefined || firstName.value === "" || hasNumber(firstName.value)){
        firstName.setCustomValidity("Please enter a valid Name");
        firstName.reportValidity();
    }
})