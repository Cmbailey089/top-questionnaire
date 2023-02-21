

var questionBox = document.getElementsByClassName("topQuestions");
var answerBox = document.getElementsByClassName("answers");
var checker = document.getElementsByClassName("checker");
var current = 0;

var questionnaire = {

    "Which animal resides in Antartica?": ['Penguins', 'Snakes', 'Bears',0],

    "What state does Georgia Tech reside?": ['Maine', 'Georgia', 'Texas',1],

    "A boolean is a true/false statement": ['False', 'True',1]
};
debugger
function loadQuestion(curr) {

    var question = Object.keys(questionnaire)[curr];

    questionBox.innerHtml="";
    questionBox.innerHtml= question;
    
}
debugger

function loadAnswers(curr) {
    var answers = questionnaire[Object.keys(questionnaire)[curr]];

    answerBox.innerHtml="";

    for(var i=0;i<answers.length-1;i+=1){
        var createDiv= document.createElement("div"),
        text=document.createTextNode(answers[i]);

        createDiv.appendChild(text);
        createDiv.addEventListener("click",checkAnswer(i,answers));

        answerBox[0].appendChild(createDiv);
    }
}

function checkAnswer(i,arr) {
    return function(){  
        var userAnswer=arr[arr.length-1];

        if (userAnswer===correctAnswer){
            checker(true);
        } else {
            checker(false);
        }

        if (current<Object.keys(questionnaire).length-1){
            current+=1;

            loadQuestion(current);
            loadAnswers(current);
        } else {
            questionBox.innerHtml= "Your score";
            answerBox.innerHtml="";
        }
    };
}

function checker(boolean) {
    var createDiv=document.createElement("div"),
    text = document.createTextNode(current+1);

    createDiv.appendChild(text);

    if(boolean) {
        createDiv.className+="Correct";
        checker.appendChild(createDiv);
    } else {
        createDiv.className+="Wrong";
        checker.appendChild(createDiv);
    }
}

loadQuestion(current);
loadAnswers(current);

