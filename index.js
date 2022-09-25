console.log("Starting Javascript");
const messageEl = document.querySelector(".message");
const clickButtonEL = document.querySelector(".clickButton");
clickButtonEL.style.backgroundColor = "red";

messageEl.innerHTML = "This is <b>Javascript</b>";
clickButtonEL.addEventListener("click", () => {
  clickButtonEL.style.backgroundColor = "blue";
  console.log("butoon we clicked");
  messageEl.innerHTML =
    "This is <b>JAVASCRIPT</b> and i changed it with ONE click";
  messageEl.style.color = "yellow";
});
console.log("-------------2------------");
const questionEl = document.querySelector(".frage");
const answerEl = document.querySelector(".antwort");
const buttonanswerEl = document.querySelector(".show-answer");
buttonanswerEl.style.backgroundColor = "blue";
buttonanswerEl.style.color = "white";

buttonanswerEl.addEventListener("click", () => {
  //answerEl.style.display = "block";
  answerEl.classList.toggle("hidden");
  answerEl.style.color = "green";
});
