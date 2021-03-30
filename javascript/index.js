var signinbox = document.getElementById("Sign-in");
var signupbox = document.getElementById("Sign-up");
var opaq = document.getElementById("opaq");
var post = document.getElementById("post-box");
var fullname = document.getElementById("fullname");
var  username = document.getElementById("username");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

console.log("js");
function signin(){
    console.log("si");
    signupbox.style.display="none";
    post.style.display="none";
    signinbox.style.display="block";
    opaq.style.display="block";
}

 function closesigninbox() {
     signinbox.style.display="none";
     opaq.style.display="none";
 }
 function signup(){
  
    signinbox.style.display="none";
    post.style.display="none";
    signupbox.style.display="block";
    opaq.style.display="block";
 }
 function closesignupbox() {
    signupbox.style.display="none";
    opaq.style.display="none";
}
function createpost(){
    post.style.display="block";
    opaq.style.display="block";
    signupbox.style.display="none";
    signinbox.style.display="none";
}
function closepostbox(){
    post.style.display="none";
    opaq.style.display="none";
}
function check(event){
    event.preventDefault();
    if(fullname.value.length==0||username.value.length==0||password.value.length==0||cpassword.value.length==0){
    alert("no field should be empty");}
    else if(fullname.value.length<3)
    {
        alert("fullname shoould be 3 characters");
    }
    else if(/^[a-zA-Z ]+$/.test(fullname.value)==false)
    {
        alert("only use alphabets in fullname");
    }
    else if(username.value.length<6)
    {
        alert("username should be 6 characters");
    }
    else if(password.value.length<8)
    {
        alert("password should be 8 characters");
    }
    else if(/^[a-zA-Z0-9@._-]+$/.test(username.value)==false)
    {
        alert("username should contain alphabet and numbers + (@._-) characters it shoud not have any space in between");
    }
    else if(!password.value.match(/[A-Z]/g))
    {
      
        alert("password should contain a Uppercase letter");
    }
    else if(!password.value.match(/[a-z]/g))
    {
        alert("password should contain a lowercase letter");
    }
    else if(!password.value.match(/[0-9]/g))
    {
        alert("password should contain a number");
    }
    else if(!password.value.match(/[!@#$%&*]/g))
    {
        alert("password should contain a character(!@#$%&*)");
    }
    else if(/^[a-zA-Z0-9!@#$%&*]+$/.test(password.value)==false)
    {
        alert("password should contain alphabets + numbers + (@!#$%&*) characters it shoud not have any space in between");
    }
    else if(cpassword.value!=password.value)
    {
        alert("password dont match");
    }
    else
    alert("User Registered");
   
   
    }