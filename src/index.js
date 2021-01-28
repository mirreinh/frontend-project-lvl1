import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};
const attempts = 3;

const runGame = (rules, getQuestionAndAnswer) => {
  const userName = askName();
  console.log(`Hi, ${userName}!`);
  console.log(rules);
  let attempt = 1;
  for (attempt; attempt <= attempts; attempt += 1) {
    const [question, trueAnswer] = getQuestionAndAnswer();
    console.log(`Quesion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${trueAnswer}` === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(`);
      console.log(`Correct answer was '${trueAnswer}'.`);
      console.log("Let's try again!");
      return;
    }
  }
  console.log(`Congratulations, ${userName}, you won!`);
};

export default runGame;
