let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/badass-kapybara.jpg") {
    myImage.setAttribute("src", "images/badass-shoebill.jpg");
    myHeading.textContent = "Badass Hashibiroko"
  } else {
    myImage.setAttribute("src", "images/badass-kapybara.jpg");
    myHeading.textContent = "Badass Kapybara"
  }
});

let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Kapybara est badass, " + myName;
}

myButton.addEventListener("click", function () {
  setUserName();
});
