// Soccer Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
output 1= document.getElementById("output1").toLowerCase()





  let numCorrect = 0;

  //  Answers to Questions
  if (answer === "11") {
    document.getElementById("output1").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output1").innerHTML = "Wrong!";
  }

  if (answer === "90") {
    document.getElementById("output2").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output2").innerHTML = "Wrong!";
  }

  if (answer === "Messi" || answer === "Lionel Messi") {
    document.getElementById("output3").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output3").innerHTML = "Wrong!";
  }

  if (answer === "Argentina") {
    document.getElementById("output4").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output4").innerHTML = "Wrong!";
  }
}

// Question 1 (11)
// Question 2 (90 minutes)
// Question 3 (Messi)
// Question 4 (Argentina)
