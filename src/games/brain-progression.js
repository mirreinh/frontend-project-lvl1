import getRandomInt from '../utils.js';
import runGame from '../index.js';

const rules = 'What number is missing in the progression?';

const missingNumberInArray = getRandomInt(0, 4);

const getQuestionAndCorrectAnswer = () => {
  let progressionMember = getRandomInt(1, 100);
  const progressionStep = getRandomInt(1, 10);

  let index = 0;
  const arr = [progressionMember];
  const progressionLength = 10;

  for (index; index < progressionLength - 1; index += 1) {
    progressionMember += progressionStep;
    arr.push(progressionMember);
  }
  const correctAnswer = arr[missingNumberInArray];
  arr[missingNumberInArray] = '..';
  return [arr.join(', '), correctAnswer];
};

export default () => runGame(rules, getQuestionAndCorrectAnswer);
