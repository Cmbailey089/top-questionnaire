var questionBox = document.getElementsByClassName("Question")
var answerbox = document.getElementsByClassName("button")
var checker = document.getElementsByClassName("checker")
var current = 0

questionnaire = {

    "Which animal resides in Antartica?": ["Penguins", "Snakes", "Bears",0],

    "What state does Georgia Tech reside?": ["Maine", "Georgia", "Texas",1],

    "A boolean is a true/false statement": ["False", "True",1]
};

function loadQuestion(curr) {

    var question = Object.keys(questionnaire)[curr];

    questionBox.innerHtml="";
    questionBox.innerHtml= question;
}

