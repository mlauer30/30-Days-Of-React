
/*
1. Create an empty object called dog
*/

let Dog = {};
/*
1. Print the the dog object on the console
*/

console.log(Dog);
/*
1. Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return _woof woof_
*/

Dog = {
    name: "Fido",
    legs: 4,
    color: "Brown",
    age: 3,
    bark: function() {
        return "woof woof!";
    }, 
};

/*
1. Get name, legs, color, age and bark value from the dog object
*/

console.log(
`    Dog's name: %s
    Number of legs: %s 
    Dog's color: %s
    Dog's age: %s
    Sound of the dog is: %s`, 
    Dog.name, Dog.legs, Dog.color, Dog.age, Dog.bark()
);

/*
1. Set new properties the dog object: breed, getDogInfo
*/

Dog = {
    name: "Beethoven",
    legs: 4,
    color: "Brown",
    age: 6,
    breed: "St. Bernard",
    bark: function() {
        return "ruff ruff!";
    }, 
    getDogInfo: function() {
        return `   Dog name: ${this.name} 
    Number of Legs: ${this.legs}
    Color: ${this.color}
    Age: ${this.age}
    Breed: ${this.breed}
    Bark sound is: ${this.bark()}`;         
    },
};

console.log("\n", Dog.getDogInfo())
