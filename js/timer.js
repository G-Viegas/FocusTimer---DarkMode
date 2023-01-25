export default function Timer({
  increaseMinutes,
  decreaseMinutes,
  displayMinutes,
  displaySeconds,
  clearTimeout
}) {
  let minutes = Number(displayMinutes.textContent);
  let timerTimeOut;

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    displayMinutes.textContent = String(newMinutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(displayMinutes.textContent);
      let seconds = Number(displaySeconds.textContent);
      let finish = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (finish) {
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        minutes--;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function stop() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut)
  }

  function pause(){
    clearTimeout(timerTimeOut)
  }

  function increaseMinutes() {
    minutes += 5;
    updateDisplay(minutes, 0);
  }

  function decreaseMinutes() {
    if (minutes <= 0) {
      return;
    }
    minutes -= 5;
    updateDisplay(minutes, 0);
  }

  return {
    countDown,
    updateDisplay,
    increaseMinutes,
    decreaseMinutes,
    updateDisplay,
    stop,
    pause
  };
}
