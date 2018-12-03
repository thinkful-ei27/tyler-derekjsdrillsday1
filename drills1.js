'use strict';
function yearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative')
  }
  return 2018 - age;
}
function createGreeting(name, age) {
  const birthYear = yearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${birthYear}.`;
}
try{
const greeting = createGreeting('derek', -6);
}catch(e){console.error(e);
}

// eslint-disable-next-line no-console
console.log(greeting);