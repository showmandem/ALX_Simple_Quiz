
function checkAnswer(){

const feedback = document.getElementById("feedback")
const answer = document.querySelector('input[name="quiz"]:checked');
const userAnswer = answer.value

let correctAnswer = "4";
    if(userAnswer===correctAnswer){
        feedback.textContent = "Correct! Well done."
    }
    else{
        feedback.textContent = "That's incorrect. Try again!"
    }

}
const submit = document.getElementById('submit-answer');
submit.addEventListener("click" , checkAnswer)


   