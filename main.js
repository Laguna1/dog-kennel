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

Book.prototype.vaccineStatus = (index) => {
  const newDogVaccine = document.getElementById(`vaccine${index}`);
  this.vaccine = vaccine.innerHTML === 'Vaccine: Yes' ? 'Yes' : 'No';
  dogs[index].vaccine = this.vaccine;
  vaccine.innerHTML = `Vaccinated: ${this.vaccine}`;
};


function addDogToKennel(dog) {
  myKennel.push(dog);
}

function deleteDogFromKennel(e) {
  myKennel.splice(e.getAttribute('data-id'), 1)
  displayDogs()
}

let dog1 = new Dog('Harry', 'Pug', 5, 'Yes')
let dog2 = new Dog('Potter2', 'Maltese', 3, 'No')
let dog3 = new Dog('Tara', 'Doberman', 2, 'Yes')
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
      <button onclick="changeStatus(${index})" class="btn btn-primary my-2">Change Vaccine status</button>
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

function cancelButton() {
  let cancelButton = document.getElementById('cancel')
    cancelButton.addEventListener('click', () => {
    newDogForm.style.display = 'none';
})
}

function changeStatus(index) { 
  Object.setPrototypeOf(dogs[index], Dog.prototype);
  dogs[index].vaccineStatus(index);
}