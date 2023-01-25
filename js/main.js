import Timer from "./timer.js";
import Events from "./events.js";
import Controls from "./controls.js";
import {
  displayMinutes,
  displaySeconds,
  buttonIcon1,
  buttonIcon2,
  buttonIcon3,
  buttonIcon4,
  
} from "./elements.js";

const controls = Controls({
  buttonIcon1,
  buttonIcon2,
  buttonIcon3,
  buttonIcon4,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  clearTimeout
});

Events({ timer, controls });
