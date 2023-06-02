const questions = ["What two words every programmer learned first?", "What is the most popular programming problem?", "Why do programmers keep pressing the F5 button?"]

const answerOne = ["Hello world!", "Help me!"]
const answerTwo = ["Out of time", "Missing a Semicolon"]
const answerThree = ["Because it's refreshing", "Fear of forgetting to save"]

function questionOne(answer) {
    return (answer === answerOne[0])
}

function questionTwo(answer) {
    return (answer === answerTwo[1])
}

function questionThree(answer) {
    return (answer === answerThree[0])
}

let num = 0

const question = document.querySelector('.bonus__game-question-text');
question.innerText = questions[num];

const answerBtnOne = document.querySelector('.bonus__game-answer-one');
answerBtnOne.innerText = answerOne[0];

const answerBtnTwo = document.querySelector('.bonus__game-answer-two');
answerBtnTwo.innerText = answerOne[1];
