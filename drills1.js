'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
  return `Hi, my name is ${name} and I'm ${age} years old. I was borin in ${yearOfBirth}.`;
}

let greeting = createGreeting();

// eslint-disable-next-line no-console
console.log(greeting);