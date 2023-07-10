//*Creating Classes
class Cat {
  constructor(breed, color, gender, age) {
    this.breed = breed;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.fed = false;
  }
  full() {
    this.fed = true;
    console.log("The cat is fed");
  }
  starving() {
    this.fed = false;
    console.log("The cat is hungry!");
  }
  toString() {
    console.log(`The cat is ${this.age} years old`);
  }
}
//instance #1
const cat1 = new Cat("exoctic", "cream", "male", 5);
console.log(cat1);
//method 1 invoked
cat1.full();
console.log(cat1);
//method 2 invoked
cat1.starving();
console.log(cat1);
//method 3 invoked
cat1.toString();

//instance #2
const cat2 = new Cat("Ragdoll", "Cream", "female", 4);
console.log(cat2);
//method 1 invoked
cat2.full();
console.log(cat2);
//method 2 invoked
cat2.starving();
console.log(cat2);
//method 3 invoked
cat2.toString();

//--------------------------------------------------------------

//* Constructors
class Pirate {
  constructor(name, region, age) {
    this.name = name;
    this.region = region;
    this.age = age;
    this.work = true;
  }
  onDuty(){
    this.work =true;
    console.log('This Pirate is out in the sea' );
  }
  offDuty(){
    this.work = false;
    console.log('This Pirate is on vacation');
  }
}
const jollyRoger =[
    new Pirate('Jack Sparrow1', 'Atlantic', 40),
    new Pirate('Jack Sparrow2', 'Pacific', 30),
    new Pirate('Jack Sparrow3', 'Indian', 20),
]
const blackPearl =[
    new Pirate('Jack Sparrow4', 'Southern', 23),
    new Pirate('Jack Sparrow5', 'Pacific', 24),
    new Pirate('Jack Sparrow6', 'Arctic', 25),
]
jollyRoger.forEach(pirate =>{
    console.log(pirate.name);
    console.log(pirate.region);
    console.log(pirate.age);
})
blackPearl.forEach(pirate =>{
    console.log(pirate.name);
    console.log(pirate.region);
    console.log(pirate.age);
})
