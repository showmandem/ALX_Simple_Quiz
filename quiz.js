document.addEventListener("DOMContentLoaded" , () => {
    function checkAnswer(){
        let correctAnswer = "4";
    }
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

        if (selectedOption) {
    const userAnswer = selectedOption.value;
    console.log("User selected:", userAnswer);
}       else {
    console.log("Please select an answer before submitting.");
}










})