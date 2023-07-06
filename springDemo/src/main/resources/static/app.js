function form_Validation(){
  var firstName = document.querySelector('input[placeholder="First Name"]').value;
  var email = document.querySelector('input[placeholder="Email"]').value;
  var password = document.querySelector('input[placeholder="Password"]').value;
  var confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

  var firstNameError = document.getElementById("firstNameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");

  var hasError = false;

  if(firstName === ""){
      firstNameError.innerHTML = "Please enter your first name";
      firstNameError.style.color = "red";
      hasError = true;
  } else {
      firstNameError.innerHTML = "";
  }
  if(email === ""){
      emailError.innerHTML = "Please enter your email";
      emailError.style.color = "red";
      hasError = true;
  } else {
      emailError.innerHTML = "";
  }
  if(password === ""){
      passwordError.innerHTML = "Please enter your password";
      passwordError.style.color = "red";
      hasError = true;
  } else {
      passwordError.innerHTML = "";
  }
  if(confirmPassword === ""){
      confirmPasswordError.innerHTML = "Please confirm your password";
      confirmPasswordError.style.color = "red";
      hasError = true;
  } else if(password !== confirmPassword){
      confirmPasswordError.innerHTML = "Passwords do not match";
      confirmPasswordError.style.color = "red";
      hasError = true;
  } else {
      confirmPasswordError.innerHTML = "";
  }
  if(!hasError){
      console.log("First Name: " + firstName+"\n");
      console.log("Email: " + email);
      console.log("Password: " + password);
      console.log("Confirm Password: " + confirmPassword);
  }
}

function submitForm() {

    $("#myForm").submit(function(event){
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var user = {
            "name": name,
            "email": email,
            "password": password
        };

        $.post("http://localhost:8080/user/add", JSON.stringify(user), function(data){
            console.log("Data sent to the server.",data);
        }, "json");
    });
}













