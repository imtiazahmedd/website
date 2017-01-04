// ******************** Registration page coding ***************************

var arr = [];


function register(){
var firstName =document.getElementById('firstNameId').value;
var lastName = document.getElementById('lastNameId').value;
var userName = document.getElementById('userNameId').value;
var emailAddress = document.getElementById('emailId').value;
var password = document.getElementById('passwordId').value;
var password_confirm = document.getElementById('password_confirmation').value;


// **********************    form validation    *****************************
if(firstName == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Name';

return;
}
else if(lastName == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Last Name';
return;
}
else if(userName == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your User Name';
return;
} 
else if(emailAddress == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Email like exapmle@gmail.com';
return;
}
else if(password == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Password';
return;
}
else{
    if(password_confirm == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your confirmation password';

return;
    }
    
}



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

// *****************empty input field *******************************

document.getElementById('firstNameId').value = '';
document.getElementById('lastNameId').value = '';
document.getElementById('userNameId').value = '';
document.getElementById('emailId').value = '';
document.getElementById('passwordId').value = '';
document.getElementById('password_confirmation').value = '';

}
function cleartxt(){
document.getElementById('formvalidation').innerHTML = '';
    

   
}