// listen for the event that the DOMContent has loaded 
document.addEventListener("DOMContentLoaded", function(){
    // if the dom content has loaded , i want to listen for the submit action from my form 
    const myForm = document.getElementById("submissionForm")
    console.log("this is my form ", myForm)
    myForm.addEventListener("submit", submitForm)
})

function submitForm(event){
    //default submissions prevented on page loads 
    event.preventDefault()
    console.log("The function is listening to the event")

    // pick the username and i need to pick the score 
    const name = document.getElementById("name").value.trim()
    const score = document.getElementById("score").value.trim()

   if(name === "" && !score){
         alert("score or name cannot be empty")
    } else {
        console.log(name, score)
         /// continue with my logic 
         /// >= 90 A . >= 80 B . >= 70 C , D
         let grade = ""
         const newscore = parseInt(score)
         if(newscore >= 90){
             grade = "A"
         } else if(newscore >= 80){
            grade = "B"
         } else if(newscore >= 70){
            grade = "C"
         } else {
            grade = "D"
         }
         console.log(grade)
         const result_para = document.getElementById("results")
         result_para.textContent = `${name} you have attained a grade of ${grade}`
    }

}