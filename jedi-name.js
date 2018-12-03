'use strict';

function jediName(firstName, lastName) {
  const newName = lastName.slice(0, 3).concat(firstName.slice(0,2));
  return newName;
}

const myJediName = jediName('Derek', 'Houck');

console.log(myJediName);