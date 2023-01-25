import {
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonIncrease,
  buttonDecrease,
  buttonIcon1,
  buttonIcon2,
  buttonIcon3,
  buttonIcon4,
  buttonDark,
  buttonLight,
  darkMode,
} from "./elements.js";
import {
  audio1,
  audio2,
  audio3,
  audio4,
  isPlayingAudio1,
  isPlayingAudio2,
  isPlayingAudio3,
  isPlayingAudio4,
} from "./sounds.js";

export default function ({ timer, controls }) {
  buttonPlay.addEventListener("click", () => {
    timer.countDown();
    controls.playButton();
  });

  buttonPause.addEventListener("click", () => {
    timer.pause();
    controls.pauseButton();
  });

  buttonStop.addEventListener("click", () => {
    timer.stop();
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  });

  buttonIncrease.addEventListener("click", () => {
    timer.increaseMinutes();
  });

  buttonDecrease.addEventListener("click", () => {
    timer.decreaseMinutes();
  });

  buttonIcon1.addEventListener("click", () => {
    controls.toggle1();
    if (isPlayingAudio1) {
      audio1.pause();
    } else {
      audio1.play();
    }
  });

  buttonIcon2.addEventListener("click", () => {
    controls.toggle2();
    if (isPlayingAudio2) {
      audio2.pause();
    } else {
      audio2.play();
    }
  });

  buttonIcon3.addEventListener("click", () => {
    controls.toggle3();
    if (isPlayingAudio3) {
      audio3.pause();
    } else {
      audio3.play();
    }
  });

  buttonIcon4.addEventListener("click", () => {
    controls.toggle4();
    if (isPlayingAudio4) {
      audio4.pause();
    } else {
      audio4.play();
    }
  });

  buttonDark.addEventListener("click", () => {
    buttonDark.classList.add("hide");
    buttonLight.classList.remove("hide");
    darkMode.classList.toggle("dark-mode");
  });

  buttonLight.addEventListener("click", () => {
    buttonDark.classList.remove("hide");
    buttonLight.classList.add("hide");
    darkMode.classList.toggle("dark-mode");
  });

  
}
