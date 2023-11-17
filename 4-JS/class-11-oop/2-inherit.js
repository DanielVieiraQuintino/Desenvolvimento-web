class Animal {
    constructor(name, wight) {
        this.name = name;
        this.wight = wight;
    }
}

class Dog extends Animal {
    constructor(name, race) {
    super(name);
    this.race = race;
  }
}

const animal = new Animal("Spike", 15)
console.log(animal.name);

const dog = new Dog("Spike", "Doberman")

console.log(dog.race);
console.log(dog.name);