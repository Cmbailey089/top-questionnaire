

var questionBox = document.getElementsByClassName("topQuestions")[0];
var answerBox = document.getElementsByClassName("answers")[0];
var checker = document.getElementsByClassName("checker")[0];
var current = 0;

var questionnaire = {

    "Which animal resides in Antartica?": ['Penguins', 'Snakes', 'Bears',0],

    "What state does Georgia Tech reside?": ['Maine', 'Georgia', 'Texas',1],

    "A boolean is a true/false statement": ['False', 'True',1]
}

function loadQuestion(current) {

    var question = Object.keys(questionnaire)[current];

    questionBox.innerHtml="";
    questionBox.innerHtml= question;
    
}


function loadAnswers(current) {
    var answers = questionnaire[Object.keys(questionnaire)[current]];

    answerBox.innerHtml="";

    for(var i=0;i<answers.length-1;i+=1){
        var createDiv= document.createElement("div"),
        text=document.createTextNode(answers[i]);

        createDiv.appendChild(text);
        createDiv.addEventListener("click",checkAnswer(i,answers));

        answerBox.appendChild(createDiv);
    };
}




function checkAnswer(i,arr) {
    return function(){  
        var userAnswer=i
        correctAnswer=arr[arr.length-1];

        if (userAnswer===correctAnswer){
            checkerAns(true);
        } else {
            checkerAns(false);
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

function checkerAns(boolean) {
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
};

var begin =document.getElementById("begin");
begin.addEventListener("click",startGame);

function startGame() {
    
loadQuestion(current);
loadAnswers(current);

}