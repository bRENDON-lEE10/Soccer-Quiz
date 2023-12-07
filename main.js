// Soccer Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let answer1 = document.getElementById("output1");
  let answer2 = document.getElementById("output2");
  let answer3 = document.getElementById("output3");
  let answer4 = document.getElementById("output4");

  let numCorrect = 0;
  let score = numCorrect / 4;
  document.getElementById("output").innerHTML = score;

  //  Answers to Questions
  if (answer1 === "11") {
    document.getElementById("output1").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output1").innerHTML = "Wrong!";
  }

  if (answer2 === "90") {
    document.getElementById("output2").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output2").innerHTML = "Wrong!";
  }

  if (answer3 === "Messi" || answer3 === "Lionel Messi") {
    document.getElementById("output3").innerHTML = "correct";
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output3").innerHTML = "Wrong!";
  }

  if (answer4 === "Argentina") {
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
