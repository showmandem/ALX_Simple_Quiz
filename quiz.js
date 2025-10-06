document.addEventListener("DOMContentLoaded" , () => {
    function checkAnswer(){
        let correctAnswer = "4";
    }
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const correctAnswer= "4"
        if (userAnswer) {
    const userAnswer = userAnswer.value;
    console.log("User selected:", userAnswer);
}       else {
    console.log("Please select an answer before submitting.");
}

if(userAnswer===correctAnswer){
    document.getElementById("feedback").innerHTML = "Correct Well done."
}
else{
    document.getElementById("feedback").innerHTML = "That's incorrect. Try again!"
}
const submitButton = document.getElementById("submit-answer")
submitButton.addEventListener("click", checkAnswer)





})