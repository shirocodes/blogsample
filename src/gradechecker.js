//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("submissionForm");
    // console.log("This is my form", myForm);
    myForm.addEventListener("submit", submitForm);
})

function submitForm(event) { //Receiving event object with submission details and will execute after the submission:
    event.preventDefault();
    // console.log("The function is listening to the event");

    //get submission details
    const userName = document.getElementById("name").value.trim();
    const userScore = document.getElementById("score").value.trim();
    const resultsOutput = document.getElementById("results");

    //checking the submitted details
    if (userName === "" || userScore === ""||isNaN(userScore)) {
        resultsOutput.textContent = "Insert your name and score.";
        resultsOutput.style.color ="#ff3333";
    } else {
        // console.log(userName, userScore);
        let grade = "";
        const scoreInNumber = parseInt(userScore);
        if (userScore < 0 || userScore > 100) {
            resultsOutput.textContent = "Invalid score! Enter a score between 0 and 100."
            resultsOutput.style.fontWeight = "bold";
            resultsOutput.style.color = "#c41e3a"
        } else {
            switch(true) {
                case (scoreInNumber >=90 && scoreInNumber <= 100):
                    grade = "A";
                    break;
                case (scoreInNumber >=80):
                    grade = "B";
                    break;
                case (scoreInNumber >=70):
                    grade = "C";
                    break;
                default:
                    grade = "D";
            }
        }
        
        document.getElementById("results").textContent = `The results are out ${userName}, you have a grade of ${grade}`;
        resultsOutput.style.color = "#06402b"
    }
}
