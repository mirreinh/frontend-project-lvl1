import getRandomInt from '../utils.js';
import runGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getQuestionAndCorrectAnswer = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);

  const correctAnswer = gcd(numberOne, numberTwo);
  const question = `${numberOne} ${numberTwo}`;

  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndCorrectAnswer);
