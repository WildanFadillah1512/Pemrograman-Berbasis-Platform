// Number 1

console.log("Hello");
console.log("Wildan");
console.log("You can call me Tezo");
console.log("Go away, i'm Coding");
console.log("I'm Sorry\nplease for give me");

// Number 2

let number1 = 3;
let number2 = 9;
let number3 = 6;
let number4 = 7;
let number5 = 2;

console.log(number1 + number2 - number3 * number4 / number5);
console.log(number1 + (number2 - number3) * number4 / number5);

// Number 3

let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;

console.log(conditionA && conditionB || conditionC && !conditionD);

// Number 4

let age = 9;
let result = (age > 17) ? "Adults" :  (age > 10) ? "Teenagers" : "Children";
console.log(result);

// Number 5

let numA = 176;
let numB = 103;

console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1;

console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);

// Number 6
console.log("");
console.log("");
let fullname = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;
    
}

let getTitle = () => {
    return "S.Kom";
    
}

console.log(fullname("Wildan","D","Fadillah"));
console.log("");
console.log("");

// Number 7

// Using == (loose equality)
console.log(5 == '5');  // true, because '5' is converted to a number

// Using === (strict equality)
console.log(5 === '5'); // false, because one is a number and the other is a string

// Number 8

// Regular function
function regularFunction() {
    console.log(this); // 'this' depends on the calling context
  }
  
  regularFunction(); // Logs global object or undefined in strict mode
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this); // 'this' refers to the enclosing scope, not the function itself
  }
  
  arrowFunction(); // Logs the surrounding scope's 'this'
  
