'use strict';

function rockPaperScissors(num) {
  let result = '';
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num === randomNo) {
    result = 'tie';
  }  else {
    switch (num) {
    case 1:
      if (randomNo === 3) {
        result = 'You lose. Paper beats rock.';
      } else {
        result = 'You win. Rock beats scissors.';
      }
      break;
    case 2:
      if (randomNo ===  1) {
        result = 'You lose. Rock beats scissors.';
      } else {
        result = 'You win. Scissors beats paper.';
      }
      break;
    case 3:
      if (randomNo === 2) {
        result = 'You lose. Scissors beats paper.';
      } else {
        result = 'You win. Paper beats rock.';
      }
      break;
    default:
      throw new Error('Please enter a number between 1 and 3');
    }
  }
  return result + ` Your number was ${num} and the computer's was ${randomNo}.`;
}

console.log(rockPaperScissors('rock'));