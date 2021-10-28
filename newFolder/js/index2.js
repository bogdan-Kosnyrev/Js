
// function logValue(id) {
//   let el = document.getElementById(id);
//   console.log(el.value);
// }

// function getValue(id) {
//   let el = document.getElementById(id);
//   return el.value;
// }

// let firstNameId = 'first-name';
// let lastNameId = 'last-name';

// logValue(firstNameId);
// logValue(firstNameId);
// logValue(firstNameId);

// logValue(lastNameId);
// logValue(lastNameId);
// logValue(lastNameId);

// let value = getValue(lastNameId);

// window.alert(value);

function addErrorClass(elementId) {
  let element = document.getElementById(elementId);
  element.className = 'error-input';
}

function addErrorClassToAllInputs() {
  addErrorClass('first-name');
  addErrorClass('last-name');
  addErrorClass('address');
}

// addErrorClass('last-name');

// window.setTimeout(addErrorClassToAllInputs, 2000);

let sendButton = document.getElementById('send-button');
// addErrorClass();
sendButton.addEventListener('click', onSendButtonClick);

function onSendButtonClick() {
  addErrorClass('last-name');
}

function onFirstNameKeyup() {
  addErrorClass('first-name');
}

let firstNameEl = document.getElementById('first-name');

firstNameEl.addEventListener('keyup', onFirstNameKeyup);


