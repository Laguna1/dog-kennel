let myKennel = [];

function Dog(name, rase, age, vaccine) {
    this.name = name
    this.rase = rase
    this.age = age
    this.vaccine = vaccine
  }

function addDogToKennel(dog) {
  myKennel.push(dog)
}

let dog1 = new Dog('Harry', 'Dobermann', 5, true)
let dog2 = new Dog('Potter2', 'ChiHuaHua', 3, false)
let dog3 = new Dog('Rica', 'Pug', 12, true)

let dogsDiv = document.getElementById('dogs')


function displayDogs(){
    addDogToKennel(dog1)
    addDogToKennel(dog2)
    addDogToKennel(dog3)
    let dogs = ``
    myKennel.forEach(dog => {
      dogs +=`
      <div class="dog-card">
        <h4 class="title">Name: <span class="value">${dog.name}</span> </h4>
        <h4 class="title">Rase: <span class="value">${dog.rase}</span> </h4>
        <h4 class="title">Age: <span class="value">${dog.age}</span> </h4>
        <h4 class="title">Have vaccine: <span class="value">${dog.vaccine ? 'Yes' : 'No'}</span> </h4>
      </div>
      `;   
    });
    dogsDiv.innerHTML = dogs
  } 