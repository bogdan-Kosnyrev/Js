function alertValues(elementParametr) {
  // console.log(elementParametr.value);
  // console.log(elementParametr.className);
}

function getEl(id) {
  console.log('somebody wants fied element by id');
  let el = document.getElementById(id);
  return el;
}

let firstNameId = 'first-name';
let firstNameEl = getEl(firstNameId);
// alertFirstNameValues();
alertValues(firstNameEl);

let lastNameId = 'last-name';
let lastNameEl = getEl(lastNameId);
// alertLastNameValues();
alertValues(lastNameEl);

let addressId = 'address';
let addressEl = getEl(addressId);
alertValues(addressEl);

let citiesId = 'cities';
let citiesEl = getEl(citiesId);
alertValues(citiesEl);

let hobbiesId = 'hobbies';
let hobbiesEl = getEl(hobbiesId);
alertValues(hobbiesEl);

let avatarId = 'avatar-wrapper';
let avatarEl = getEl(avatarId);
let avatar1Id = 'avatar';
let avatar1El = getEl(avatar1Id);

firstNameEl.value = 'Eva';

lastNameEl.className = 'last-name default-input error-input';
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

lastNameEl.title = 'Wrong last name';
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

firstNameEl.className = 'new-class';
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);

avatar1El.src = 'https://c.wallhere.com/photos/11/8b/panther_big_cat_face_predator-668355.jpg!s';

avatarEl.title = 'I am avatar';
citiesEl.value = 'Moscov';
hobbiesEl.value = 'I have not interest';

avatarEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';
let listId = 'list';
let numberList = document.getElementById(listId);
// console.log(numberList.innerHTML);