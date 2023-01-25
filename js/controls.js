import {
  buttonIcon1,
  buttonIcon2,
  buttonIcon3,
  buttonIcon4,
  buttonPlay,
  buttonPause
} from "./elements.js";

export default function ({}) {
  function toggle1() {
    buttonIcon1.classList.toggle("hide");
  }
  function toggle2() {
    buttonIcon2.classList.toggle("hide");
  }
  function toggle3() {
    buttonIcon3.classList.toggle("hide");
  }
  function toggle4() {
    buttonIcon4.classList.toggle("hide");
  }

  function playButton(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pauseButton(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return {
    toggle1,
    toggle2,
    toggle3,
    toggle4,
    playButton,
    pauseButton
  };
}
