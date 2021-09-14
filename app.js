// const object = {
//    name: "Bipon",
//    lastName: "Roy",
//    age: 21,
//    education: true,
//    married: false,
//    sample: function sample() {
//       console.log("Hello World");
//    },
// };
// console.log(object.name);
// object.sample();

// let text = " Bipon Roy";
// let result = text.length;
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(7));
// console.log(text.indexOf("o"));
// //specifies a specific letter index
// console.log(text.trim());
// console.log(text.trim().toLowerCase().startsWith("bipon"));

// const name = "Bipon";
// const age = 22;
// const sentence = "Hey It's " + name + " And I am " + age + " years old";
// console.log(sentence);
// const value = `Hey it's ${name} and I am ${age} years old`;
// console.log(value);

//Array Properties and Methods....
// let names = ["Bipon", "John", "Bipon", "John", "Bipon"];
// console.log(names.length);
// console.log(names[3]);

// const lastname = ["pepper", "onion", "banana"];
// const allname = names.concat(lastname);
// console.log(allname);
// console.log(allname.reverse());

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//    let total = 0;
//    for (let i = 0; i < arr.length; i++) {
//       total += arr[i];
//    }
//    if (total > 100) {
//       console.log(`Whoa! You are spending way too much`);
//       return total;
//    }
//    console.log(`You are good total is less than 100`);

//    return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//    gas: gasTotal,
//    food: foodTotal,
//    random: randomTotal,
// });

// function morning(name) {
//    return `Good morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//    return `Good afternoon ${name.repeat(3)}`;
// }

// function greet(name, cb) {
//    const myName = "john";
//    console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet("bobo", morning);
// greet("peter", afternoon);

// const people = [
//    { name: "bipon", age: 22, position: "developer" },
//    { name: "john", age: 22, position: "designer" },
//    { name: "bipon", age: 22, position: "boss" },
// ];

// function showperson(person) {
//    console.log(person.position.toUpperCase());
// }
// people.forEach(showperson);

const h1 = document.getElementById("h1");
h1.style.color = "red";
document.getElementById("btn").style.backgroundColor = "blue";
