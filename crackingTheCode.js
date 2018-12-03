'use strict';

function decode(message) {
  const arr = message.split(' ');
  const newArr = [];
  arr.forEach(word => {
    switch (word[0]) {
    case 'a':
      newArr.push(word[1]);
      break;
    case 'b':
      newArr.push(word[2]);
      break;
    case 'c':
      newArr.push(word[3]);
      break;
    case 'd':
      newArr.push(word[4]);
      break;
    default:
      newArr.push(' ');
      break;
    }
  });
  const newMessage = newArr.join('');
  return newMessage;
}

const decodedMessage = decode('craft block argon meter bells brown croon droop');

console.log(decodedMessage);