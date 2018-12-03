'use strict';
function yearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}
function createGreeting(name, age) {
  if (name && age ) {
    if(typeof(name) !== 'string' || typeof(age) !== 'number'){
      throw new TypeError('name should be string, age should be positive number')
    }
    const birthYear = yearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${birthYear}.`;
  } else {
    throw new Error('Arguments not valid');
  } 
}

try{
  const greeting = createGreeting('tyler', '27');
  // eslint-disable-next-line no-console
  console.log(greeting);
} catch(e){
  // eslint-disable-next-line no-console
  console.error(e);
}
