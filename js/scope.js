// Global scope
var globalName = "Joe";

function somThing() {
    var globalName = "Jack";
    console.log(globalName);
}

somThing();
console.log(globalName);