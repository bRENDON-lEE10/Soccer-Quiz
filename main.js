
// Soccer Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  let totalcorrect = 0;
  let totalquestions = 4;

  //  Answers to Questions
  if (answer1 === "11") {
    document.getElementById("output1").innerHTML = "correct";
    totalcorrect++;
  } else {
    document.getElementById("output1").innerHTML = "Wrong!";
  }

  if (answer2 === "90") {
    document.getElementById("output2").innerHTML = "correct";
    totalcorrect++;
  } else {
    document.getElementById("output2").innerHTML = "Wrong!";
  }

  if (answer3 === "Messi" || answer3 === "Lionel Messi") {
    document.getElementById("output3").innerHTML = "correct";
    totalcorrect++;
  } else {
    document.getElementById("output3").innerHTML = "Wrong!";
  }

  if (answer4 === "Argentina") {
    document.getElementById("output4").innerHTML = "correct";
    totalcorrect++;
  } else {
    document.getElementById("output4").innerHTML = "Wrong!";
  }

  // Calculation Output
  document.getElementById("output").innerthml = totalcorrect;

  let percent1 = (totalcorrect / totalquestions) * 100;
  document.getElementById("output").innerHTML = percent1;

  if (totalcorrect === 4) {
    document.getElementById("output5").innerHTML = "You're a soccer star!!!";
  }
  if (totalcorrect === 3) {
    document.getElementById("output5").innerHTML = "Keep up the good work.";
  }
  if (totalcorrect === 2) {
    document.getElementById("output5").innerHTML = "Good try";
  }
  if (totalcorrect === 1) {
    document.getElementById("output5").innerHTML = "Maybe next time";
  }

  if (totalcorrect === 0) {
    document.getElementById("output5").innerHTML = "You need some practice.";
  }
}
