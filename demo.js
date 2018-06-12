//Closures

var pet = function(name) {
  var getName = function() {
    return name;             
  }
  return getName;
}
myPet = pet('Vivie');
myPet();


var createPet = function(name) {
  var sex;
  return {
    setName: function(newName) {
      name = newName;
    },
    getName: function() {
      return name;
    },
  }
}
var pet = createPet('Vivie');
console.log(pet.getName());
pet.setName('Oliver');
console.log(pet.getName());


//Using the arguments object
function myConcat(separator) {
   var result = '';
   var i;
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));


//Function parameters
//Defaul Parameters
function multiply(a, b = 1) {
  return a * b;
}
multiply(5);

//Rest parameters
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr);


//self-invoking functions
(function (name) {
	console.log(name);
}("dpk"));
