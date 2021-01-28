import getRandomInt from '../utils.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomInt(1, 100);
  return [question, isPrime(question)];
};

export default () => runGame(rules, getQuestionAndCorrectAnswer);