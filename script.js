function validateName(){
    let name = document.getElementById("name");
    let nameError=document.getElementById("nameerror");
    let regexName = /^[A-Za-z]+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Format"
        nameError.style.color='red'
        return false
    }
}
function validateName1(){
    let name = document.getElementById("name1");
    let nameError=document.getElementById("nameerror1");
    let regexName = /^[A-Za-z]+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Format"
        nameError.style.color='red'
        return false
    }
}
 
function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
   
    
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates
    

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
       
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
  
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
function validatemail(){
    let name = document.getElementById("mail");
    let nameError=document.getElementById("mailerror");
    let regexName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Email Address!"
        nameError.style.color='red'
        return false
    }
}
function validatephone(){
    let name = document.getElementById("phone");
    let nameError=document.getElementById("phoneerror");
    let regexName = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\.\d{3}\.\d{4}$|^\d{3} \d{3} \d{4}$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Invalid Phone Number"
        nameError.style.color='red'
        return false
    }
}
function validateconfirmPassword() {
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("pwd1").value;
    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  }
  function checkPassword(){
    let name = document.getElementById("pwd");
    let nameError=document.getElementById("passerror");
    let regexName =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(regexName.test(name.value)==true){
        nameError.innerHTML="Valid Format"
        nameError.style.color='green'
        return true

    }
    else{
        nameError.innerHTML="Password must have minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!"
        nameError.style.color='red'
        nameError.style.fontSize='12px'
        return false
    }
}

function validateMyForm()
{
   if(validateName1()=== false)
  { 
    alert("Validation Failed");
    returnToPreviousPage();
    return false;
   }
else{
    
    alert("Validations passed");
    return true;
 }
}

function validateMyFormsign()
{
   if(validateName() && validatePassword() && validatemail() && validatephone() && validateconfirmPassword())
  { 
    alert("Validation Passed");
    //returnToPreviousPage();
    return true;
   }
else{
    
    alert("Validations failed");
    return false;
 }
}