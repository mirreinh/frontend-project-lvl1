import getRandomInt from '../utils.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if number even otherwise answer "no"';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndCorrectAnswer);
