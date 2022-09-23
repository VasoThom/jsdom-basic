//console.log("Starting Javascript");
const messageEl = document.querySelector(".message");
const clickButtonEL = document.querySelector(".clickButton");

messageEl.innerHTML = "This is <b>Javascript</b>";
clickButtonEL.addEventListener("click", () => {
  //console.log("butoon we clicked");
  messageEl.innerHTML =
    "This is <b>Javascript</b> and i changed it with one click";
});
