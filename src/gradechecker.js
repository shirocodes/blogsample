//listen to the document loading 
document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("submissionForm");
    myForm.addEventListener("submit", submitForm);
}
)

function submitForm(event) {
    event.preventDefault();

    //get submission inputs
    const userName = document.getElementById("name").value.trim();
    const userScore = document.getElementById("score").value.trim();
    const resultOutput = document.getElementById("results");

    //check for user inputs
    if(!userName && !userScore) {
        resultOutput.textContent = "Insert your name and score.";
        resultOutput.style.color = "red";
    } else if (userScore < 0 || userScore > 100) {
        resultOutput.textContent = "Invalid score! Enter a score between 0 and 100.";
        resultOutput.style.color = "red";
    }
    let gradeCheck = "";
    const scoreInNumber = parseInt(userScore);

    if (scoreInNumber >=80) {
        gradeCheck = "A"
        // console.log("my grade is", gradeCheck);
        resultOutput.textContent = "Your grade is A";
    } else if (scoreInNumber >=70) {
        gradeCheck = "B"
        resultOutput.textContent = "Your grade is B";
    } else if (scoreInNumber >=50) {
        gradeCheck = "C"
        resultOutput.textContent = "Your grade is C";
    } else (resultOutput.textContent = "It is a fail");



            


        
}

