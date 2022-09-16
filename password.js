const password = "password123"

if (password.length <=10 && password.includes[a-zA-Z] && password.includes[0-9]) {
    console.log("password is valid and meets the constraints")
}else{
    console.log("password does not meet the constraints, must contain at least 10 characters, a letter, and a number.")
}
// incorrect, not sure how to finish the conditional to check if password contains a letter and number

var passValidation = /^(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{10})$/

function checkPassword(password2) {
  return passValidation.test(password2) ? "success" : "failure";
}

console.log(checkPassword("Password10"))
console.log(checkPassword("pass"))

// alt way: found online I could make a regex variable to test the conditions of my password. I made a function to pass a string input and with my regex i can use the test method for either result 1 or 2.