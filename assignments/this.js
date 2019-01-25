/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - everything there is, no specificity
* 2. implicit - binding that happens automatically
* 3. new - constructor function thats used to easily duplicate objects
* 4. explicit - binding that that is forced/controlled
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function hello() {
    console.log("Principle 1:", this)
}

hello();

// Principle 2
// code example for Implicit Binding
const person = {
    name: "Brandi",
    age: 36,
    fun: function() {
        console.log("Principle 2:", `${this.name} is ${this.age} years old`);
    }
}

person.fun();

// Principle 3
// code example for New Binding
function TeenTitan(member) {
    this.member = member;
    this.greeting = "Hey!";
    this.speak = function() {
        console.log("Principle 3a:", `${this.greeting}, ${this.member}`)
    }
}

// const robin = {
//     name: "Robin"
// }

const cyborg = new TeenTitan("Cyborg");

console.log("Principle 3b:", cyborg)
cyborg.speak();

// Principle 4
// code example for Explicit Binding
const child = {
    name: "Sonnet"
}

const skills = ['cooking', ' programming', ' comedy'];
const pets = ['ferret', 'pigeon', 'rabbit'];
     //using call
function facts1(skills) {
    console.log("Principle 4 call:", `Hello, my name is ${this.name}. I like: ${skills}.`);
};

facts1.call(child, skills);


     //using apply
function facts2(pet1,pet2, pet3) {
   
    console.log("Principle 4 apply:", `Hello, my name is ${this.name}. I have a: ${pet1}, ${pet2}, and ${pet3}.`);
};

facts2.apply(child, pets);
