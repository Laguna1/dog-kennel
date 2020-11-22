let myKennel = [];
let dogsDiv = document.getElementById('dogs')
let newDogForm = document.getElementById('form')
let newDogName = document.getElementById('name')
let newDogBread = document.getElementById('bread')
let newDogAge = document.getElementById('age')
let newDogVaccine= document.getElementById('vaccine')


function Dog(name, bread, age, vaccine) {
  this.name = name
  this.bread = bread
  this.age = age 
  this.vaccine = vaccine
}
// var vaccine = false;
// var button = document.getElementById("myButton");
// button.onclick = function vaccineStatus() {
//   vaccine = !vaccine;
//   if (vaccine) {
//     button.innerHTML = "Yes";
//   } else {
//     button.innerHTML = "No";
//   }
// }


function addDogToKennel(dog) {
  myKennel.push(dog);
}

function deleteDogFromKennel(e) {
  myKennel.splice(e.getAttribute('data-id'), 1)
  displayDogs()
}

let dog1 = new Dog('Harry', 'Pug', 5, true)
let dog2 = new Dog('Potter2', 'Maltese', 3, false)
let dog3 = new Dog('Tara', 'Doberman', 2, true)
addDogToKennel(dog1)
addDogToKennel(dog2)
addDogToKennel(dog3)


function displayDogs(){
  let dogs = ``;
  let index = 0;
  myKennel.forEach(dog => {
    dogs +=`
    <div class="dog-card">
      <h4 class="title">Name: <span class="value">${dog.name}</span> </h4>
      <h4 class="title">Bread: <span class="value">${dog.bread}</span> </h4>
      <h4 class="title">Age: <span class="value">${dog.age}</span> </h4>
      <h4 class="title">Vaccine: <span class="value">${dog.vaccine ? 'Yes' : 'No'}</span> </h4>
      <button onclick="vaccineStatus(this)" id="myButton" class="btn btn-primary mb-2">Change Vaccine status</button>
      <button onclick="deleteDogFromKennel(this)" data-id="${index}" class="btn btn-danger">Delete Dog\`s Card</button>
    </div>
    `; 
    index++  
  });
  dogsDiv.innerHTML = dogs;
}

function showForm() {
  newDogForm.style.display = 'flex';
}

function createDog() {
  let dog = new Dog (
    newDogName.value,
    newDogBread.value,
    newDogAge.value,
    newDogVaccine.checked
  );
  addDogToKennel(dog);
  newDogForm.style.display = 'none';
  displayDogs()
}

function vaccineStatus(index) { // eslint-disable-line no-unused-vars
  Object.setPrototypeOf(dogs[index], Dog.prototype);
  dogs[index].vaccineStatus(index);
}