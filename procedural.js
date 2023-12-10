const form = document.getElementById('user-input');

function submitEventHandler (event) {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUserName = userNameInput.value;
  
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if(enteredUserName.trim().length === 0){
    alert('Invalid input - username should not be empty');
    return;
  }

  if(enteredPassword.trim().length <= 5){
    alert('Invalid input - password should be six character or long');
    return;
  }

  const user = {
    userName: enteredUserName,
    password: enteredPassword
  }

  console.log(user);
  console.log("Hi, there " + user.userName)
}

form.addEventListener('submit', submitEventHandler);