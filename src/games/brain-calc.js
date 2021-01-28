import getRandomInt from '../utils.js';
import runGame from '../index.js';

const rules = 'What is the result of the expression?';

const sumUp = (numberOne, numberTwo) => numberOne + numberTwo;
const subtract = (numberOne, numberTwo) => numberOne - numberTwo;
const multiply = (numberOne, numberTwo) => numberOne * numberTwo;

const getQuestionAndCorrectAnswer = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const randomIndex = getRandomInt(0, 2);

  const arr = [
    ['+', sumUp],
    ['-', subtract],
    ['*', multiply],
  ];

  const question = `${numberOne} ${arr[randomIndex][0]} ${numberTwo}`;
  const correctAnswer = arr[randomIndex][1](numberOne, numberTwo);

  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndCorrectAnswer);
