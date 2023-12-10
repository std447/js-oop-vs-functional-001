const REQUIRED = 'REQUIRED', MIN_LENGTH = 'MIN_LENGTH';

function getUserInput(inputElement) {
  return document.getElementById(inputElement).value;
}

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function createUser(userName, password) {
  if (!validate(userName, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error('Invalid input - username or password is invalid (Password should be minimum 6 character long)');
  }

  return {
    userName: userName,
    password: password
  }
}

function greetUser(user) {
  console.log('Hi there, ', user.userName)
}

function submitHandler(event) {
  event.preventDefault();

  const enteredUserName = getUserInput('username');
  const enteredPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (error) {
    alert(error.message);
  }

}

function connectForm(formId, formSubmithandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmithandler);
}

connectForm('user-input', submitHandler);
