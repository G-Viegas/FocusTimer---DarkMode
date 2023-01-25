const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonPause = document.querySelector(".pause");
const buttonIncrease = document.querySelector(".increase");
const buttonDecrease = document.querySelector(".decrease");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const buttonIcon1 = document.querySelector("button.card1");
const buttonIcon2 = document.querySelector("button.card2");
const buttonIcon3 = document.querySelector("button.card3");
const buttonIcon4 = document.querySelector("button.card4");
const buttonDark = document.querySelector("button.buttonDarkMode");
const buttonLight = document.querySelector("button.buttonLightMode");
const darkMode = document.querySelector(".body")

let volumeBar1 = document.getElementById("volume-bar1");
let volumeBar2 = document.getElementById("volume-bar2");
let volumeBar3 = document.getElementById("volume-bar3");
let volumeBar4 = document.getElementById("volume-bar4");



export {
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonIncrease,
  buttonDecrease,
  displayMinutes,
  displaySeconds,
  buttonIcon1,
  buttonIcon2,
  buttonIcon3,
  buttonIcon4,
  buttonDark,
  buttonLight,
  darkMode,
  volumeBar1,
  volumeBar2,
  volumeBar3,
  volumeBar4
}
