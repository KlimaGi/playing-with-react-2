// Object destructuring

//const person = {
//   name: "Andrew",
//   age: 31,
//   location: {
//     city: "Philadelfia",
//     temp: 22,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = [
//   "1299 Jupiter street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19324",
// ];

// const [, city, state = "New York"] = address;
// console.log(`You are in ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffeeName, , medium] = item;
console.log(`A medium ${coffeeName} costs ${medium}`);
