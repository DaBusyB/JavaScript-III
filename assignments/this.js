/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - everything there is, no specificity
* 2. implicit - binding that happens automatically
* 3. new - constructor function thats created to duplicate objects
* 4. explicit - binding that that is forced
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function hello() {
    console.log(this)
}

hello();

// Principle 2
// code example for Implicit Binding
const person = {
    name: "Brandi",
    age: 36,
    fun: function() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

person.fun();

// Principle 3
// code example for New Binding


// Principle 4
// code example for Explicit Binding
