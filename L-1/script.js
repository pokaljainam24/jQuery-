$(document).ready(function() {
    $("#loginButton").click(function() {
      var username = $("#username").val();
      var password = $("#password").val();
      
      if (username === "" || password === "") {
        $("#loginError").text("Username and password are required.");
      } else {
       
        console.log("Username: " + username);
        console.log("Password: " + password);
        
        $("#loginForm").submit();
      }
    });
  });