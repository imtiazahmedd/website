//  Registration page coding

var arr = [];

function register(){
var firstName =document.getElementById('firstNameId').value;
var lastName = document.getElementById('lastNameId').value;
var userName = document.getElementById('userNameId').value;
var emailAddress = document.getElementById('emailId').value;
var password = document.getElementById('passwordId').value;

var objFiled = { 
    userFirstName : firstName , 
    UserlastName : lastName , 
    userFullName : userName , 
    userEmailAddress : emailAddress , 
    userPassword : password
};
arr.push(objFiled);
console.log(arr);
localStorage.setItem( "Registration" , JSON.stringify(arr));
sweetAlert("Done...", "Registration completed" ,"success");

document.getElementById('firstNameId').value = '';
document.getElementById('lastNameId').value = '';
document.getElementById('userNameId').value = '';
document.getElementById('emailId').value = '';
document.getElementById('passwordId').value = '';
document.getElementById('password_confirmation').value = '';

}
